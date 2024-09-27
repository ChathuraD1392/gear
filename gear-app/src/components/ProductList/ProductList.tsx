import useProducts from "../../customHooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { products, error } = useProducts();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
