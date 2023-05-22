import { kafka } from '.'

export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: 'TESTE2' })
  await consumer.connect()

  await consumer.subscribe({ topic, fromBeginning: true })

  return consumer
}
