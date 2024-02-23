import { useState } from "react";

export default function App() {
  return <DateCounter />;
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // function decrementStep(val) {
  //   if (val > 1) setStep((val) => val - 1);
  // }
  // function incrementStep() {
  //   setStep((step) => step + 1);
  // }

  function decrementCount() {
    setCount((count) => count - step);
  }
  function incrementCount() {
    setCount((count) => count + step);
  }
  function handleReset(){
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="container">
        <input
          className="range"
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="0"
          max="10"
        />
        <span style={{fontSize: "2rem"}}>Step: {step}</span>

        <div className="row">
          <button onClick={() => decrementCount()}>-</button>
          <input
            className="countField"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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
        {(count !== 0 || step !== 1) ? <div>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div> : ''}
      </div>
    </>
  );
}
