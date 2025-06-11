import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((p) => (
        <Product key={p.id} data={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
