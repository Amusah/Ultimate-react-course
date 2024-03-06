import { useState } from "react";

import Logo from './Logo';
import Form from './Form';
import PackingList from "./ParkingList";
import Stats from './Stats';

const initialItems = [
  { id: 1, description: "Space suit", quantity: 7, packed: false },
  { id: 2, description: "Martian Socks", quantity: 7, packed: true },
  { id: 3, description: "Martian Boots", quantity: 7, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  const [packed, setPacked] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(){
    const confirmed = window.confirm('Are you sure you want to clear all list items?')
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
