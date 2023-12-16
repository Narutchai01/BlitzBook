import mysql from 'mysql2';
import { config }  from './config';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';



const params = {
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    port: config.RDS_PORT,
    database:config.RDS_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const Connect = () => new Promise<mysql.Connection>((resolve,reject) => {
    const connectDB = mysql.createConnection(params);

    connectDB.connect((Error) => {
        if (Error) {
            reject(Error);
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

async function userInsert(username:string, password:string, email:string, role:string) {
    const insert = "INSERT INTO USER(username, password, email, role) VALUES ?"
}

const createUser = async (connection:mysql.Connection , userinsert:string) => new Promise ((resolve , reject) => {
    connection.query(userinsert , connection , (Error , user)=> {
        if (Error) {
            reject(Error);
            return
        }
        resolve(user)
    })
})

export {Connect , Query , createUser , userInsert};