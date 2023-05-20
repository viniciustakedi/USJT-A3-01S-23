import { prismaClient } from '../../../database/prisma-client'
import { CreateUserTracksParams } from '../../../types/CreateUserTracksParams'
import { kafkaConsumer } from '../kafka.consumer'

export async function createUserTrackConsumer() {
  console.log("TRACKS CONSUMER LISTENING")
  const consumer = await kafkaConsumer('CREATE_USER_TRACKS')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const messageToJSON = JSON.parse(messageToString) as CreateUserTracksParams
      console.log(messageToString)

      await prismaClient.$transaction(
        messageToJSON.tracks.map(track => prismaClient.track.create({
          data: {
            name: track.name,
            duration: track.duration,
            albumName: track.albumName,
            imageUrl: track.imageUrl,
            spotifyId: track.spotifyId,
            uri: track.uri,
            userId: messageToJSON.userId
          }
        }))
      )
    }
  })
}

createUserTrackConsumer()
