import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header"
import Drawer from "./components/Drawer";

// const arr = [
//   { "title": "Minecraft", "price": 1200, "imageUrl": "/img/games/minecraft.jpg" },
//   { "title": "Elden Ring", "price": 3100, "imageUrl": "/img/games/eldenring.jpg" },
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://66a10b557053166bcabdcce1.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddtoCart = (obj) => {
    setCartItems(prev => [...prev, obj])
    console.log(obj);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="container">
        <div className="title">
          <h1>Все игры</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="catalog">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddtoCart(obj)}
              onFavorite={() => console.log("Добавлено в корзину")} />
          ))}
        </div>
      </div>
    </div>


  );
}

export default App;
