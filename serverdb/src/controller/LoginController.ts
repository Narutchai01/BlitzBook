import { Request , Response, query } from "express";
import { dbConnect } from "../lib/mysql";
import { matchPassword } from "../lib/ManagePassword";
import { getErrorMessage , reportError } from "../lib/Error";
import jwt from "jsonwebtoken";
import { secret } from "../server";

export const login = async (req:Request , res:Response) => {

    try {
        const client = dbConnect();
        const { email , password } = req.body;
        const result : any = await client.query(`SELECT * FROM User WHERE email = "?"`, [email])
        const MatchPassword = await matchPassword(password, result.password);
        if (result[0] !== null && !(MatchPassword))
            return res.status(401).send({
                message: "Email or Password is incorrect"
            })
        else if (result[0] === null)
        return res.status(401).send({
            message: "Email or Password is incorrect"
        })
        const id = result[0][0]._id  
        const role = result[0][0].role
        const token = jwt.sign({id , role}, secret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
    } catch (error) {
        reportError({message: getErrorMessage(error)})
    }

}