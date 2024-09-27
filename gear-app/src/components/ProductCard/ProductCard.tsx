import "./ProductCard.css";
import image from "../../assets/image.png";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6>{product.title}</h6>
          <p className="card-text">{product.description}</p>
          <p>{product.price}</p>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
