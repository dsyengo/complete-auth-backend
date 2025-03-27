import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_URL = process.env.MONGO_URL

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(MONGO_URL)

        console.log(`Database connected succesfully`)
    } catch (error) {
        console.log('Error connectiong to database', error)
    }
}

