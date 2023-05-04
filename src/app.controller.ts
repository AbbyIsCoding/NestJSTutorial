import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // will get executed automatically when ever a get request reaches / (nothing)
  getHello(): string {
    return this.appService.getHello();
  }
}
