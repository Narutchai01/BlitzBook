import e, { Request, Response, query } from "express";
import { dbConnect } from "../lib/mysql";
import { hashPassword } from "../lib/ManagePassword";
import { getErrorMessage, reportError } from "../lib/Error";

export const signup = async (req: Request, res: Response) => {
  try {
    const client = dbConnect();
    const { fname, lname, username, date, email, password, role } = req.body;
    const createuser = {
      fname,
      lname,
      username,
      date: date || "datepart()",
      email,
      password: await hashPassword(password),
      role: role || "user",
    };

    if (!fname || !lname || !username || !email || !password) {
      res.status(400).send({
        message: "Please fill all of required field",
      });
    }

    await client.query(
      `INSERT INTO User(fname, lname, username ,
             date, email, password, role) VALUES(? , ? , ? , ? , ? , ? , ?)`,
      [
        createuser.fname,
        createuser.lname,
        createuser.username,
        createuser.date,
        createuser.email,
        createuser.password,
        createuser.role,
      ]
    );

    return res.status(201).send({
      message: "Sign up sucessed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
