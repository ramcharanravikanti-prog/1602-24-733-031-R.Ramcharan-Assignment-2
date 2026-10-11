
import React, { useState } from "react";

function ItemForm({ addItem }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (item.trim() !== "") {
      addItem(item);
      setItem("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
