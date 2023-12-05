import { Request, Response } from "express";
import {client} from "../server";
import { hashPassword, matchPassword} from "../lib/ManagementPassWord";
import { ObjectId } from "mongodb";


export const changePassword = async (req: Request, res: Response) => {
  try {
    const { _id, password, newpassword } = req.body;
    await client.connect();
    // serch password
    const findUser = await client.db("user").collection("user").findOne({ _id: new ObjectId(_id)});
    // check user
    if (!findUser){
      res.status(404).json({ message: "User not found" });
      return;
    }
    // check password
    const isMatch = await matchPassword(password, findUser.password);
    if (!isMatch) {
      res.status(400).json({ message: "Password not match" });
      return;
    }
    // hash password
    const hash = await hashPassword(newpassword);
    // update password
    await client.db("user").collection("user").updateOne({ _id: new ObjectId(_id) }, { $set: { password: hash } });
    //send response 
    res.status(200).json({ message: "Change password successfully" });
  } catch (error) {
    console.log("Error", error);
  }
};
