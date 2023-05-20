import { Request, Response } from 'express'
import { CreateTracksService } from './create-tracks-service'

export class CreateTracksController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const service = new CreateTracksService()

    try {
      const result = await service.execute(request.body)
      return response.status(201).json(result)
    } catch (err) {
      console.log({ err })
      return response.status(400)
    }
  }
}
