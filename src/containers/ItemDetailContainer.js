import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { productsCollection } from "../firebase/firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [ItemData, setItemData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const itemFilter = query(productsCollection, where("id", "==", itemId));

    getDocs(itemFilter).then((res) => setItemData(res.docs[0].data()));
  }, [itemId]);

  console.log(ItemData);
  return <ItemDetail item={ItemData} />;
};

export default ItemDetailContainer;
