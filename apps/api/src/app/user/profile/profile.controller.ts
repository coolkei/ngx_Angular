import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  FileInterceptor,
  ForbiddenException,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiImplicitFile, ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../../core';
import { CurrentUser, Roles, RolesEnum, User } from '../../auth';
import { Profile } from './profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

const ALLOWED_MIME_TYPES = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];

@ApiOAuth2Auth(['read'])
@ApiUseTags('Profile')
@Controller('profile')
export class ProfileController extends CrudController<Profile> {
  constructor(private readonly profileService: ProfileService) {
    super(profileService);
  }

  @ApiOperation({ title: 'get CurrentUser Profile' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found user record', type: Profile })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get('myprofile')
  async myProfile(@CurrentUser() user: User): Promise<Profile> {
    console.log('in myprofile', user.profileId);
    if (user.profileId) {
      // TODO: https://github.com/typeorm/typeorm/issues/1865
      return this.profileService.getOne(user.profileId);
    } else {
      throw new NotFoundException('No Profile Found');
    }
  }

  @ApiOperation({ title: 'find all Profiles. Admins only' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All Profiles',
    type: Profile /*[[Profile], Number]*/,
    isArray: true,
  })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(): Promise<[Profile[], number]> {
    return this.profileService.getAll();
  }

  @ApiOperation({ title: 'Find Profile by id. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Profile })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Profile> {
    console.log('in findById', id);
    return this.profileService.getOne(id);
  }

  @ApiOperation({ title: 'Create new Profile.' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: Profile,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: true, description: 'Profile Picture' })
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.indexOf(file.mimetype) === -1) {
          return cb(
            new BadRequestException(
              `Error! Incorrect mimetype '${file.mimetype}'. Correct: ${ALLOWED_MIME_TYPES.join(', ')}`,
            ),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024000,
      },
    }),
  )
  @Post()
  async create(@Body() entity: CreateProfileDto, @UploadedFile() file, @CurrentUser() user: User): Promise<Profile> {
    if (user.profileId) {
      throw new BadRequestException('user already has profile. if you want to change, use UPDATE');
    }
    return this.profileService.create(entity, file, user);
  }

  @ApiOperation({ title: 'Update an existing record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully edited.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: false, description: 'Profile Picture' })
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.indexOf(file.mimetype) === -1) {
          return cb(
            new BadRequestException(
              `Error! Incorrect mimetype '${file.mimetype}'. Correct: ${ALLOWED_MIME_TYPES.join(', ')}`,
            ),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024000,
      },
    }),
  )
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: CreateProfileDto,
    @UploadedFile() file,
    @CurrentUser() user: User,
  ): Promise<any> {
    if (!user.profileId) {
      throw new ForbiddenException('Current User dont have profile');
    }
    if (user.profileId !== parseInt(id, 10)) {
      throw new ForbiddenException('only owner can update their profile');
    }
    return this.profileService.update(parseInt(id, 10), entity, file, user);
  }

  @ApiOperation({ title: 'Delete Profile' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (!user.profileId) {
      throw new ForbiddenException('Current User dont have profile');
    }
    if (user.profileId !== parseInt(id, 10)) {
      throw new ForbiddenException('only owner can delete their profile');
    }
    return this.profileService.delete(parseInt(id, 10), user);
  }
}
