import { Router } from 'express'
import { GetArtistsByUserIdController } from './get-artists-by-user-id/get-artists-by-user-id-controller'

const router = Router()

router.get('/artists/:id', async (req, res) => {
  new GetArtistsByUserIdController().handle(req, res)
})

router.get('/artists/health', async (req, res) => {
  return res.status(200).json({ message: 'ok' }).send()
})

export { router }
