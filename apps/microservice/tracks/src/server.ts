import express from 'express'
import { router } from './modules/routes'
import cors from 'cors'
import './providers/kafka/consumers'

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`TRACKS SERVER RUNNING ON PORT ${port}`))
