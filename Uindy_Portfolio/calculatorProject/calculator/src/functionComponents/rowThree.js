import React from "react"
import "../App.css"

function RowThree({calculator}){

    return(

        <div style = {{margin: "-10vh 0vh 0vh 0vh"}} className= "container0">
            <div className = "row">
                <button id = "4" onClick = {calculator.numberCheck}  type="button" className="lightGrey">4</button> 
                <button id = "5" onClick = {calculator.numberCheck} type="button" className="lightGrey">5</button> 
                <button id = "6"  onClick = {calculator.numberCheck} type="button" className="lightGrey">6</button> 
                <button id = "-" onClick = {calculator.operatorCheck}type="button" className="orange">-</button> 
            </div>
        </div>
    )
}

export default RowThree