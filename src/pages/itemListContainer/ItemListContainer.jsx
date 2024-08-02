import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Skeleton } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          gap: "100px",
        }}
      >
        <Box sx={{ width: 300, display: "flex", gap: 4 }}>
          <Box>
            <Skeleton variant="rectangular" width={350} height={300} />
            <Skeleton variant="text" width={350} height={50} />
            <Skeleton variant="text" width={350} height={130} />
            <Skeleton variant="rectangular" width={80} height={50} />
          </Box>

          <Box>
            <Skeleton variant="rectangular" width={350} height={300} />
            <Skeleton variant="text" width={350} height={50} />
            <Skeleton variant="text" width={350} height={130} />
            <Skeleton variant="rectangular" width={80} height={50} />
          </Box>

          <Box>
            <Skeleton variant="rectangular" width={350} height={300} />
            <Skeleton variant="text" width={350} height={50} />
            <Skeleton variant="text" width={350} height={130} />
            <Skeleton variant="rectangular" width={80} height={50} />
          </Box>

          <Box>
            <Skeleton variant="rectangular" width={350} height={300} />
            <Skeleton variant="text" width={350} height={50} />
            <Skeleton variant="text" width={350} height={130} />
            <Skeleton variant="rectangular" width={80} height={50} />
          </Box>
          <Box>
            <Skeleton variant="rectangular" width={350} height={300} />
            <Skeleton variant="text" width={350} height={50} />
            <Skeleton variant="text" width={350} height={130} />
            <Skeleton variant="rectangular" width={80} height={50} />
          </Box>
        </Box>
      </div>
    );
  }

  // const addProducts = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      {/* <Button variant="contained" onClick={addProducts}>
        Agregar productos
      </Button> */}
      <ItemList items={items} />
      {/* {items.length === 0 ? <h1>Cargando.....</h1> : <ItemList items={items} />} */}
    </div>
  );
};

export default ItemListContainer;
