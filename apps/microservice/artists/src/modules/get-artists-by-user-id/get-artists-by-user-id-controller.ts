import { Request, Response } from 'express'
import { GetArtistsByUserIdService } from './get-artists-by-user-id-service'

export class GetArtistsByUserIdController {
  constructor() {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const getArtistsByUserIdService = new GetArtistsByUserIdService()

    try {
      const artists = await getArtistsByUserIdService.execute(parseInt(id))
      return response.status(200).json(artists)

    } catch {
      return response.status(400).json({
        message: 'Unexpected error while getting artists by user id'
      })
    }
  }
}
