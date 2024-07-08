function Card() {
    return (
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
        </div>)
}

export default Card;