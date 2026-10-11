
import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  function addItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function deleteItem(index) {
    setItems((prevItems) =>
      prevItems.filter((item, i) => i !== index)
    );
  }

  return (
    <div>
      <h2>Item Management</h2>

      <ItemForm addItem={addItem} />

      <h3>Item List</h3>

      <ItemList
        items={items}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;

