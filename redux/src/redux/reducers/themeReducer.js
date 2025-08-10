// src/redux/reducers/themeReducer.js

const initialState = {
    theme: "light",
    fontSize:20
};

//reducer, state'e bir güncelleme için olay gönderildiğinde bu olayı inceleyen ve state'in durumunu güncelleyen fonksiyondur.

const themeReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SETLIGHTTHEME':
            return {...state, theme: "light"};
        case 'SETDARKTHEME':
            return {...state, theme: "dark"};
        default:
            return state;
    }
};

export default themeReducer;
