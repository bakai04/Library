import "../css/main.scss";
import modalPage from "./user/authPage.js";
import { toggleModalPage } from "./user/toggleModalPage";
import {addNewBooks, toggleCreatBooks } from "./books/creatNewBook.js";
import renderBooks from "./books/renderBooks.js";
import userName from "./user/userName.js";

renderBooks()
modalPage();
toggleModalPage();
toggleCreatBooks();
addNewBooks();
userName();