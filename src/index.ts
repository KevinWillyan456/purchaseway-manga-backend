import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { connectToDatabase } from './database'
import { routes } from './routes'

config()
connectToDatabase()

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(port, () =>
    console.log(`Servidor rodando na porta: ${port} - http://localhost:${port}`)
)
