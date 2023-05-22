import { Request, Response } from 'express'
import { CreateArtistsService } from './create-artists-service'

export class CreateArtistsController {
  constructor() { }

  async handle(request: Request, response: Response) {
    const service = new CreateArtistsService()

    try {
      const result = await service.execute(request.body)
      return response.status(201).json(result)
    } catch {
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}
