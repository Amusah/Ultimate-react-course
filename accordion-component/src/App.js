import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consecteture, adipisicing elit.",
  },
  {
    title: "How long do i have to return my chair?",
    text: "trese depos andres de la frere et quoir",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Wo b3tse bom bom te te te lorem ipsum dolor sit",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem title={el.title} text={el.text} num={idx} key={idx} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`item ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
