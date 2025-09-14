import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "@react-native-firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";


const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: {
        name: "furkan"
    },
    token: null,
    pending: false,
    error: null
}

export const registerUser = createAsyncThunk(
    'authSlice/registerUser',
    async ({ email, pass }, { rejectWithValue }) => {
        try {
            const auth = getAuth();

            const response = await createUserWithEmailAndPassword(auth, email, pass);

            return response.user._user
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const loginUser = createAsyncThunk(
    'authSlice/loginUser',
    async ({ email, pass }, { rejectWithValue }) => {
        try {
            const auth = getAuth();

            const response = await signInWithEmailAndPassword(auth, email, pass);

            return response.user._user
        }
        catch (err) {
            console.error(err);
            // * rejectWithValue değerini "return" olmadan kullanırsanız hataları yakalayamazsınız.
            return rejectWithValue(err);
        }
    }
)

export const signOutThunk = createAsyncThunk(
    'authSlice/signOut',
    async (_, { rejectWithValue }) => {
        try{

            const auth = getAuth();

            const response = await signOut(auth);

            console.log("çıkış yapma cevabı", response)
        }
        catch(err){
            console.error(err);
            return rejectWithValue(err)
        }
    }
)

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload._user;
            state.pending = false;
        },
        clearUser: (state) => {
            state.user = null;
            state.pending = false;
        }
    },
    // extraReducers => Thunk (async) istekleri yönetmek için kullanırız.
    extraReducers: (builder) => {
        // ------------ REGISTER DURUMLARI
        // ^ YÜKLENME DURUMU
        builder.addCase(registerUser.pending, (state, action) => {
            state.pending = true;
        })
        // ! HATA DURUMU
        builder.addCase(registerUser.rejected, (state, action) => {
            state.user = null;
            state.pending = false;
            state.error = action.payload
        })
        // * BAŞARILI DURUM
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.user = action.payload
        })

        // ------------LOGIN DURUMLARI
        // ^ YÜKLENME DURUMU
        builder.addCase(loginUser.pending, (state, action) => {
            state.pending = true;
        })
        // ! HATA DURUMU
        builder.addCase(loginUser.rejected, (state, action) => {
            state.user = null;
            state.pending = false;
            state.error = action.payload
        })
        // * BAŞARILI DURUM
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.user = action.payload
        })
    }
})


export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;