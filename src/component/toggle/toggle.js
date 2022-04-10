import React from "react";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme=useContext(ThemeContext)
  const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"});
  }
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon"  onClick={handleClick}/>
      <img src={Moon} alt="" className="t-icon"onClick={handleClick} />
      {/* <div className="t-button" ></div> */}
    </div>
  );
};
export default Toggle;
