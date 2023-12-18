import { Request , Response, query } from "express";
import { dbConnect } from "../lib/mysql";
import { hashPassword } from "../lib/ManagePassword";
import { getErrorMessage , reportError } from "../lib/Error";


export const signup = async (req: Request , res: Response) => {
         
    try {
        const client = await dbConnect();
        const { fname, lname, username , date, email, password, role} = req.body;
        const createuser = {
            fname, 
            lname, 
            username,
            date: date || "curdate()",
            email,
            password: await hashPassword(password),
            role: role || "user",
        }
        
        if (fname || lname || username || date || email || password || role === null) {
            res.status(400).send({
                message: "Please fill all of required field"
            })
        }

        await client.query(`INSERT INTO User(fname, lname, username ,
             date, email, password, role) VALUES(
            "${createuser.fname}", "${createuser.lname}", 
            "${createuser.username}", ${createuser.date}, 
            "${createuser.email}","${createuser.password}",
             "${createuser.role}"
        )`);
        
        
        return res.status(201).send({
            message: "Sign up sucessed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    }
}
