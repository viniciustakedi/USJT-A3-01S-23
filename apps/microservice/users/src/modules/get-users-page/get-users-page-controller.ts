import { Request, Response } from 'express'
import { GetUsersPageService } from './get-users-page-service'

export class GetUsersPageController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const service = new GetUsersPageService()

    try{
      const result = await service.execute()
      return res.status(200).json(result)
    } catch (err) {
      console.log({ err })
      return res.status(400)
    }
  }
}
