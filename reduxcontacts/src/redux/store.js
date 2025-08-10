import { createStore } from "redux";
import contactReducer from "./reducers/contactReducer";

// bütün uygulamanın kullanabildiği ortak bir hafıza oluşturduk
const store = createStore(contactReducer);

export default store;

