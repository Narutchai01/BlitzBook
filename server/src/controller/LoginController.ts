import { Request, Response } from 'express';
import { client, connectDB } from '../server';
import { secret } from '../server';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        await connectDB()
        const result = await client.db('user').collection('user').findOne({ email })
        if (!result) {
            return res.status(400).json({ message: 'not users' })
        }
        const passMatch = await bcrypt.compare(password, result.password)
        if (!passMatch) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
        const token = jwt.sign({result},secret,{expiresIn:'1h'})
        res.cookie('token',token,{httpOnly:true})
        res.status(200).json(result)
        await client.close()
    } catch (error) {
        console.log(error);
    }

}