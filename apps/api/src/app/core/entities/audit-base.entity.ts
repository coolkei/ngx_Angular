import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn, RelationId,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
// FIXME: we need to import User like this to avoid Circular denpendence problem
import { User } from '../../auth/user.entity';
import { RequestContext } from '../context';

// TODO: Implement Soft Delete

export abstract class AuditBase {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @ApiModelProperty({ type: User })
  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  createdBy?: User;

  @ApiModelProperty({ type: User })
  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  updatedBy?: User;

  @Exclude()
  @VersionColumn()
  version?: number;

  @BeforeInsert()
  setCreatedByUser() {
    const currentUser = RequestContext.currentUser();
    if (currentUser) {
      this.createdBy = currentUser;
    }
  }

  /**
   * NOTE: @BeforeUpdate won't run if you just call update(id, partialEntity)
   * https://github.com/typeorm/typeorm/blob/master/docs/listeners-and-subscribers.md#beforeupdate
   */
  @BeforeUpdate()
  setUpdatedByUser() {
    const currentUser = RequestContext.currentUser();
    if (currentUser) {
      this.updatedBy = currentUser;
    }
  }
}
