import React, { useState, useEffect } from 'react';
import InventoryList from '../components/InventoryList';

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de datos de prueba (mock)
    setItems([
      { id: 1, name: 'Producto 1', quantity: 10 },
      { id: 2, name: 'Producto 2', quantity: 5 },
      { id: 3, name: 'Producto 3', quantity: 8 },
    ]);
  }, []);

  return (
    <div>
      <h1>Inventario</h1>
      <InventoryList items={items} />
    </div>
  );
}

export default Inventory;
