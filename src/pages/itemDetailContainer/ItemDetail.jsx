import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2>
              <span></span> {item.title}
            </h2>
            <h3>
              <span>Tipo: </span> {item.category}
            </h3>
            <h3>
              <span></span> {item.description}
            </h3>
            <h2>
              <span style={{ fontSize: "23px" }}>Precio:</span> ${item.price}.
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;
