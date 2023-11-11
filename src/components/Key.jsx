import React, {useContext} from "react";
import { AppContext } from "../App";

export default function Key({val, isBig}){
    const {onSelect, onDelete, onEnter} = useContext(AppContext);

    function selectLetter(){
        if (val ==="Enter"){
            onEnter();
        } else if (val==="Delete"){
            onDelete();
        } else {
            onSelect(val);
        }
    }
    return (
    <div className="key" id={isBig && "bigKey"} onClick={selectLetter}>
        {val}
    </div>)
}