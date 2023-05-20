import { Request, Response } from 'express'
import { CreateUserService } from './create-user-service'

export class CreateUserController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const service = new CreateUserService()

    try{
      const result = await service.execute(req.body)
      return res.status(201).json(result)
    } catch (err) {
      console.log({ err })
      return res.status(400)
    }
  }
}
