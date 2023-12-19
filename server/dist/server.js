"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.secret = exports.client = void 0;
//import zone
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const LoginController_1 = require("./controller/LoginController");
const SignUpController_1 = require("./controller/SignUpController");
const PostBookcontroller_1 = require("./controller/admin/PostBookcontroller");
const config_1 = require("./lib/config");
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const GetalluserController_1 = require("./controller/admin/GetalluserController");
const GetdataUserById_1 = require("./controller/GetdataUserById");
const CheckTokenController_1 = require("./controller/CheckTokenController");
const GetAllBooks_1 = require("./controller/admin/GetAllBooks");
const DeletBookByID_1 = require("./controller/admin/DeletBookByID");
const DeleteUserById_1 = require("./controller/admin/DeleteUserById");
const logoutController_1 = require("./controller/logoutController");
const AddAuthor_1 = require("./controller/admin/AddAuthor");
const AddPublisher_1 = require("./controller/admin/AddPublisher");
const GetWriter_1 = require("./controller/admin/GetWriter");
const DeleteWritter_1 = require("./controller/admin/DeleteWritter");
const AddCategory_1 = require("./controller/admin/AddCategory");
const GetBookByID_1 = require("./controller/GetBookByID");
const AddtoCart_1 = require("./controller/admin/AddtoCart");
const GetBookinCart_1 = require("./controller/GetBookinCart");
const NewReleasesController_1 = require("./controller/NewReleasesController");
const DeleteBookinCart_1 = require("./controller/DeleteBookinCart");
const CheckOutController_1 = require("./controller/CheckOutController");
const changePasswordController_1 = require("./controller/changePasswordController");
const Test_1 = require("./controller/Test");
const BestsalerController_1 = require("./controller/BestsalerController");
const auth_1 = require("./middleware/auth");
const MyPurchaseController_1 = require("./controller/MyPurchaseController");
const GetMyCollection_1 = require("./controller/GetMyCollection");
const AddSeries_1 = require("./controller/admin/AddSeries");
const UpdateBookController_1 = require("./controller/admin/UpdateBookController");
//define zone
const port = config_1.config.port;
const uri = config_1.config.mongoURI;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173" || config_1.config.origin,
    credentials: true,
}));
exports.client = new mongodb_1.MongoClient(uri);
exports.secret = "HS256";
const connectDB = async () => {
    try {
        await exports.client.connect();
        console.log("Connected to DB");
    }
    catch (e) {
        console.log("Error", e);
    }
};
exports.connectDB = connectDB;
const multerMid = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
app.use(multerMid.array("file"));
//rounter
app.get("/", (req, res) => {
    res.send("Porject_G");
});
app.get("/api/checkToken", CheckTokenController_1.checkToken);
app.get("/api/getallbooks", GetAllBooks_1.getallBooks);
// user router
app.post("/api/login", LoginController_1.login);
app.post("/api/signup", SignUpController_1.signup);
app.put("/api/changepassword", auth_1.auth, changePasswordController_1.changePassword);
app.get("/api/logout", logoutController_1.logout);
app.get("/api/getBookByID/:id", GetBookByID_1.getBookByID);
app.post("/api/addToCart", auth_1.auth, AddtoCart_1.AddtoCart);
app.get("/api/getBookinCart", GetBookinCart_1.getBookinCart);
app.get("/api/getNewReleases", NewReleasesController_1.getNewReleases);
app.delete("/api/deleteBookinCart", auth_1.auth, DeleteBookinCart_1.DeleteBookinCart);
app.post("/api/checkout", CheckOutController_1.CheckoutController);
app.delete("/api/deleteBookinCartForCheckout", DeleteBookinCart_1.DeleteBookinCartForCheckout);
app.get("/api/getDataUserByID/:id", GetdataUserById_1.getDataUserByID);
app.get("/api/getBestSaler", BestsalerController_1.getBestSaler);
app.get("/api/MyPurchase", MyPurchaseController_1.MyPurchaseController);
app.get("/api/getCollection", GetMyCollection_1.GetMyCollection);
//admin router
app.delete("/api/deleteWriter/:type/:id", DeleteWritter_1.DeleteWritter);
app.get("/api/getWriterBy/:writer", GetWriter_1.GetWriter);
app.delete("/api/deletebook/:id", DeletBookByID_1.deleteBookByID);
app.delete("/api/deleteuser/:id", DeleteUserById_1.deleteUserByID);
app.get("/api/getalluser", GetalluserController_1.getalluser);
app.post("/api/postbook", PostBookcontroller_1.postbook);
app.post("/api/addAuthor", AddAuthor_1.AaddAuthor);
app.post("/api/addPublisher", AddPublisher_1.AaddPublisher);
app.post("/api/addCatagory", AddCategory_1.AddCategory);
app.post("/api/test", Test_1.test);
app.post("/api/addSeries", AddSeries_1.AddSeries);
app.put("/api/updatebook/:id", UpdateBookController_1.UpdateBook);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
