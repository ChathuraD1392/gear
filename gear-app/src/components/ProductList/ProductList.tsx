import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, title: "Product 1", description: "Description", price: 10 },
  ];
  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
};

export default ProductList;
