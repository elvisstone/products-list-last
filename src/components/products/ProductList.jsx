import ProductCard from "./ProductCard";
import "./Products.scss";
const ProductList = ({ products, category }) => {
  const filteredData =
    category === "" || category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="products-list">
      {filteredData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ProductList;
