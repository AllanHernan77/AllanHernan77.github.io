import React from "react"
import "../App.css"



function RowTwo({calculator}){

    return(

        <div className="container0">

            <div style = {{margin: "-25vh 0vh 0vh 0vh"}} className ="row">
                <button id = "7" onClick = {calculator.numberCheck} type="button" className="lightGrey">7</button> 
                <button id = "8" onClick = {calculator.numberCheck} type="button" className="lightGrey">8</button> 
                <button id = "9" onClick = {calculator.numberCheck} type="button" className="lightGrey">9</button> 
                <button id = "*" onClick = {calculator.operatorCheck} type="button" className="orange">X</button> 
            </div>

        </div>

    )
}


export default RowTwo