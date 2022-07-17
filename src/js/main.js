import "../css/main.scss";
import getBooks from "./CRUD/getBooks.js";
import modalPage from "./user/modalPage.js";
import { toggleModalPage } from "./user/toggleModalPage";
import toggleCreatBooks from "./CRUD/toggleCreatBooks.js";
import addNewBooks from "./CRUD/addNewBooks.js";


modalPage();
toggleModalPage();
getBooks()
toggleCreatBooks();
addNewBooks();
