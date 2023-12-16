import dotenv from 'dotenv';
import { IConfig } from '../interface/interface';

dotenv.config();

export const config:IConfig  = {
    port : Number(process.env.PORT) || 3000,
    RDS_HOSTNAME : process.env.HOST_NAME || 'localhost',
    RDS_USERNAME : process.env.USERNAME_DB || 'admin123',
    RDS_PASSWORD : process.env.PASSWORD_DB || 'admin123',
    RDS_DB_NAME : process.env.DBS_NAME || 'admin123',
    RDS_PORT : Number(process.env.PORT_DB) || 3306,
}