import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 260, width: "80%" }}
        image={img}
        title="Paleta padel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="contained">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
