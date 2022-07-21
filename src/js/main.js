import "../css/main.scss";
import modalPage from "./user/authPage.js";
import {addNewBooks, toggleCreatBooks } from "./books/creatNewBook.js";
import renderBooks from "./books/renderBooks.js";
import userName from "./user/userName.js";
import CheckUser from "./user/CheckUser.js";
import { informDelete, informFavorite } from "./books/bookInform.js";
import { toggleEditPage } from "./books/editBook.js";

renderBooks()
modalPage();
toggleCreatBooks();
CheckUser();
addNewBooks();
userName();
informFavorite();
informDelete();
toggleEditPage();
