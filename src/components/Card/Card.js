import styles from "./Card.module.scss"

function Card(props) {
    const onClickButton = () => {
        alert("Вы выбрали " + props.title)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-liked.svg" alt="Liked" />
            </div>
            <img width={120} height={120} src={props.imageUrl} alt="игра" />
            <h5>{props.title}</h5>
            <div className={styles.cardInfo}>
                <div className={styles.cardPrice}>
                    <p>Цена:</p>
                    <b>{props.price} руб.</b>
                </div>
                <button onClick={onClickButton}>
                    <img width={11} height={11} src={"/img/plus.svg"} alt="добавить" />
                </button>
            </div>
        </div>
        );
}

export default Card;