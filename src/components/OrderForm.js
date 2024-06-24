import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); // Para acceder al modal desde la aplicación


function OrderForm() {
    const { items } = useInventory();
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const handleProductChange = (e) => {
      setSelectedProduct(e.target.value);
    };
  
    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedProduct && quantity) {
        // Mostrar el modal de confirmación
        setModalIsOpen(true);
      }
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <h1>Realizar Pedido</h1>
        <div>
          <Link to="/">
          <button>Home</button>
          </Link>
          </div>
        <form onSubmit={handleSubmit}>
          <label>
            Producto:
            <select value={selectedProduct} onChange={handleProductChange}>
              <option value="">Seleccionar producto</option>
              {items.map(item => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Cantidad:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              placeholder="Cantidad"
            />
          </label>
          <br />
          <button type="submit">Enviar Pedido</button>
        </form>
  
        {/* Modal de confirmación */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Confirmación de Pedido"
        >
          <h2>Pedido Enviado</h2>
          <p>Producto: {selectedProduct}</p>
          <p>Cantidad: {quantity}</p>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      </div>
    );
}

export default OrderForm;
