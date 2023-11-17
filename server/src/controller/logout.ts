import { Request, Response } from 'express';

export const logout = (req:Request, res:Response) => {
    try {
        res.clearCookie('token')
        res.status(200).json({message : 'logout'})
    } catch (error) {
        console.log(error);
        
    }
}