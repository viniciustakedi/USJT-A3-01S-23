import { Router } from 'express'
import { CreateUserController } from './create-user-controller'

const router = Router()

router.post('/users', async (req, res) => {
  new CreateUserController().handle(req, res)
})

export { router }
