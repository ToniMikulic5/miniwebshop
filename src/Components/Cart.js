const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ borderTop: "2px solid black", marginTop: "20px" }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((p, index) => (
              <li key={index}>
                {p.name} - {p.price} KM
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: {total} KM</p>
        </>
      )}
    </div>
  );
};

export default Cart;
