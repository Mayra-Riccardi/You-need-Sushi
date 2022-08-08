import React, { useEffect, useState } from "react";
import "../styles/styledComponents.css";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

import { productsCollection } from "../firebase/firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const requestFilter = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(requestFilter).then((result) =>
      setProductsList(result.docs.map((doc) => doc.data()))
    );
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ItemList items={productsList} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
