import "../css/main.scss";
import modalPage from "./user/authPage.js";
import { toggleAuthPage } from "./user/toggleModalPage";
import {addNewBooks, toggleCreatBooks } from "./books/creatNewBook.js";
import renderBooks from "./books/renderBooks.js";
import userName from "./user/userName.js";

renderBooks()
modalPage();
toggleAuthPage();
toggleCreatBooks();
addNewBooks();
userName();