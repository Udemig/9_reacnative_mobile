import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import counterReducer from "./counterReducer";


const rootReducer = combineReducers({
    themeReducer,
    counterReducer
})

export default rootReducer;