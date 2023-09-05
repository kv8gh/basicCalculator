import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import '../components/index.css';

function Myapp(){

    return(
        <Transfer />
    )
}

function Transfer(){

    const [digit,setDigit]=useState('');
    const check=['+','-','*','/','.']
    


    function deleteDigit(){
        setDigit(digit.slice(0,-1));
    }

    function clearDigit(){
        setDigit('');
    }

    function handleClick(event){
        var newDigit=event.target.value;
        setDigit(digit+newDigit)
        
            }

    function handleOperator(event){
        
        var op=event.target.value;
        var h=(check.includes(digit.at(-1)) ? '':op)

        setDigit(digit+h)
    }


    function calculate(){
        
        var pseudoDigit= digit;
        var equal=(check.includes(pseudoDigit.at(-1))? null
        :check.filter(x=>x!=='.')
        .map(ele=>pseudoDigit.split(ele))
        .filter(x=>x.length>1))
        
        var [sym]=check.filter(x=>
            pseudoDigit.split(x).length>1)
        
        const [a,b]=equal[0]
        switch(sym){
            case '+':
                setDigit(""+(parseFloat(a)+parseFloat(b)))
                break
            case '-':
                setDigit(""+(parseFloat(a)-parseFloat(b)))
                break
            case '*':
                setDigit(""+(parseFloat(a)*parseFloat(b)))
                break
            case '/':
                setDigit(""+(parseFloat(a)/parseFloat(b)))
                break
            default:
                setDigit(pseudoDigit)
        }
    }
    return(
        <div className='container'>
            <div className='output'>{digit}</div>
            <button className='two-span' onClick={clearDigit}>AC</button>
            <button onClick={deleteDigit}>DEL</button>
            <button onClick={handleOperator} value={'/'}>/</button>
            <button onClick={handleClick} value={'7'}>7</button>
            <button onClick={handleClick} value={'8'}>8</button>
            <button onClick={handleClick} value={'9'}>9</button>
            <button onClick={handleOperator} value={'*'}>*</button>
            <button onClick={handleClick} value={'4'}>4</button>
            <button onClick={handleClick} value={'5'}>5</button>
            <button onClick={handleClick} value={'6'}>6</button>
            <button onClick={handleOperator} value={'+'}>+</button>
            <button onClick={handleClick} value={'1'}>1</button>
            <button onClick={handleClick} value={'2'}>2</button>
            <button onClick={handleClick} value={'3'}>3</button>
            <button onClick={handleOperator} value={'-'}>-</button>
            <button onClick={handleClick} value={'0'}>0</button>
            <button onClick={handleOperator} value={'.'}>.</button>
            <button className='two-span' onClick={calculate}>=</button>
        </div>
    )
}

export default Myapp;