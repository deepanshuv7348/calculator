import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState('0');

  const calculateResult = (input)=>{
    // let result
    try{
      const operators =['+','-','*','/']
      let  operator = null;

      for(let i=0; i<input.length; i++){
        if(operators.includes(input[i])){
          operator = input[i]
          break;
        }
      }

      if(!operator){
        setInput(parseFloat(input).toString());
        return;
      }


      const [operend1,operend2] = input.split
      (operator).map(parseFloat);
      let result;

      switch(operator){
        case '+':
          result = operend1+operend2;
          break;
        case '-':
          result = operend1-operend2;
          break;
        case '*':
          result = operend1*operend2;
          break;
        case '/':
          result = operend1/operend2;
          break;
          default:
            throw new Error('Invalid operator')
      }
      setInput(result.toString())
    }
    catch(error){
      setInput('Error')

    }
  }

  const handleButtonClic =(value)=>{
    if(value === "C"){
      setInput('');
    }
    else if(value=== '<'){
      setInput(input.slice(0,-1));  //count index
    }
    else if(value === '='){
      calculateResult(input);
    }
    else{
      setInput((preValue)=> preValue + value)
    }
  }
  return (
    <div className="App">
      <div className="calc">
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={()=>handleButtonClic('C')}>C</button>
          <button onClick={()=>handleButtonClic('<')}>&lt;</button>
          <button onClick={()=>handleButtonClic('%')}>%</button>
          <button onClick={()=>handleButtonClic('/')}>/</button>
        </div>
        <div>
          <button onClick={()=>handleButtonClic('7')}>7</button>
          <button onClick={()=>handleButtonClic('8')}>8</button>
          <button onClick={()=>handleButtonClic('9')}>9</button>
          <button onClick={()=>handleButtonClic('*')}>*</button>
        </div>
        <div>
          <button onClick={()=>handleButtonClic('4')}>4</button>
          <button onClick={()=>handleButtonClic('5')}>5</button>
          <button onClick={()=>handleButtonClic('6')}>6</button>
          <button onClick={()=>handleButtonClic('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>handleButtonClic('1')}>1</button>
          <button onClick={()=>handleButtonClic('2')}>2</button>
          <button onClick={()=>handleButtonClic('3')}>3</button>
          <button onClick={()=>handleButtonClic('+')}>+</button>
        </div>
        <div>
          <button onClick={()=>handleButtonClic('0')}>0</button>
          <button onClick={()=>handleButtonClic('00')}>00</button>
          <button onClick={()=>handleButtonClic('.')}>.</button>
          <button onClick={()=>handleButtonClic('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
