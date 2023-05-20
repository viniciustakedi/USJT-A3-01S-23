import { kafka } from '.'

export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: 'test-group' })
  await consumer.connect()

  await consumer.subscribe({ topic, fromBeginning: true })

  return consumer
}
