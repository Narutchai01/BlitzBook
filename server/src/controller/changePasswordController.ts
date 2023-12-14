import { Request, Response } from "express";
import { client, connectDB } from "../server";
import { hashPassword, matchPassword } from "../lib/ManagementPassWord";
import { ObjectId } from "mongodb";

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { id,password,newpassword } = req.body;
    await connectDB();
    const findUser = await client.db("user").collection("user").findOne({ _id: new ObjectId(id as string) });
    if (!findUser) {
      return res.status(400).send("User not found");
    }
    const match = await matchPassword(password, findUser.password);
    if (!match) {
      return res.status(400).send("Wrong password");
    }
    const hash = await hashPassword(newpassword);
    await client.db("user").collection("user").updateOne({ _id: new ObjectId(id as string) }, { $set: { password: hash } });
    res.status(200).send("Change Password Success");
  } catch (error) {
    console.log("Error", error);
  }
};
