import React from 'react';

function InventoryList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} - (Cantidad) {item.quantity} - (Precio) {item.price}</li>
      ))}
    </ul>
  );
}

export default InventoryList;
