import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
    
     <h1>Bienvenido a la aplicación de inventario Tienda Virtual</h1>
      <p>Pagina Principal de la Tienda Virtual.</p>
      <div>
        <Link to="/inventory">
          <button>Inventario</button>
        </Link>
        <Link to="/orders">
          <button>Pedidos</button>
        </Link>
        <Link to="/admin">
          <button>Administración</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;