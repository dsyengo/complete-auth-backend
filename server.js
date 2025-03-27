import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'


import { connectDB } from './config/mongodb.js'
import authRoutes from './routes/authRoutes.js'


const app = express()
const PORT = process.env.PORT || 4000
connectDB()

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})