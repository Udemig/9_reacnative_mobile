import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// store, bütün uygulamanın erişebildiği bir hafıza bankası gibidir
// uygulamanın erişebilmesi için oluşturduktan sonra, Provider ile uygulamayı sarmalamamız gereklidir.
const store = createStore(rootReducer);

export default store;
