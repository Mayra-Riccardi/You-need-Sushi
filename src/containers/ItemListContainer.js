import React, { useEffect, useState } from "react";
import "../styles/styledComponents.css";
import Carousel  from '../components/Carousel';
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (id) {
      const queryFilter = query(
        queryCollection,
        where('category', '==', id)
      );
      getDocs(queryFilter).then((res) => 
      setProductsList (
        res.docs.map((product) => ({
          id: product.id,
          ...product.data()
        }))
      )
    );
  } else {
    getDocs(queryCollection)
    .then((res) =>
    setProductsList(
      res.docs.map((product) => ({
        id: product.id,
        ...product.data()
      }))
    )
  )
}
  }, [id])

  return (
    <>
    <Carousel></Carousel>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ItemList items={productsList} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
