import { kafka } from '.'

export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: 'USJT-A3-01S-23' })
  await consumer.connect()

  await consumer.subscribe({ topic, fromBeginning: true })

  return consumer
}
