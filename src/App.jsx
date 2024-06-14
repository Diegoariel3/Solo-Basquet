import { Navbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Solo Basquet"} />
    </div>
  );
}

export default App;
