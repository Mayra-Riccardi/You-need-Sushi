import React from "react";
import "../styles/ItemDetails.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img className="img-detail" src={item.img} alt="Same at value" />
        </div>
        <div className="col-md-6 text-detail cardA">
          <h3>
            {item.name} - {item.brand}
          </h3>
          <h5>{item.package}</h5>
          <hr />
          <h6>{item.price}</h6>
          <br />
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
