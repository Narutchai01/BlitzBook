import { Request , Response, query } from "express";
import { dbConnect } from "../lib/mysql";
import { matchPassword } from "../lib/ManagePassword";
import { getErrorMessage , reportError } from "../lib/Error";
import jwt from "jsonwebtoken"; // Added missing import statement
import { secret } from "../server";

export const login = async (req:Request , res:Response) => {
    try {
        const client = dbConnect();
        const { email , password } = req.body;
        const result:any= await client.query(`SELECT * FROM User WHERE email = "${email}"`) 

        const MatchPassword = await matchPassword(password, result[0][0].password); 
        
        if (!email || !password) {
            res.status(400).send({
                message: "please fill"
            })
        } else if (result[0] !== null && (!MatchPassword))
            return res.status(401).send({
                message: "Email or Password is incorrect"
            })
        else if (result[0] === null)
            return res.status(401).send({
                message: "Email or Password is incorrect"
        })
        const payload = {
            id: String(result[0][0]._id), 
            role: String(result[0][0].role)
        }
        
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true })
        res.send({message:"login success", result: result[0][0]})
        res.status(200).send(email)
    } catch (error) {
        console.log(error);
        ;
    }
}