import React from "react"
import "../App.css"
import RowZero from './rowZero.js'
import RowOne from './rowOne.js'
import RowTwo from "./rowTwo.js"
import RowThree from "./rowThree.js"
import RowFour from "./rowFour.js"
import RowFive from "./rowFive.js"

//child of App function

function Layout(){

    //created a calculator object, that has the first, and second set of numbers, the operator and  functions that are going
    // to be passed to the child components 
    const calculator = {
        firstSet: null,
        reserve: null,
        operator: null,

        reset(){ // resets the number sets, operator and screen
            calculator.firstSet = null 
            calculator.reserve = null
            calculator.operator = null
            document.getElementById("screen").innerHTML = ""
        },

         operatorCheck(e){
            if(e.target.id == "AC"){
                calculator.reset()
                return
             }
             // branch conditions for what operation the number sets need to do when the user enters the equal sign
            else if(e.target.id == "=" && calculator.reserve != null){
                if(calculator.operator == "+"){
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) + parseInt(calculator.firstSet)
                }
                else if(calculator.operator == "-"){
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) - parseInt(calculator.firstSet)
                }
                else if(calculator.operator == "*"){
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) *  parseInt(calculator.firstSet)
                }
                else if(calculator.operator == "%"){
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) % parseInt(calculator.firstSet)
                }
                else if(calculator.operator == "÷"){
                    document.getElementById("screen").innerHTML = parseInt(calculator.reserve) / parseInt(calculator.firstSet)
                }
            } // if the second set is null, and we select an operator, store the values
            else if( (e.target.id == "+" || e.target.id == "-" || e.target.id == "*" || e.target.id == "÷" || e.target.id == "%") && calculator.reserve == null){
                calculator.operator = e.target.id
                calculator.reserve = calculator.firstSet
                calculator.firstSet = null
                document.getElementById("screen").innerHTML = ""
                return
            }

        }, 
        numberCheck(e){
            // if both sets are not null, reset
            if(calculator.firstSet != null && calculator.reserve != null){
                calculator.reset()
                calculator.firstSet = e.target.id
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
    
            }
            // first input condition
            else if(calculator.firstSet == null){
                calculator.firstSet = e.target.id
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
            }
            //if the length is 1, and the number of the first set is zero, while we are trying to input zero, return zero
            else if(calculator.firstSet.length == 1  && calculator.firstSet == 0  && e.target.id == 0 ){
                document.getElementById("screen").innerHTML =  calculator.firstSet
                return
            }
            // if the set's length is one and it is zero, swap the e's position with zero.
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
        //pass the object as prop to the child components.
        //each child composes the calculators layout, I understand I could have used props to just create one child component. It was after the third row where I noticed.
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