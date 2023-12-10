import mysql from 'mysql2';
import { config }  from './config';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';



const params = {
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    database: config.RDS_DB_NAME,
    port: config.RDS_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const Connect = () => new Promise<mysql.Connection>((resolve) => {
    const connectDB = mysql.createConnection(params);

    connectDB.connect((err) => {
        if (err) {
            throw new Error(`Connection error: ${err.message}`);
        }
        resolve(connectDB);
    });
});

const Query = async (connection: mysql.Connection , query:string) => new Promise ((resolve , reject) => {
    connection.query(query , connection , (Error , result) => {
        if (Error) {
            reject(Error);
            return
        }
        resolve(result);
    })
})

export {Connect , Query};