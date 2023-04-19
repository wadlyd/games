import React, { useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import ListadoProductosComponent from "./components/ListadoProductosComponent";
import { ProductAdded } from './components/Models';

const App = () => {
  const [showCarrito, setShowCarrito] = useState(false);

  const goToCart = () => {
    setShowCarrito((preVal) => !preVal);
  };
  const producto = { 
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    imagen: 'ruta_de_la_imagen',
    categoria: 'jamfen',
    precio: 10
  };

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent goToCart={goToCart} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCarrito ? (
            <CarritoComponent />
          ) : (
            <ListadoProductosComponent product={producto} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
