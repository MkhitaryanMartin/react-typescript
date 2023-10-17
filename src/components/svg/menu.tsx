import React from "react";

type Props = {
    width?:string,
    height?:string,
    color?:string,
    onClick: ()=> void,
    classname?: string
  }

function MenuIcon({
    width,
  height,
  color,
  onClick,
  classname = ""
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            x="0"
            y="0"
            viewBox="0 0 50 50"
            onClick={onClick}
        >

            <path
                fill={"#fff"} 
                d="M0 7.5v5h50v-5H0zm0 15v5h50v-5H0zm0 15v5h50v-5H0z"
            ></path>
        </svg>
    );
}

export default MenuIcon;