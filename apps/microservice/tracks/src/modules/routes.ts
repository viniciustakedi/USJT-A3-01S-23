import { Router } from 'express'
import { CreateTracksController } from './create-tracks/create-tracks-controller'
import { GetTracksByUserIdController } from './get-tracks-by-user-id/get-tracks-by-user-id-controller'

const router = Router()

router.post('/tracks', async (req, res) => {
  new CreateTracksController().handle(req, res)
})

router.get('/tracks/:id', async (req, res) => {
  new GetTracksByUserIdController().handle(req, res)
})

router.get('/tracks/health', async (req, res) => {
  return res.status(200).send({ message: 'ok' })
})

export { router }
