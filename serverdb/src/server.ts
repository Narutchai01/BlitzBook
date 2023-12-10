//import zone
import express from "express";
import mysql from "mysql2/promise";
import { config } from "./lib/config";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

//define zone
const PORT = config.port;
const app = express();
app.use(express.json());

const initdb = async () => {
  const conn = await mysql.createConnection({
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    database: config.RDS_DB_NAME,
    port: config.RDS_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
};


export const init = async () => {
  try {
    await initdb();
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    
  }
};

let conn:any = null;
//route zone
app.get("/test", async (req, res) => {
  const conn = await mysql.createConnection({
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    database: config.RDS_DB_NAME,
    port: config.RDS_PORT,
  });
  const result = await conn.query('select * from comic where comic_id = 1');
  res.json(result[0])
});

app.get("/" , async (req , res) => {
  await initdb();
  const result = await conn.query('select * from comic where comic_id = 1');
  res.json(result[0])
})

app.get("/1" , (res , req) => {

})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
