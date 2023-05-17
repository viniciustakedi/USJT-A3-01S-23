import { Controller, Get } from '@nestjs/common'
import { AppService } from './services/app.service'
import { KafkaSendMessage } from './cluster/kafka/producer'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Get('hello-world')
  async getHello(): Promise<any> {
     const helloWorld = await this.appService.getHello()

     return helloWorld
  }
}
