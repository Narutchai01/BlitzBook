export interface IConfig {
    port: number | string;
    mongoURI: string;
    supabaseURL: string;
    supabaseKey: string;
    origin: string;
}

export interface supabaseInterface{
    supabaseUrl: string;
    supabaseKey: string;
}