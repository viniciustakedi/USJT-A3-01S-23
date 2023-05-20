import express from 'express'
import { router } from './modules/routes'
import './providers/kafka/consumers'

const app = express()

app.use(express.json())
app.use(router)

app.listen(5002)
