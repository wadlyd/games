import useCart from "../hooks/useCart";

export const CarritoItem = (imagen: any, nombre: any) => {
  return (
    <li>
      <div>
        <img src={imagen} alt="" />
      </div>
      <div>{nombre}</div>
      <button>x</button>
    </li>
  );
};

export const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <ul>
        {cart.map((product) => (
          <CarritoItem key={product.id} {...product} />
        ))}
      </ul>
    </>
  );
};
