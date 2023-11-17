import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400).json({ message: 'not token' })
        }
        next()
    } catch (error) {
        console.log(error);

    }
}