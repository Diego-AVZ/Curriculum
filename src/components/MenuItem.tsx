import React from "react";
import "../app/globals.css";

interface ItemProps {
    children?:React.ReactNode;
}

const Item:React.FC<ItemProps> = ({children})=> {
    return(
        <p className="menu-item">
            {children}
        </p>
    );
}

export default Item;