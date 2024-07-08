import Card from "./components/Card";
import Header from "./components/Header"
import Drawer from "./components/Drawer";

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
          <Card />
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Liked" />
            </div>
            <img width={120} height={120} src="/img/games/1.jpg" alt="игра" />
            <h5>Minecraft</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <p>Цена:</p>
                <b>1 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="добавить" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-liked.svg" alt="Liked" />
            </div>
            <img width={120} height={120} src="/img/games/1.jpg" alt="игра" />
            <h5>Minecraft</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <p>Цена:</p>
                <b>1 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="добавить" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={120} height={120} src="/img/games/1.jpg" alt="игра" />
            <h5>Minecraft</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <p>Цена:</p>
                <b>1 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="добавить" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={120} height={120} src="/img/games/1.jpg" alt="игра" />
            <h5>Minecraft</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <p>Цена:</p>
                <b>1 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="добавить" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
