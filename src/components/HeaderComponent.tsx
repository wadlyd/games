import React, { useContext } from "react";
import { CartContext } from "./utils/CarritoContext";
// import { useCarrito } from "./utils/AddToCart";

interface HeaderComponentProps {
  goToCart: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  goToCart,
}) => {
  // const { gemasDisponibles } = useCarrito();
  // Consumir el contexto del carrito
  // const {  cartItems } = useContext(CartContext);

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" alt="Gem imagen" />
        {/* <span>xxx Gemas</span> */}
        {/* <span> {gemCount} gemas</span> */}
      </div>
      <button className="text-white hover:underline" onClick={goToCart}>
        Ver Carrito 
        {/* {cartItems.length} */}
      </button>
    </div>
  );
};
