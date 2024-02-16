import { productConfig } from "../../../config";
import { Link } from "react-router-dom";

import "./Section.scss";

export default function HomeProducts() {
  return (
    <section className="category">
      <div className="category-shop">
        <p className="category-shop-category">Shop by category</p>
        <p className="category-shop-indule">indulge in what we offer</p>
      </div>
      <div className="category-products">
        {productConfig &&
          productConfig.map(({ id, image, text, link }) => {
            return (
              <Link to={link} key={id}>
                <div className="category-products-product">
                  <img src={image} alt="" />
                  <p className="category-products-product-name">{text}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
