import express from 'express'
import { router } from './modules/create-tracks/routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(5002)
