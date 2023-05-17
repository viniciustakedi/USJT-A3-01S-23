import { Injectable } from '@nestjs/common'
import { KafkaSendMessage } from '../cluster/kafka/producer'

@Injectable()
export class AppService {
  constructor(
    private readonly kafkaSendMessage: KafkaSendMessage) { }

  async getHello(): Promise<any> {
    const helloWorld = {
      value: 'Microservice User - Hello World!',
      sensitiveContent: 'teste',
      timestamp: new Date().toISOString()
    }

    await this.kafkaSendMessage.execute('test', { message: {
      password: helloWorld.value,
      createdDate: helloWorld.timestamp
     }})

    return helloWorld
  }
}
