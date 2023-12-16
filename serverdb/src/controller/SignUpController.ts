import { Request , Response, query } from "express";
import { Connect , Query } from "../lib/mysql";
import { hashPassword } from "../lib/ManagePassword";




export const signup = async (req: Request , res: Response) => {
    
    try {
        const { username, password, email, role} = req.body;
        const createuser = {
            username ,
            password: await hashPassword(password),
            email,
            role : role || "user"
        };
        let query = `INSERT INTO User(username, password, email, role) VALUES ("${createuser.username}", "${createuser.password}", "${createuser.email}", "${createuser.role}")`;
        await Connect()
        .then(connection => {
            Query(connection , query)
            .then(user => {
                return res.status(201).json({
                    user
                })
            })
            }).catch(Error => {
            return res.status(500).json({
                message: Error.message,
                Error
            })
        })
    } catch (error) {
        console.log(Error, error);
    }
}