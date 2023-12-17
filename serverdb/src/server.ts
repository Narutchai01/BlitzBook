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
import { AddSeries } from "./controller/Admin/AddSeries";
import { AddCategory } from "./controller/Admin/AddCategory";
import { DeleteUserByID } from "./controller/Admin/DeleteUserBYID";
import { DeleteAuthor } from "./controller/Admin/DeleteAuthor";
import { DeleteBookByID } from "./controller/Admin/DeleteBookByID";
import { GetAllUser } from "./controller/Admin/GetAllUser";
import { GetAuthor } from "./controller/Admin/GetAuthor";
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

//define zone
const PORT = config.port;
const app = express();
app.use(express.json());

const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.array("file"));

export const secret = "HS256";

//route zone
app.get("/api/getallbooks" , GetAllBook)
app.get("/api/checkToken" , checkToken)


//User
app.post("/api/signup" , signup)
app.post("/api/login" , login)
app.post("/api/logout" , logout)
app.put("/api/changepassword" , auth , changePassword)
app.get("/api/MyPurchase" , MyPurchase)
app.get("/api/getDataUserbyID/:id" , GetDataUserByID)
app.get("/api/getBookByID/:id" , GetBookByID)
app.get("/api/getBookinCart" , GetBookInCart)
app.get("/api/getNewReleases", NewRelease);
app.post("/api/addToCart" , auth , AddtoCart)


//Admin
app.post("/api/addAuthor" , AddAuthor)
app.post("/api/addCategory" , AddCategory)
app.post("/api/addPublisher" , AddPublisher)
app.post("/api/addSeries" , AddSeries)
app.put("/api/changepasswordbyadmin" , ChangePasswordByAdmin)
app.put("/api/updatebook" , UpdateBook)
app.get("/api/getalluser" , GetAllUser)
app.get("/api/getWriterBy/:writer" , GetAuthor)
app.delete("/api/deleteuserbyid/:id" , DeleteUserByID)
app.delete("/api/deleteWriter/:type/:id" , DeleteAuthor)
app.delete("/api/deletebook/:id" , DeleteBookByID)



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
