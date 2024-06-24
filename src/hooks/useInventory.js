import { useState, useEffect } from 'react';
import inventoryData from '../inventoryData.json';

function useInventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cargar datos del archivo JSON
    setItems(inventoryData);
  }, []);

  const addItem = (item) => {
    setItems([...items, { id: items.length + 1, ...item }]);
  };

  return { items, addItem };
}

export default useInventory;
