import React, { useEffect, useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import ListadoProductosComponent from "./components/ListadoProductosComponent";

const App = () => {
  const [showCarrito, setShowCarrito] = useState(false);
  const [productos, setProductos] = useState([]);

  
  const goToCart = () => {
    setShowCarrito((preVal) => !preVal);
  };
  
  
  useEffect(() => {
    //fetch data from api
    fetch("http://localhost:3001/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);


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
            <ListadoProductosComponent productos={productos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
