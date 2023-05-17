import { Injectable } from '@nestjs/common'
import { KafkaSendMessage } from '../cluster/kafka/producer'
import { PrismaClient } from '@prisma/client'
import { createUser } from './createUser/createUser'
import { PrismaService } from '../database/prisma.service'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

@Injectable()
export class AppService {
  constructor(
    private readonly kafkaSendMessage: KafkaSendMessage,
    private readonly prisma: PrismaService) { }

  async createUser(params: CreateUserDTO): Promise<any> {
    return await createUser(params, this.prisma, this.kafkaSendMessage)
  }
}
