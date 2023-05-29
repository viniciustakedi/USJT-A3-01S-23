import express from 'express'
import { router } from './modules/routes'
import cors from 'cors'

const app = express()
const port =  process.env.API_PORT || 5000

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`USERS SERVER RUNNING ON PORT ${port}`))
