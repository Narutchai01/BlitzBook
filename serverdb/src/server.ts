//import zone
import express from "express";
import mysql from "mysql2/promise";
import { config } from "./lib/config";

//define zone
const PORT = config.port;
const app = express();
app.use(express.json());
const initdb = async () => {
  const connection = await mysql.createPool({
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
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



//route zone
app.post("/api/v1/user", async (req, res) => {
  
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
