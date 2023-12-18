"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upLoadePDF = exports.upLoadeIMG = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const config_1 = require("./config");
const uuid_1 = require("uuid");
const supabaseKey = config_1.config.supabaseKey;
const supabaseUrl = config_1.config.supabaseURL;
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
const upLoadeIMG = async (file) => {
    const fileName = "images/" + (0, uuid_1.v4)() + ".jpg";
    const { error } = await exports.supabase.storage
        .from("Project_G")
        .upload(fileName, file, { cacheControl: "image/jpg" });
    if (error) {
        throw error;
    }
    const { data } = await exports.supabase.storage
        .from("Project_G")
        .getPublicUrl(fileName);
    return data.publicUrl;
};
exports.upLoadeIMG = upLoadeIMG;
const upLoadePDF = async (file) => {
    const fileName = "pdf/" + (0, uuid_1.v4)() + ".pdf";
    const { error } = await exports.supabase.storage
        .from("Project_G")
        .upload(fileName, file, { cacheControl: "application/pdf" });
    if (error) {
        throw error;
    }
    const { data } = await exports.supabase.storage
        .from("Project_G")
        .getPublicUrl(fileName);
    return data.publicUrl;
};
exports.upLoadePDF = upLoadePDF;
