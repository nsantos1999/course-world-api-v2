import { Injectable } from '@nestjs/common';
import { IUser } from 'course-world-types/src';

@Injectable()
export class AppService {
  getHello(): IUser {
    const user: IUser = {
      id: 1,
      email: 'asdasd',
      name: 'asdasd',
    };
    return user;
  }
}
