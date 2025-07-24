import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [
        {
            id: "1",
            name: "ahmet"
        },
        {
            id: "2",
            name: "mehmet"
        }
    ],
    message: 'varsayılan mesaj'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addUser: (state, action) => {
            state.users.push({ ...action.payload, id: Date.now() })
        },

        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            )
        },

        updateUser: (state, action) => {

            // map fonksiyonundan dönen yeni diziyi, state.users'a atamak zorundayız, bunu yapmazsak oluşan güncellenmiş dizi, hiçbir yere atanmadığı için yokolup gidecektir.

            state.users = state.users.map(
                (user) =>
                    user.id == action.payload.id ?
                        { ...user, ...action.payload }
                        : user
            )
        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
