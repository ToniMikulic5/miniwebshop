const Product = ({ data, addToCart }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{data.name}</h3>
      <p>Price: {data.price} KM</p>
      <p>{data.available ? "Available" : "Not available"}</p>
      <button onClick={() => addToCart(data)} disabled={!data.available}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;