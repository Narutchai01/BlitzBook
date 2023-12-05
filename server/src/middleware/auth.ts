import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../server';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: 'not token' });
        }
        const decoded = jwt.verify(token, secret);
        res.status(200).json({ message: 'have token', decoded});
        next();
    } catch (error) {
        console.log(error);
    }
};