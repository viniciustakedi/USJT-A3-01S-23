import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from './services/app.service'
import { User } from '@prisma/client'
import { CreateUserDTO } from './dtos/CreateUserDTO'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) { }

  @Post('create')
  async createUser(@Body() body: CreateUserDTO): Promise<User> {
    const result = await this.appService.createUser(body)

    return result
  }
}
