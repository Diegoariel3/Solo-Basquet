import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";

export const ProductCard = ({ title, description, price, id, img }) => {
  const eliminar = () => {
    let productColl = collection(db, "products");
    let refDoc = doc(productColl, id);
    deleteDoc(refDoc);
  };

  return (
    <Card
      sx={{
        width: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 260, width: "80%" }}
        image={img}
        title="Paleta Padel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="contained">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
