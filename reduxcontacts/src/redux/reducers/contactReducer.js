const initialState = {
    contacts: [
        {
            id:1,
            name:"Ali",
            phone: "+90 555 444 3333"
        },
        {
            id:2,
            name:"Mehmet",
            phone: "+46 444 333 2121"
        },
        {
            id:3,
            name:"Yeni Kullanıcı",
            phone: "+1 44 777 8745"
        },
    ],
    message:"DENEME YAZISI"
};

// reducerımızı oluşturuyoruz ve başlangıç state'i olarak initialState veriyoruz.
export default contactReducer = (state = initialState, action) => {

    switch(action.type){
        case "ADD_CONTACT":
            const randomID = Date.now();

            return {...state, 
                contacts: [...state.contacts, {...action.payload,id:randomID}] }


        case "LOAD_CONTACTS":
            return {...state, contacts: action.payload}


        case "DELETE_CONTACT":
            return {...state, 
                contacts: state.contacts.filter((item)=>item.id!==action.payload)}

        case "UPDATE_CONTACT":

            return {...state, 
                contacts: state.contacts.map(contact => 
                    contact.id === action.payload.id ? action.payload : contact
                )
            }

        default:
            return {...state}
    }
}