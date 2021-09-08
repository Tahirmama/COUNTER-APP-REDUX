import { increment,decrement,reset } from "../ActionCreator/Action";


const initialState = {
    counter : 0,
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case increment:
            return { ...state, counter : state.counter + 1 };
        case decrement:
            return { ...state, counter : state.counter - 1 };
            case reset:{
                return {...initialState}
            }
        default:
            return state;
    
}
}