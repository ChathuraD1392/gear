import { Product } from "../../customHooks/useProducts";
import "./ProductCard.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6>{product.title}</h6>
          {/* <p className="card-text">{product.description}</p> */}
          <p>{product.price}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
