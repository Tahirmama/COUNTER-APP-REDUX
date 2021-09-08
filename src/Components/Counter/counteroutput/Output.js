import React from "react";
import { useSelector } from "react-redux";

export default function Output(){
    const counter = useSelector((state)=>state.counter)
    return(
        <div>
            Counter Value  : {counter}
        </div>
    )
}  