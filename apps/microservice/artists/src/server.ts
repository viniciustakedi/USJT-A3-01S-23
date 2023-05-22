import cors from 'cors'
import express from 'express'
import { router } from './modules/routes'
import './providers/kafka/consumers'

const app = express()
const port = 5002

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => console.log(`ARTISTS SERVER RUNNING ON PORT ${port}`))
