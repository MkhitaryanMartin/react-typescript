import React from "react";

type Props = {
  width?:string,
  height?:string,
  color?:string,
  onClick: ()=> void,
  classname?: string
}

function CloseIcon({
  width,
  height,
  color,
  onClick,
  classname = ""
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "23"}
      height={height || "23"}
      fill="none"
      viewBox="0 0 23 23"
      onClick={onClick}
      className={classname}
    >
      <path
        fill={color || "#fff"}
        d="M14.144 11.5l8.062-8.044A1.883 1.883 0 1019.544.794L11.5 8.856 3.456.794A1.883 1.883 0 00.794 3.456L8.856 11.5.794 19.544a1.875 1.875 0 000 2.662 1.874 1.874 0 002.662 0l8.044-8.062 8.044 8.062a1.874 1.874 0 002.662 0 1.875 1.875 0 000-2.662L14.144 11.5z"
      ></path>
    </svg>
  );
}

export default CloseIcon;
