import { Router } from 'express'
import { CreateUserController } from './create-user/create-user-controller'
import { GetUsersPageController } from './get-users-page/get-users-page-controller'
import { GetUserByIdController } from './get-user-by-id/get-user-by-id-controller'

const router = Router()

router.post('/users', async (req, res) => {
  new CreateUserController().handle(req, res)
})

router.get('/users', async (req, res) => {
  new GetUsersPageController().handle(req, res)
})

router.get('/users/:id', async (req, res) => {
  new GetUserByIdController().handle(req, res)
})

router.get('/users/health', async (req, res) => {
  return res.status(200).send({ message: 'ok' })
})

export { router }
