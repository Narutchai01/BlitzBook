import dotenv from 'dotenv';
import { IConfig } from '../interface/interface';

dotenv.config();



export const config:IConfig  = {
    port : Number(process.env.PORT) || 3000,
    RDS_HOSTNAME : process.env.RDS_HOSTNAME || 'localhost',
    RDS_USERNAME : process.env.RDS_USERNAME || 'admin123',
    RDS_PASSWORD : process.env.RDS_PASSWORD || 'admin123',
    RDS_DB_NAME : process.env.RDS_DB_NAME || 'admin123',
    RDS_PORT : Number(process.env.RDS_PORT) || 3306,
}