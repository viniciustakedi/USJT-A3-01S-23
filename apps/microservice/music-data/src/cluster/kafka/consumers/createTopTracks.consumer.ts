import { kafkaConsumer } from '../kafka.consumer'


type UserConsumer = {
  id: string
  name: string
  spotify_id: string
  spotify_uri: string
  top_tracks: any[]
}

export async function CreateTopTracksConsumer() {
  const consumer = await kafkaConsumer('USER_TRACKS')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value.toString()
      const user = JSON.parse(messageToString) as UserConsumer
      console.log(user.id)
    }
  })
}

CreateTopTracksConsumer()
