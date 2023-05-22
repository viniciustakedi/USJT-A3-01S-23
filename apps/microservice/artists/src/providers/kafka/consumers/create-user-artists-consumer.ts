import { CreateArtistsService } from '../../../modules/create-artists/create-artists-service'
import { CreateUserArtistsParams } from '../../../types/CreateUserArtistsParams'
import { kafkaConsumer } from '../../kafka.consumer'

const service = new CreateArtistsService()

export async function createUserArtistsConsumer() {
  console.log("ARTISTS CONSUMER LISTENING")
  const consumer = await kafkaConsumer('CREATE_USER_ARTISTS')
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const messageToJSON = JSON.parse(messageToString) as CreateUserArtistsParams

      console.log(messageToJSON)

      await service.execute(messageToJSON)
      console.log("ARTISTS CONSUMER EXECUTED")
    }
  })
}

createUserArtistsConsumer()
