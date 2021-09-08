import React from "react";
import { useDispatch } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../../ActionCreator/Action";



export default function Input() {
    const dispatch = useDispatch(); //dispatch fucntion store or reducer ka passs ja kar value change krwaega 
    return (
        <div >
            <button onClick={() => dispatch(incrementAction())}>
                INCREMENT
            </button>
            <button onClick={() => dispatch(decrementAction())}>
                DECREMENT
            </button>
            <button onClick={() => dispatch(resetAction())}>
                RESET
            </button>
        </div>
    )

}