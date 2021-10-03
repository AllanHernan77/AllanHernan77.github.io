import React from "react"
import "../App.css"
import RowZero from './rowZero.js'
import RowOne from './rowOne.js'
import RowTwo from "./rowTwo.js"
import RowThree from "./rowThree.js"
import RowFour from "./rowFour.js"
import RowFive from "./rowFive.js"


function Layout(){

    const calculator = {
        firstSet: null,
        reserve: null,
        operator: null,

         operatorCheck(e){
            if(e.target.id == "AC"){
                calculator.firstSet = null 
                calculator.reserve = null
                document.getElementById("screen").innerHTML = ""
                return
             }
            else if(e.target.id == "=" && calculator.reserve != null){
                if(calculator.operator = "+")
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) + parseInt(calculator.firstSet)
                
            }
            else if( (e.target.id == "+" || e.target.id == "-" || e.target.id == "*" || e.target.id == "÷" || e.target.id == "%") && calculator.reserve == null){
                calculator.operator = e.target.id
                calculator.reserve = calculator.firstSet
                calculator.firstSet = null
                document.getElementById("screen").innerHTML = ""
                return
            }

        }, 
        numberCheck(e){
            
            if(calculator.firstSet == null){
                calculator.firstSet = e.target.id
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
            }
            else if(calculator.firstSet.length == 1  && calculator.firstSet == 0  && e.target.id == 0 ){
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
            }

             else if(calculator.firstSet.length == 1 && calculator.firstSet == 0 ){
                calculator.firstSet =  e.target.id + calculator.firstSet
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
            }
            calculator.firstSet = calculator.firstSet + e.target.id
            document.getElementById("screen").innerHTML =  calculator.firstSet
            
        }
        
      };


    return (

        <div className= "container">

            <RowZero/> 
            <RowOne calculator = {calculator}/>
            <RowTwo calculator = {calculator} />
            <RowThree calculator = {calculator} />
            <RowFour calculator = {calculator} />
            <RowFive calculator = {calculator}/>


        </div>

    )
}


export default Layout