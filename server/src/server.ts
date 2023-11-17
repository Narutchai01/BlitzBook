import express from 'express'
const app = express()
const port = 8000
import { MongoClient, ObjectId } from 'mongodb'
import { login } from './controller/LoginController'
import { signup } from './controller/SignUpController'

const uri = 'mongodb+srv://fluk123:fluk123@cluster0.tdfudre.mongodb.net/'
app.use(express.json())

export const client = new MongoClient(uri)

export const connectDB = async () => {
    try {
        await client.connect()
        console.log('Connected to DB');
    }
    catch (e) {
        console.log('Error', e);
    }
}




//rounter
app.post('/login', login)
app.post('/signup', signup)





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})