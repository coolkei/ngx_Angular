import { Entity } from '@ngx-starter-kit/shared';
import * as moment from 'moment';

export class Account extends Entity {
  public id = 0;
  public first_name?: string;
  public last_name?: string;
  public gender?: Gender;
  public dob?: moment.Moment;
  public email?: string;
  public phone?: string;
  public company?: string;
  public address?: Address;
}

export class Address {
  constructor(
    public street?: string,
    public city?: string,
    public state?: string,
    public zip?: string
  ) {}
}

export enum Gender {
  male = 'make',
  female = 'female'
}
