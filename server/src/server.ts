import express from 'express'
const app = express()
const port = 8000
import { MongoClient, ObjectId } from 'mongodb'


const uri = 'mongodb+srv://fluk123:fluk123@cluster0.tdfudre.mongodb.net/'
app.use(express.json())

const client = new MongoClient(uri)

const connectDB = async () => {
    try{
        await client.connect()
        console.log('Connected to DB');
    }
    catch(e){
        console.log('Error', e);
    }

}

connectDB()

app.get('/hello-world', (req, res) => {
    res.send('hello world 3')
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})