import dotenv from 'dotenv';
import { IConfig} from '../interface/interface';

dotenv.config();

export const config:IConfig = {
    port: process.env.PORT || 3000,
    mongoURI: String(process.env.MONGO_URI),
    supabaseKey:String(process.env.SUPABASE_KEY) ,
    supabaseURL:String(process.env.SUPABASE_URL) , 
    origin: String(process.env.ORIGIN),
};