"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret = void 0;
//import zone
const express_1 = __importDefault(require("express"));
const config_1 = require("./src/lib/config");
const GetAllBook_1 = require("./src/controller/Admin/GetAllBook");
const SignUpController_1 = require("./src/controller/SignUpController");
const LoginController_1 = require("./src/controller/LoginController");
const MyPurchaseController_1 = require("./src/controller/MyPurchaseController");
const AddPublisher_1 = require("./src/controller/Admin/AddPublisher");
const AddAuthor_1 = require("./src/controller/Admin/AddAuthor");
const AddSeries_1 = require("./src/controller/Admin/AddSeries");
const AddCategory_1 = require("./src/controller/Admin/AddCategory");
const DeleteUserBYID_1 = require("./src/controller/Admin/DeleteUserBYID");
const DeleteAuthor_1 = require("./src/controller/Admin/DeleteAuthor");
const DeleteBookByID_1 = require("./src/controller/Admin/DeleteBookByID");
const GetAllUser_1 = require("./src/controller/Admin/GetAllUser");
const GetAuthor_1 = require("./src/controller/Admin/GetAuthor");
//define zone
const PORT = config_1.config.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.secret = "HS256";
//route zone
//User
app.post("/api/signup", SignUpController_1.signup);
app.post("/api/login", LoginController_1.login);
app.get("/api/MyPurchase", MyPurchaseController_1.MyPurchase);
//Admin
app.post("/api/addauthor", AddAuthor_1.AddAuthor);
app.post("/api/addcategory", AddCategory_1.AddCategory);
app.post("/api/addpublisher", AddPublisher_1.AddPublisher);
app.post("/api/addseries", AddSeries_1.AddSeries);
app.update();
app.get("/api/getallbook", GetAllBook_1.GetAllBook);
app.get("/api/getalluser", GetAllUser_1.GetAllUser);
app.get("/api/getallauthor", GetAuthor_1.GetAuthor);
app.delete("/api/deleteuserbyid/:id", DeleteUserBYID_1.DeleteUserByID);
app.delete("/api/deleteauthor/:id", DeleteAuthor_1.DeleteAuthor);
app.delete("/api/deletebook/:id", DeleteBookByID_1.DeleteBookByID);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
