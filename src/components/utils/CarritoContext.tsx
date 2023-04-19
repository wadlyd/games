import React, { ReactNode, createContext, useState } from 'react';
import { ProductAdded } from '../Models';

// Crear el contexto para el carrito
// export const CartContext = createContext<null | any>(null);



export const CartContext = createContext<{
    cartItems: ProductAdded[];
    addToCart: (productAdded: ProductAdded) => void;
    gemCount: number;
  }>({
    cartItems: [],
    addToCart: () => {},
    gemCount: 0,
  });

// Crear el componente del contexto del carrito
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [gemCount, setGemCount] = useState<number>(3); // Cantidad de gemas disponibles
  const [cartItems, setCartItems] = useState<ProductAdded[]>([]); // Items en el carrito

  // Función para agregar un item al carrito
  const addToCart = (productAdded: ProductAdded) => {
    // Verificar si ya existe el item en el carrito
    const existingItem  = cartItems.find(item => item.id === productAdded.id);
    if (existingItem) {
        setCartItems([...cartItems, productAdded]);
        setGemCount(gemCount - 1);
    }

    // Verificar si se ha alcanzado el límite de gemas disponibles
    if (gemCount === 0) {
      return; // Si no hay gemas disponibles, no permitir agregar más items
    }

    // Verificar si se ha alcanzado el límite de una poción por categoría
    const categoryCount = cartItems.reduce((acc, cartItem) => {
      if (cartItem.categoria === productAdded.categoria) {
        return acc + 1;
      }
      return acc;
    }, 0);
    if (categoryCount === 1) {
      return; // Si ya hay una poción de esa categoría en el carrito, no permitir agregar más
    }

    // Agregar el item al carrito y actualizar las gemas disponibles
    setCartItems([...cartItems, productAdded]);
    setGemCount(gemCount - 1);
  };

  // Función para finalizar la compra
  const finishPurchase = () => {
    // Realizar aquí la lógica para finalizar la compra, como calcular el total de gemas gastadas
    // y validar las restricciones gubernamentales y de la esposa de 🧙‍♂️

    // Luego de finalizar la compra, reiniciar el estado del carrito y las gemas disponibles
    setCartItems([]);
    setGemCount(3);
  };

  return (
    <CartContext.Provider
      value={{
        gemCount,
        cartItems,
        addToCart,
        // finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};