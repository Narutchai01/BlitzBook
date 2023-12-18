import { Request, Response } from "express";
import { dbConnect } from "../lib/mysql";
import { hashPassword , matchPassword } from "../lib/ManagePassword"; 
import { getErrorMessage , reportError } from "../lib/Error";

export const changePassword =async (req: Request, res:Response) => {
    try {
        const { id , password , newpassword } = req.body;
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM User WHERE _id = ? ` , id);
        if (result[0][0] < 1) {
            return res.status(400).send({
                message: "User not found"
            });
        }
        const match = await matchPassword(password, result[0][0].password);
        
        if (!match) {
            return res.status(400).send({
                message: "Invalid password"
            });
        }
        const hash = await hashPassword(newpassword);
        const newpass = await client.query(`UPDATE User SET password = "${hash}" WHERE _id = ${id}`);
        res.status(200).send({
            message: "Change password successed"
        });
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send("Error occurred while processing data");
            
    }
}

