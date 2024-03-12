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
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={idx}
          key={idx}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>This is it baby</p>
        <p>Here comes lord Rayleigh</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handleToggle(){
    onOpen(num)
  }

  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={handleToggle}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
