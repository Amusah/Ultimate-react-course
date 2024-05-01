import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const host = "api.frankfurter.app";
  // fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     alert(`10 GBP = ${data.rates.USD} USD`);
  //   });

  useEffect(() => {
    const Controller = new AbortController();
    const convertCurrency = async () => {
      const host = "api.frankfurter.app";
      if (!amount) return;
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://${host}/latest?amount=${amount}&from=${from}&to=${to}`,
          { signal: Controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        console.log(data);
        setOutput(data.rates[to]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if(from === to) return setOutput(amount);
    convertCurrency();
  }, [amount, from, to]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        // disabled={isLoading}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading ? "Loading" : (<>{output} {to}</>)} 
      </p>
    </div>
  );
}

export default App;
