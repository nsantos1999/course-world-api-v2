import { Controller, Get } from '@nestjs/common';
import { IUser } from 'course-world-types/src';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IUser {
    return this.appService.getHello();
  }
}
