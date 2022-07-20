import React, { useEffect, useState } from "react";
import "../styles/styledComponents.css";
import ItemCount from "../components/ItemCount";
import { products } from "../utils/products";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const { id } = useParams();

  const onAdd = (param) => {
    alert(`Has agregado ${param} productos al Carrito. Muchas Gracias`);
  };

  useEffect(() => {
    if (id === undefined) {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });

      myPromise.then((res) => {
        setProductsList(res);
      });
    } else {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products.filter((item) => item.category === parseInt(id)));
        }, 2000);
      });

      myPromise.then((res) => {
        setProductsList(res);
      });
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ItemList items={productsList} />
        </div>
      </div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
