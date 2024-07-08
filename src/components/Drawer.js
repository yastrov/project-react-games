function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>
                <div className="items">
                    <div className="cartItem">
                        <img width={70} height={70} src="/img/games/1.jpg" alt="игра" />
                        <div className="cardItemDesc">
                            <p>Minecraft</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img width={70} height={70} src="/img/games/1.jpg" alt="игра" />
                        <div className="cardItemDesc">
                            <p>Minecraft</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img width={70} height={70} src="/img/games/1.jpg" alt="игра" />
                        <div className="cardItemDesc">
                            <p>Minecraft</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="Remove" />
                    </div>
                </div>
                <ul className="cartTotalBlock">
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 495 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    <button className="greenButton">Оформить заказ
                        <img src="/img/arrow.svg" alt="arrow" />
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;