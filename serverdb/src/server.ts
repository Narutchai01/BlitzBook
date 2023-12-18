//import zone
import express from "express";
import multer from "multer";
import { config } from "./lib/config";
import { GetAllBook } from './controller/Admin/GetAllBook'
import { signup } from "./controller/SignUpController";
import { login } from "./controller/LoginController";
import { MyPurchase } from "./controller/MyPurchaseController";
import { AddPublisher } from "./controller/Admin/AddPublisher";
import { AddAuthor } from "./controller/Admin/AddAuthor";
import { AddCategory } from "./controller/Admin/AddCategory";
import { DeleteUserByID } from "./controller/Admin/DeleteUserBYID";
import { DeleteWriter } from "./controller/Admin/DeleteWriter";
import { DeleteBookByID } from "./controller/Admin/DeleteBookByID";
import { GetAllUser } from "./controller/Admin/GetAllUser";
import { GetWriter } from "./controller/Admin/GetWriter";
import { ChangePasswordByAdmin } from "./controller/Admin/ChangePasswordByAdmin";
import { AddtoCart } from "./controller/Admin/AddtoCart";
import { UpdateBook } from "./controller/Admin/UpdateBookController";
import { logout } from "./controller/LogoutController";
import { checkToken } from "./controller/CheckToken";
import { changePassword } from "./controller/ChangePasswordController";
import { GetBookByID } from "./controller/GetBookByID";
import { GetBookInCart } from "./controller/GetBookInCart";
import { GetDataUserByID } from "./controller/GetDataUserByID";
import { NewRelease } from "./controller/NewRelease";
import { auth } from "./middleware/auth";
import { BestSaler } from "./controller/BestSaler";
import { PostBook } from "./controller/Admin/PostBook";
import { GetMyCollection } from "./controller/GetMyCollection";
import cors from "cors";



import { test } from "./controller/test";


//define zone
const PORT = config.port;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173" || config.origin,
    credentials: true,
  })
);

const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.array("file"));

export const secret = "HS256";

//route zone
app.get("/api/checkToken" , checkToken)
app.get("/api/getallbooks" , GetAllBook)


//User
app.post("/api/signup" , signup)
app.post("/api/login" , login)
app.get("/api/logout" , logout)
app.post("/api/addToCart" , auth,AddtoCart)
app.put("/api/changepassword" , auth , changePassword)
app.get("/api/MyPurchase" , MyPurchase)
app.get("/api/getDataUserbyID/:id" , GetDataUserByID)
app.get("/api/getBookByID/:id" , GetBookByID)
app.get("/api/getBookinCart" , GetBookInCart)
app.get("/api/getBestSaler", BestSaler);
app.get("/api/getNewReleases", NewRelease);
app.get("/api/getCollection", GetMyCollection);

//Admin
app.post("/api/addAuthor" , AddAuthor)
app.post("/api/addCategory" , AddCategory)
app.post("/api/addPublisher" , AddPublisher)
app.post("/api/postbook" , PostBook)
app.put("/api/changepasswordbyadmin" , ChangePasswordByAdmin)
app.put("/api/updatebook/:id" , UpdateBook)
app.get("/api/getalluser" , GetAllUser)
app.get("/api/getWriterBy/:writer" , GetWriter)
app.delete("/api/deleteuserbyid/:id" , DeleteUserByID)
app.delete("/api/deleteWriter/:type/:id" , DeleteWriter)
app.delete("/api/deletebook/:id" , DeleteBookByID)


app.get("/api/test" , test)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
