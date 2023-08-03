const initialState = 100 ;
const changeTheNumber =(state = initialState , action) =>{
     switch(action.type) {
        case "INCREAMENT": return state + action.payload;
        case "DECREAMENT": return state - 5;
        default :return state;
     }
    }

export default changeTheNumber;
