import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetailContainer.css";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="item-detail-container">
        <h1>{item.title}</h1>
        <img src={item.img} alt="Paleta de Padel" />
        <p>{item.description}</p>
        <h2>Precio $ {item.price}</h2>

        <CounterContainer />
      </div>
    </>
  );
};
export default ItemDetail;
