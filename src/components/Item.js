import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styledComponents.css"
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="item card card-container shadow mb-5 rounded cards">
          <img src={product.img} alt="Same at value" className="img" />
            <h3 className="nombre">
              {product.name} - {product.brand}
            </h3>
            <h5 className="precio">Precio ${product.price}</h5>
            <p className="texto">Stock {product.stock}</p>
            <Link className="btn btn-primary btn-sm btn-ver" to={`/item/${product.id}`}>Más Info</Link>
          </div>
        </div>
  </section>
    </>
  );
};

export default Item;
