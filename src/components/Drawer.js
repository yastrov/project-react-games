function Drawer( {onClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="title">
                    <img className="closeBtn" width={26} height={26} src="/img/remove.svg" onClick={onClose} alt="Close" />
                    <h2>Корзина</h2>
                </div>
                <div className="items">
                    {
                        items.map((obj) => (
                        <div className="cartItem">
                            <img width={70} height={70} src={obj.imageUrl} alt="игра" />
                            <div className="cardItemDesc">
                                <p>{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" width={32} height={32} src="/img/remove.svg" alt="Remove" />
                        </div>
                        ))
                        }
            
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