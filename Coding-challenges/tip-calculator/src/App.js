import { useState } from "react";

const userSatisfaction = [
  { rating: "Dissatisfied (0%)", value: 0 },
  { rating: "It was okay (5%)", value: 5 },
  { rating: "It was good (10%)", value: 10 },
  { rating: "Absolutely amazing! (20%)", value: 20 },
];

const App = () => {
  const [feedBackPercentage1, setFeedBackPercentage1] = useState(0);
  const [feedBackPercentage2, setFeedBackPercentage2] = useState(0);
  const [bill, setBill] = useState("");

  const tip = +bill * ((feedBackPercentage1 + feedBackPercentage2) / 2 / 100);

  const handleReset = () => {
    setBill('');
    setFeedBackPercentage1(0);
    setFeedBackPercentage2(0);
  }

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <FeedBack
        percentage={feedBackPercentage1}
        onSelect={setFeedBackPercentage1}
      >
        How did you like the service?
      </FeedBack>
      <FeedBack
        percentage={feedBackPercentage2}
        onSelect={setFeedBackPercentage2}
      >
        How did your friend like the service?
      </FeedBack>
      <Total bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </>
  );
};

const Bill = ({ bill, setBill }) => {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        placeholder="Enter Bill"
        onChange={(e) => setBill(e.target.value)}
        type="text"
        value={bill}
      />
    </>
  );
};

const FeedBack = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        {userSatisfaction.map((el) => (
          <option value={el.value} key={el.value}>
            {el.rating}
          </option>
        ))}
      </select>
    </div>
  );
};

const Total = ({ bill, tip }) => {
  // const bills = +totalBill;
  return (
    <div>
      {bill ? (
        <h2>
          You pay ${+bill + tip} (${bill} + ${tip} tip)
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

const Reset = ({ onReset }) => {
  return <button onClick={onReset}>Reset</button>;
};

export default App;
