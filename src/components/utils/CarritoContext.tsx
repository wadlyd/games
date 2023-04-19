import React, { ReactNode, createContext, useState } from "react";
import { ProductAdded } from "../Models";

// export const CartContext = createContext<null | any>(null);

export const CartContext = createContext<{
  cartItems: ProductAdded[];
  addToCart: (productAdded: ProductAdded) => void;
  gemCount: number;
}>({
  cartItems: [],
  addToCart: () => {},
  gemCount: 3,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [gemCount, setGemCount] = useState<number>(3);
  const [cartItems, setCartItems] = useState<ProductAdded[]>([]); // Items en el carrito

  const addToCart = (productAdded: ProductAdded) => {
    // Verificar si ya existe el item en el carrito
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === productAdded.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].precio += productAdded.precio;
      setCartItems([...cartItems, productAdded]);
      setGemCount(gemCount - 1);
    }

    // Verificar si se ha alcanzado el límite de gemas disponibles
    if (gemCount === 0) {
      return;
    }

    // Verificar si se ha alcanzado el límite de una poción por categoría
    const categoryCount = cartItems.reduce((acc, cartItem) => {
      if (cartItem.categoria === productAdded.categoria) {
        return acc + 1;
      }
      return acc;
    }, 0);
    if (categoryCount === 1) {
      return;
    }

    setCartItems([...cartItems, productAdded]);
    setGemCount(gemCount - 1);
  };
  console.log(addToCart);

  const makePurchase = () => {
    // to do
    setCartItems([]);
    setGemCount(3);
  };

  return (
    <CartContext.Provider
      value={{
        gemCount,
        cartItems,
        addToCart,
        // makePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
