import React from "react";
import styles from "./Card.module.scss"

function Card({onFavorite, imageUrl, title, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-liked.svg" alt="Liked" />
            </div>
            <img width={120} height={120} src={imageUrl} alt="игра" />
            <h5>{title}</h5>
            <div className={styles.cardInfo}>
                <div className={styles.cardPrice}>
                    <p>Цена:</p>
                    <b>{price} руб.</b>
                </div>
                <img onClick={onClickPlus} src={isAdded ? "/img/plus-added.svg" : "/img/plus.svg"} alt="добавить" />
            </div>
        </div>
    );
}

export default Card;