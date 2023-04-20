import React, { ReactNode, createContext, useState } from "react";
import { ProductAdded, Producto } from "../Models";

// export const CartContext = createContext<null | any>(null);

export const CartContext = createContext<{
  cartItems: ProductAdded[];
  // addToCart: (productAdded: ProductAdded) => void;
  gemCount: number;
}>({
  cartItems: [],
  // addToCart: () => {},
  gemCount: 3,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [gemCount, setGemCount] = useState<number>(3);
  const [cartItems, setCartItems] = useState<Producto[]>([]); // Items en el carrito

  // const addToCart = (producto: Producto) => {
  //   // Verificar si ya existe el item en el carrito
  //   // const existingItemIndex = cartItems.findIndex(
  //   //   (item) => item.id === producto.id
  //   // );
    
  //     const updatedCartItems = [...cartItems];
  //     // updatedCartItems[existingItemIndex].precio += producto.precio;


  //     console.log(producto)
  //     cartItems.map((item: any) => {
  //       if (item.categoria !== producto.categoria) {
  //         setCartItems([...item, producto]);
  //         return;
  //       }
  //     })


  //     setGemCount(gemCount - 1);
    

  //   // Verificar si se ha alcanzado el límite de gemas disponibles
  //   if (gemCount === 0) {
  //     return;
  //   }

  //   // Verificar si se ha alcanzado el límite de una poción por categoría
  //   const categoryCount = cartItems.reduce((acc, cartItem) => {
  //     if (cartItem.categoria === producto.categoria) {
  //       return acc + 1;
  //     }
  //     return acc;
  //   }, 0);
  //   if (categoryCount === 1) {
  //     return;
  //   }

  //   // setCartItems([...cartItems, producto]);
  //   setGemCount(gemCount - 1);
  // };

  // const makePurchase = () => {
  //   // to do
  //   setCartItems([]);
  //   setGemCount(3);
  // };

  return (
    <CartContext.Provider
      value={{
        gemCount,
        cartItems,
        // makePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
