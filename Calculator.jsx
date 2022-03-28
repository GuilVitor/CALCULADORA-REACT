import React, { useState } from "react";
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";


export default function Calculator(){
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();



    function inpuNum(e){ 
    var input = e.target.value
    if(num === 0){
        setNum(input);
    } else{
        setNum(num + input);

    }

}
function apagar(){
    setNum(0)
}

function porcentagem (){
    setNum(num/100)
}
function maisemenos (){
    if(num>0){
        setNum(-num)
    } else{
        setNum(Math.abs(num));
    }
}

function operatorHandler(e) {
      var operatorInput = e.target.value;
      setOperator(operatorInput)
      setOldNum(num);
      setNum(0);
}


function calculate(){
    if(operator ==="/"){
        setNum(oldnum/num);
    }else if(operator === "X"){
        setNum(oldnum * num);
    }else if(operator === "-"){
        setNum(oldnum - num);
    }else if(operator === "+"){
        setNum(oldnum + num);
        setNum(parseFloat(oldnum) + parseFloat(num));
    }
}




    return ( 
        <div>
        <Box m={5} />
        <Container maxWidth="xs">
        <div className="fundo">
        <h1 className="resultado">{num}</h1>
        <Box m={7} />
        <button className="" onClick={apagar} value={setNum}>AC</button>
        <button className="" onClick={maisemenos} value={setNum}>+/-</button>
        <button className="" onClick={porcentagem} value={setNum}>%</button>
        <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
        <button className="gray" onClick={inpuNum} value={7}>7</button>
        <button className="gray" onClick={inpuNum} value={8}>8</button>
        <button className="gray" onClick={inpuNum} value={9}>9</button>
        <button className="orange"  onClick={operatorHandler} value={"X"}>X</button>
        <button className="gray"onClick={inpuNum} value={4}>4</button>
        <button className="gray"onClick={inpuNum} value={5}>5</button>
        <button className="gray"onClick={inpuNum} value={6}>6</button>
        <button className="orange"  onClick={operatorHandler} value={"-"}>-</button>
        <button className="gray"onClick={inpuNum} value={1}>1</button>
        <button className="gray"onClick={inpuNum} value={2}>2</button>
        <button className="gray"onClick={inpuNum} value={3}>3</button>
        <button className="orange"  onClick={operatorHandler} value={"+"}>+</button>
        <button className="gray" onClick={inpuNum} value={0}>0</button>
        <button className="gray" onClick={inpuNum} value={"."}>.</button>
        <button className="igual" onClick={calculate}>=</button>
        </div>
        </Container>
        </div>
    )
}