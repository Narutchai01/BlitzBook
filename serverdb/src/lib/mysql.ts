import mysql from 'mysql2';
import { config }  from './config';

const dbConnect = () => {
    const pool = mysql
      .createPool({
        host: config.RDS_HOSTNAME,
        user: config.RDS_USERNAME,
        password: config.RDS_PASSWORD,
        port: config.RDS_PORT,
        database:config.RDS_DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      })
      .promise()
  
    return pool
  }

export {dbConnect};