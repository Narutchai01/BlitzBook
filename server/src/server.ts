//import zone
import express from "express";
import { MongoClient } from "mongodb";
import { login } from "./controller/LoginController";
import { signup } from "./controller/SignUpController";
import { postbook } from "./controller/PostBookcontroller";
import { config } from "./lib/config";
import bodyparser from "body-parser";
import multer from "multer";

//define zone
const port = config.port;
const uri = config.mongoURI;
const app = express();
app.use(express.json());
app.use(bodyparser.json());
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

app.use(multerMid.single("file"));

//rounter
app.post("/login", login);
app.post("/signup", signup);
app.post("/postbook", postbook);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
