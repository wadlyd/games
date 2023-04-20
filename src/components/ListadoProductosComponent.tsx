import React, { useContext, useState } from "react";
// import axios from "axios";
import { Producto, ProductAdded } from "./Models";
import ButtonAvailable from "./BtnAvailable";
import { CartContext } from "./utils/CarritoContext";
import DisableButton from "./DisableBtn";
// import {CarritoContext} from "./utils/AddToCart"

const ListadoProductosComponent = ({
  productos,
}: {
  productos: ProductAdded[];
}) => {
  // const [productos, setProductos] = useState([]);

  // const { gemCount } = useContext(CartContext);

  const [gemCount, setGemCount] = useState<number>(3);
  const [cartItems, setCartItems] = useState<Producto[]>([]); // Items en el carrito
  //   const addToCart = (producto: Producto) => {
  //     // Verificar si ya existe el item en el carrito
  //     // const existingItemIndex = cartItems.findIndex(
  //     //   (item) => item.id === producto.id
  //     // );

  //       const updatedCartItems = [...cartItems];
  //       // updatedCartItems[existingItemIndex].precio += producto.precio;

  //       // console.log(producto)
  //       const addCrt = cartItems.map((item: any) => {
  //         if (item.categoria !== producto.categoria) {
  //           return {...item, producto};
  //         }
  //         setCartItems((prev)=>prev);
  //       })
  // console.log("addcrt", addCrt)

  //       setGemCount(gemCount - 1);

  //     // Verificar si se ha alcanzado el límite de gemas disponibles
  //     if (gemCount === 0) {
  //       return;
  //     }

  //     // Verificar si se ha alcanzado el límite de una poción por categoría
  //     const categoryCount = cartItems.reduce((acc, cartItem) => {
  //       if (cartItem.categoria === producto.categoria) {
  //         return acc + 1;
  //       }
  //       return acc;
  //     }, 0);
  //     if (categoryCount === 1) {
  //       return;
  //     }

  //     // setCartItems([...cartItems, producto]);
  //     setGemCount(gemCount - 1);
  //   };

  // const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto: Producto) => {
    if (
      cartItems.length >= 3 ||
      cartItems.some((item) => item.categoria === producto.categoria)
    ) {
      // Do not add the product if cart already has 3 items or the same category exists
      return;
    }

    setCartItems([...cartItems, producto]);
  };

  console.log(cartItems);

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
        {gemCount >= 1 ? (
          <div className="mt-3">
            <ButtonAvailable onClick={() => addToCart(producto)} />
          </div>
        ) : (
          <div className="mt-3">
            <DisableButton />
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-2">
      <ul>{productsList}</ul>
    </div>
  );
};

export default ListadoProductosComponent;
