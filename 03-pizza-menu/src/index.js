import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const styles = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* conditional rendering with && operator */}
      {/* {pizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* conditional rendering with the ternary operator */}
      {pizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu, Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //conditional rendering with multiple returns (Guard rendering)

  return (
    <footer className="footer">
      {/* conditional rendering with && operator */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00, Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* conditional rendering with ternary operator */}
      {isOpen ? (
        <OrderBtn close = {closeHour}/>
      ) : (
        <p>
          We're happy to welcome you between the hours of {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
    </footer>
  );

  //return React.createElement("footer", null, "we're currently open!");
}

function OrderBtn(props) {
  return (
    <div className="order">
      <p>We're open until {props.close}:00, Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// how content was rendered before react v 18
// ReactDOM.render(<App/>, document.getElementById("root"));
