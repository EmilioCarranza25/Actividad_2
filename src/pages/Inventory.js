import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';
import InventoryList from '../components/InventoryList';
import { Link } from 'react-router-dom';

function Inventory() {
    const { items, addItem } = useInventory();
    const [newItem, setNewItem] = useState({ name: '', quantity: '' });
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewItem({ ...newItem, [name]: value });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newItem.name && newItem.quantity) {
        addItem({ name: newItem.name, quantity: parseInt(newItem.quantity) });
        setNewItem({ name: '', quantity: '' });
      }
    };

    // Filtrar los productos del inventario basados en el término de búsqueda
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <div>
          <h1>Inventario</h1>
          <div>
          <Link to="/">
          <button>Home</button>
          </Link>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar productos"
          />
          <InventoryList items={filteredItems} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              placeholder="Nombre del producto"
            />
            <input
              type="number"
              name="quantity"
              value={newItem.quantity}
              onChange={handleChange}
              placeholder="Cantidad"
            />
            <button type="submit">Agregar Producto</button>
          </form>
        </div>
      );
  }

export default Inventory;