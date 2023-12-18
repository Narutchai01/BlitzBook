"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postbook = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const supabase_1 = require("../../lib/supabase");
const postbook = async (req, res) => {
    try {
        const dataFile = req.files;
        const url = await Promise.all(dataFile.map(async (file) => {
            if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
                const url = await (0, supabase_1.upLoadeIMG)(file.buffer);
                return url;
            }
            else if (file.mimetype === "application/pdf") {
                const url = await (0, supabase_1.upLoadePDF)(file.buffer);
                return url;
            }
        }));
        const { title, author, price, description, publisher, category } = req.body;
        await server_1.client.connect();
        const image = Promise.all(url?.map((item) => {
            if (item && item.match(/\.jpg$/) && item !== undefined && item !== null) {
                return item;
            }
        }));
        const pdf = Promise.all(url?.map((item) => {
            if (item && item.match(/\.pdf$/) && item !== undefined && item !== null) {
                return item;
            }
            else {
                return false;
            }
        }));
        const pdfResult = await pdf;
        const imageData = await image;
        const data = {
            title,
            author: new mongodb_1.ObjectId(author),
            publisher: new mongodb_1.ObjectId(publisher),
            category: new mongodb_1.ObjectId(category),
            price,
            description,
            image: imageData[1],
            pdf: pdfResult[0],
            sales: 0,
            date: new Date(),
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
