import { kafkaConsumer } from '../kafka.consumer'

export async function CreateUserConsumer() {
  const consumer = await kafkaConsumer('users')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value.toString()
      console.log(messageToString)
    }
  })
}

CreateUserConsumer()
