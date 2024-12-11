import React from "react";
import "../app/globals.css";

interface RectangleProps {
    ml?: string;
    mt?: string;
    c?: string;
    w?: string;
    h?: string;
    r?: string;
    children?: React.ReactNode;
}

const Rectangle: React.FC<RectangleProps> = ({ml,mt,c,w,h,r,children}) => {
    return (
            <div 
                className="rectangle" 
                style={{
                marginLeft:ml, 
                marginTop:mt,
                backgroundColor:c,
                height:h,
                width:w,
                rotate:r,
                color: c === "white" ? "black" : "white",
                }}
            >
                    <p className="textInRectangle">{children}</p>
            </div>
    );
}

export default Rectangle;