import Card from "./components/Card/Card";
import Header from "./components/Header"
import Drawer from "./components/Drawer";

const arr = [
  { title: "Minecraft", price: 1200, imageUrl: "/img/games/minecraft.jpg" },
  { title: "Elden Ring", price: 3100, imageUrl: "/img/games/eldenring.jpg" },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="container">
        <div className="title">
          <h1>Все игры</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="catalog">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>


  );
}

export default App;
