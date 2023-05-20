import { Request, Response } from 'express'
import { GetUserByIdService } from './get-user-by-id-service'

export class GetUserByIdController{
  constructor() {}

  async handle(req: Request, res: Response) {
    const service = new GetUserByIdService()
    const id = parseInt(req.params.id)

    try{
      const result = await service.execute(id)
      return res.status(200).json(result)
    } catch (err) {
      console.log({ err })
      return res.status(404).send()
    }
  }
}
