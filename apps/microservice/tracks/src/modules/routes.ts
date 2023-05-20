import { Router } from 'express'
import { CreateTracksController } from './create-tracks/create-tracks-controller'

const router = Router()

router.post('/tracks', async (req, res) => {
  new CreateTracksController().handle(req, res)
})

export { router }
