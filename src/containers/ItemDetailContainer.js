import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [ItemData, setItemData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', id);
    getDoc(queryDoc)
    .then(res => setItemData({id: res.id, ...res.data()}))
  }, [id]);

  console.log(ItemData);
  return <ItemDetail item={ItemData} />;
};

export default ItemDetailContainer;