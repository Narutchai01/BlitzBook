import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VIREACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VIREACT_APP_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabaseKey);



export const downloadFile = async (file) => {
    const regX = new RegExp("https://btancmgsdmeonbgnxnuo.supabase.co/storage/v1/object/public");
    file = file.replace(regX, "");

    const { data, error } = await supabase.storage
        .from("Project_G")
        .download(file);

    if (error) {
        console.log(error);
        return;
    }

    const url = URL.createObjectURL(data);
    window.open(url, "_blank");
};