import { useState } from "react";

export default function App(){
  return <DateCounter />
}


function DateCounter(){
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count)
  

  function decrementStep(val){
    if(val > 1)
    setStep((val) => val - 1);
  }
  function incrementStep(){
    setStep((step => step + 1))
  }

  
  function decrementCount() {
    setCount((count) => count - step);
  }
  function incrementCount() {
    setCount((count) => count + step);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <button onClick={() => decrementStep(step)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => incrementStep()}>+</button>
        </div>

        <div className="row">
          <button onClick={() => decrementCount()}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => incrementCount()}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}