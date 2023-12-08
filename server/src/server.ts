//import zone
import express from "express";
import { MongoClient } from "mongodb";
import { login } from "./controller/LoginController";
import { signup } from "./controller/SignUpController";
import { postbook } from "./controller/PostBookcontroller";
import { config } from "./lib/config";
import bodyparser from "body-parser";
import multer from "multer";
import {changePassword} from "./controller/changePasswordController";
import cors from "cors";
import cookieParser from "cookie-parser";
import {getalluser} from "./controller/GetalluserController";
import { searchbook } from "./controller/SearchController";
import { getDataUserByID } from "./controller/GetdataUserById";
// import { auth } from "./middleware/auth";
import { checkToken } from "./controller/CheckTokenController";

//define zone
const port = config.port;
const uri = config.mongoURI;
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors(
  {
    origin:'http://localhost:5173' || config.origin,
    credentials: true
  }
));


export const client = new MongoClient(uri);
export const secret = "HS256";
export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to DB");
  } catch (e) {
    console.log("Error", e);
  }
};
const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.array("file"));

//rounter
app.post("/api/login", login);
app.post("/api/signup", signup);
app.post("/api/postbook", postbook);
app.put("/api/changepassword", changePassword);
app.get("/api/getalluser",getalluser);
app.get("/api/searchbook",searchbook);
app.get("/api/getDataUserByID",getDataUserByID);
app.get("/api/checkToken",checkToken);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
