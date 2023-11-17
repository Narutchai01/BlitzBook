import { Request, Response } from 'express';
import { client, connectDB } from '../server';
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        await connectDB()
        const result = await client.db('user').collection('user').findOne({ email })
        if (!result) {
            return res.status(400).json({ message: 'not users' })
        }
        const passMatch = result.password === password
        if (!passMatch) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
        res.status(200).json(result)
        client.close()
    } catch (error) {
        console.log(error);
    }

}