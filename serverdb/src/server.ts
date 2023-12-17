//import zone
import express from "express";
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



//define zone
const PORT = config.port;
const app = express();
app.use(express.json());
export const secret = "HS256";
//route zone



//User
app.post("/api/signup" , signup)
app.post("/api/login" , login)
app.get("/api/MyPurchase" , MyPurchase)

//Admin
app.post("/api/addauthor" , AddAuthor)
app.post("/api/addcategory" , AddCategory)
app.post("/api/addpublisher" , AddPublisher)
app.post("/api/addseries" , AddSeries)
app.post("/api/addtocart" , AddtoCart)
app.put("/api/changepasswordbyadmin" , ChangePasswordByAdmin)
app.get("/api/getallbooks" , GetAllBook)
app.get("/api/getalluser" , GetAllUser)
app.get("/api/getauthor" , GetAuthor)
app.delete("/api/deleteuserbyid/:id" , DeleteUserByID)
app.delete("/api/deleteauthor/:id" , DeleteAuthor)
app.delete("/api/deletebook/:id" , DeleteBookByID)







app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
