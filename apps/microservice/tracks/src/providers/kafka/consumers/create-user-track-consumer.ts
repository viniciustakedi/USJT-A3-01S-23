import { prismaClient } from '../../../database/prisma-client'
import { CreateTracksService } from '../../../modules/create-tracks/create-tracks-service'
import { CreateUserTracksParams } from '../../../types/CreateUserTracksParams'
import { kafkaConsumer } from '../kafka.consumer'

const service = new CreateTracksService()

export async function createUserTrackConsumer() {
  console.log("TRACKS CONSUMER LISTENING")
  const consumer = await kafkaConsumer('CREATE_USER_TRACKS')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const messageToJSON = JSON.parse(messageToString) as CreateUserTracksParams

      console.log(messageToJSON)

      await service.execute(messageToJSON)
      console.log("TRACKS CONSUMER EXECUTED")
    }
  })
}

createUserTrackConsumer()
