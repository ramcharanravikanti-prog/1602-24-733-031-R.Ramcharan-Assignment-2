
import React from "react";

function ItemList({ items, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
