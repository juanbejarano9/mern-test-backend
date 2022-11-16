import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bejadsy:bejulu230903@cluster0.x61hzzm.mongodb.net/postsdb?retryWrites=true&w=majority'
export const PORT = process.env.PORT || 8080