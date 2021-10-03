import React from "react"
import "../App.css"
import "./layout.js"


function RowFive({calculator}){

    return(

        <div  style = {{margin: "0vh 0vh 0vh 0vh"}} className = "container0">
            <div className = "row">
                    <button id = "0" onClick = {calculator.numberCheck}type="button" className="lightGrey longer"   >0</button> 
                    <button id = "." type="button" className="lightGrey longer">.</button> 
                    <button id = "=" onClick = {calculator.operatorCheck} type="button" className="orange longer">=</button>
            </div>
        </div>

    )
}

export default RowFive