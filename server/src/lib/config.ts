import dotenv from 'dotenv';
import { IConfig} from '../interface/interface';

dotenv.config();

export const config:IConfig = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || '',
    supabaseKey: process.env.SUPABASE_KEY || '',
    supabaseURL: process.env.SUPABASE_URL || ''
};