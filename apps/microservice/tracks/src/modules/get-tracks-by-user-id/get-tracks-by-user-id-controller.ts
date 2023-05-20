import { Request, Response } from 'express'
import { GetTracksByUserIdService } from './get-tracks-by-user-id-service'

export class GetTracksByUserIdController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const service = new GetTracksByUserIdService()
    const id = parseInt(req.params.id)

    try {
      const result = await service.execute(id)
      return res.status(200).json(result)
    } catch {
      return res.status(400).send()
    }
  }
}
