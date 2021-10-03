import React from "react"
import "../App.css"


function RowOne(   {calculator}){

    return(

        <div className= "container0">
            <div style = {{margin: "-36vh 0vh 0vh 0vh"}} className="row" >
                <button id = "AC" onClick = {calculator.operatorCheck} type="button" className="lightGrey">AC</button> 
                <button id = "sign " onClick = {calculator.operatorCheck} type="button" className="lightGrey">+/-</button> 
                <button id = "%" onClick = {calculator.operatorCheck} type="button" className="lightGrey">%</button> 
                <button id = "÷" onClick = {calculator.operatorCheck} type="button" className="orange">÷</button> 

            </div>
        </div>
    )
    
}


export default RowOne