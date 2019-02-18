import { BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as sharp from 'sharp';
import * as crypto from 'crypto';

import { ImageType } from '@ngx-starter-kit/models';
import { CrudService } from '../../core';
import { Profile } from './profile.entity';
import { User } from '../../auth';
import { Image } from './image.entity';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService extends CrudService<Profile> {
  constructor(
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
  ) {
    super(profileRepository);
  }

  async create(entity: CreateProfileDto, file, user: User): Promise<Profile> {
    // TODO: do in transaction: https://github.com/odavid/typeorm-transactional-cls-hooked
    let profile: Profile;
    if (file) {
      const avatar = {
        title: file.originalname,
        type: ImageType.Profile,
        user,
        data: await sharp(file.buffer)
          .resize(100)
          .toBuffer(),
        checksum: crypto
          .createHash('sha1')
          .update(file.buffer)
          .digest('hex'),
        mimeType: file.mimetype,
        size: file.size,
      };
      profile = await super.create({ avatar, ...entity });
    } else {
      profile = await super.create(entity);
    }
    await this.userRepository.update(user.id, { profile });
    return profile;
  }

  async update(id: number, entity: CreateProfileDto, file, user: User): Promise<UpdateResult | Profile> {
    if (!file) {
      return super.update(id, entity);
    }
    const profile = await super.getOne(id);
    if (!profile) {
      throw new BadRequestException('profile not found. something wrong');
    }
    const avatar = profile.avatar
      ? {
          id: profile.avatar.id,
          title: file.originalname,
          data: await sharp(file.buffer)
            .resize(100)
            .toBuffer(),
          checksum: crypto
            .createHash('sha1')
            .update(file.buffer)
            .digest('hex'),
          mimeType: file.mimetype,
          size: file.size,
        }
      : {
          title: file.originalname,
          type: ImageType.Profile,
          user,
          data: await sharp(file.buffer)
            .resize(100)
            .toBuffer(),
          checksum: crypto
            .createHash('sha1')
            .update(file.buffer)
            .digest('hex'),
          mimeType: file.mimetype,
          size: file.size,
        };

    return this.profileRepository.save({ id, ...entity, avatar });
  }

  async delete(id: number, user: User): Promise<any> {
    // TODO: no cascade OneToOne delete yet. so manually delete image first. https://github.com/typeorm/typeorm/issues/3218
    await this.imageRepository.delete({ user: { id: user.id }, type: ImageType.Profile });
    return super.delete(id);
  }
}
