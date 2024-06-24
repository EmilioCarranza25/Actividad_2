import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h1>Administración</h1>
      <div>
          <Link to="/">
          <button>Home</button>
          </Link>
      </div>
      <p>Esta es la página de administración. Aquí puedes gestionar tu inventario y pedidos.</p>
    </div>
  );
}

export default Admin;