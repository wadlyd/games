import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { Producto, ProductAdded } from "./Models";
import ButtonAvailable from "./BtnAvailable";
import { CartContext } from "./utils/CarritoContext";
// import {CarritoContext} from "./utils/AddToCart"
// import DisableButton from "./DisableBtn";

const ListadoProductosComponent = ({ product }: {product: ProductAdded}) => {
  const [productos, setProductos] = useState([]);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product); // Llamar a la función addToCart con el producto actual
  };

  useEffect(() => {
    //fetch data from api
    fetch("http://localhost:3001/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  //   axios
  //     .get("http://localhost:3001/productos")
  //     .then(function (response) {
  //       setProductos(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // Consumir el contexto del carrito
  const productsList = productos?.map((producto: Producto) => {
    return (
      <div
        key={producto.id}
        className="shadow-lg rounded-lg p-5 bg-zinc-800 mb-5 border border-zinc-800 hover:border-fuchsia-900"
      >
        <div className="relative">
          <button className="absolute top-0 right-0 px-3 py-1 bg-lime-700 rounded-lg">
            {producto.precio} Gemas
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-16 mt-8"
          />
        </div>
        <h3 className="text-3x1 font-bold mt-3">{producto.nombre}</h3>
        <p className="pr-16 text-slate-200 font-thin mt-1 text-xs">
          {producto.descripcion}
        </p>
        {/* {gemasDisponibles >= 1? */}

        <div className="mt-3">
          <ButtonAvailable onClick={handleAddToCart} />
        </div>
        {/* : */}
        {/* <div className="mt-3">
          <DisableButton />
        </div> */}
        {/* } */}
        {/* <div>
          <DisableButton />
        </div> */}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-2">
      <ul>{productsList}</ul>
    </div>
  );
}

export default ListadoProductosComponent;
