import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import "./App.scss";
import { useState } from "react";
import { products, categories } from "./helper/data";

function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <Header categories={categories} setCategory={setCategory}  text="Products List" />
      <ProductList products={products} category={category} />
    </div>
  );
}

export default App;
