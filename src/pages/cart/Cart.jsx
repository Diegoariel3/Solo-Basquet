import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice(); // numero

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro querés eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar",
      denyButtonText: `No, no borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

  return (
    <div className="cart">
      {cart.map((elemento) => {
        return (
          <div className="Card-cart" key={elemento.id}>
            <img src={elemento.img} alt="Paleta" />
            <h2>{elemento.title}</h2>
            <h2>Cantidad {elemento.quantity}</h2>
            <h2>$ {elemento.price}</h2>
            <Button
              variant="outlined"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h2 className={cart.length > 0 ? "title" : "ocultar"}>
        Total a pagar es $ {total}
      </h2>
      {cart.length > 0 && <Button onClick={clearCart}>Limpiar carrito </Button>}

      <Link to="/checkout">
        <Button
          variant="contained"
          style={{
            backgroundColor: cart.length > 0 ? "blue" : "red",
          }}
        >
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
