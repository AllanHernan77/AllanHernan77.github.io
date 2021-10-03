import React from "react"
import "../App.css"



function RowFour({calculator} ){

    return(

            <div style = {{margin: "0vh 0vh 0vh 0vh"}} className = "container0">
                <div className = "row">
                    <button id = "1" onClick= {calculator.numberCheck} type="button" className="lightGrey">1</button> 
                    <button id = "2" onClick= {calculator.numberCheck} type="button" className="lightGrey">2</button> 
                    <button id = "3" onClick= {calculator.numberCheck} type="button" className="lightGrey">3</button> 
                    <button id = "+" onClick= {calculator.operatorCheck} type="button" className="orange">+</button> 
                </div>
            </div>
    )
}

export default RowFour