function Header() {
    return (
        <header className="header">
        <div className="sideLeft">
          <img className="logoImg" src="/img/logo.png" alt="лого" />
          <div className="logoInfo">
            <h1>React games</h1>
            <p>Магазин игр</p>
          </div>
        </div>
        <div className="sideRight">
          <ul>
            <li>
              <img className="img1" src="/img/cart.svg" alt="корзина" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img className="img1" src="/img/like.svg" alt="лайк" />
              <span>Закладки</span>
            </li>
            <li>
              <img className="img1" src="/img/user.svg" alt="пользователь" />
              <span>Профиль</span>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Header;