import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './services/app.service'
import { KafkaSendMessage } from './cluster/kafka/producer'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KafkaSendMessage, PrismaService]
})
export class AppModule {}
