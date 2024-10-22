import React, { useState } from "react";
import './Common.css'
import { Box } from "@mui/material";

type Props={
    id:string,
    label:string ,
    type:string,
    className?:string 
}

const InputBox: React.FC<Props> = ({id,label,type,className}:Props) => {
  

  return (
    <Box component='div' className={`input-container ${className}`}>
        <input id={id} type={type}  className="input-field"></input>
        <label htmlFor={id} className="input-label">{label}</label>
    </Box>
  );
};

export default InputBox;
