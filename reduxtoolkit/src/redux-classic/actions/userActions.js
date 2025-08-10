import { ADD_USER } from "../../utils/actionNames";





export const addUser = (user) => ({ 
    type: ADD_USER, 
    payload: { ...user, id: Date.now().toString() } 
})