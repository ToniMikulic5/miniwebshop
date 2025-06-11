import { useState } from "react";
import productData from "./Components/ProductData";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Filter from "./Components/Filter";

const App = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  let filtered = productData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (onlyAvailable) {
    filtered = filtered.filter((p) => p.available);
  }

  if (sortOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mini Web Shop</h1>

      <Filter
        search={search}
        setSearch={setSearch}
        onlyAvailable={onlyAvailable}
        setOnlyAvailable={setOnlyAvailable}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <ProductList products={filtered} addToCart={addToCart} />

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;