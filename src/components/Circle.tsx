import React from "react";
import "../app/globals.css";

interface CircleProps {
    ml?: string;
    mt?: string;
    c?: string;
    w?: string;
    h?: string;
    r?: string;
    children?: React.ReactNode;
}

const Circle: React.FC<CircleProps> = ({ml,mt,c,w,h,r,children}) => {
    return (
            <div 
                className="circle" 
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
                    <p className="textInCircle">{children}</p>
            </div>
    );
}

export default Circle;