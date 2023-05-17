import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './services/app.service'
import { KafkaSendMessage } from './cluster/kafka/producer'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KafkaSendMessage]
})
export class AppModule {}
