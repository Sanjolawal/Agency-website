import React from "react";
import ReactDom from "react-dom";
import  "./style.css";
import  Apps from "./components/App.js"


function Appcomponents(){
    return(
    <Apps/>
    )
}

ReactDom.render(<Appcomponents/>,document.getElementById('root'))

