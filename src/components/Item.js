import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ItemDetails.css"
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="item shadow mb-4 card shadow p-3 mb-5 bg-body rounded">
          <img src={product.img} alt="Same at value" />
            <h4 className="nombre">
              {product.name} - {product.brand}
            </h4>
            <p className="texto">{product.package}</p>
            <p className="texto">{product.price}</p>
            <Link type="button" className="btn btn-primary btn-sm" to="/item/">Más Info</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Item;
