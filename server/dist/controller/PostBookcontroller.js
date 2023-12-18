"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postbook = void 0;
const supabase_1 = require("../lib/supabase");
const server_1 = require("../server");
const postbook = async (req, res) => {
    try {
        const img_url = await (0, supabase_1.upLoadeIMG)(req.file?.buffer);
        const pdf_url = await (0, supabase_1.upLoadePDF)(req.file?.buffer);
        const { title, author, price, description } = req.body;
        await server_1.client.connect();
        const data = {
            title,
            author,
            price,
            description,
            img_url,
            pdf_url,
        };
        await server_1.client.db("Project_G").collection("books").insertOne(data);
        await server_1.client.close();
        res.status(200).send({
            status: "success",
            data: data,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.postbook = postbook;
