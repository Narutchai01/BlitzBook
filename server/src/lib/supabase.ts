import { createClient } from "@supabase/supabase-js";
import { uuid } from "uuidv4";
import { config } from "./config";

const supabaseKey = config.supabaseKey;
const supabaseUrl = config.supabaseURL;

export const supabase: any = createClient(supabaseUrl, supabaseKey);

export const upLoadeIMG = async (file: any) => {
  const fileName = "images/" + uuid() + ".jpg"  ;
  const { error } = await supabase.storage
    .from("Project_G")
    .upload(fileName, file, { cacheControl: "image/jpg"});
  if (error) {
    throw error;
  }
  const { data } = await supabase.storage.from("Project_G").getPublicUrl(fileName);
  return data.publicUrl;
};


export const upLoadePDF = async (file: any) => {
  const fileName = "pdf/" + uuid() + ".pdf"  ;
  const { error } = await supabase.storage
    .from("Project_G")
    .upload(fileName, file, { cacheControl: "application/pdf"});
  if (error) {
    throw error;
  }
  const { data } = await supabase.storage.from("Project_G").getPublicUrl(fileName);
  return data.publicUrl;
};