//import zone
import express from "express";
import mysql from "mysql2/promise";
import { config } from "./lib/config";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { getAllComic } from './controller/getAllComicController'
import { signup } from "./controller/SignUpController";

//define zone
const PORT = config.port;
const app = express();
app.use(express.json());

//route zone
app.get("/1" , getAllComic)
app.post("/api/signup" , signup)



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
