import { kafkaConsumer } from '../kafka.consumer'

export async function createHelloWorldConsumer() {
  console.log('Hello World Consumer')
  const consumer = await kafkaConsumer('test')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value.toString()
      console.log(messageToString)
    }
  })
}

createHelloWorldConsumer()
