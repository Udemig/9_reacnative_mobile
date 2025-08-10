import { ADD_USER, DELETE_USER } from "../../utils/actionNames"

const initialState = {
    users: [
        {
            id:"1",
            name:"ahmet"
        },
        {
            id:"2",
            name:"mehmet"
        }
    ],
    message: "varsayılan mesaj"
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }
        default:
            return state
    }

}

export default userReducer;