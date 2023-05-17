import { kafkaConsumer } from '../kafka.consumer'


type UserConsumer = {
  id: string
  name: string
  spotify_id: string
  spotify_uri: string
}

export async function CreateUserConsumer() {
  const consumer = await kafkaConsumer('users')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value.toString()
      const user = JSON.parse(messageToString) as UserConsumer
      console.log('CREATE USER CONSUMER', user)
    }
  })
}

CreateUserConsumer()
