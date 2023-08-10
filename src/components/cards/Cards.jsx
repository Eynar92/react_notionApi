import styles from './styles/Cards.module.css'

export default function Cards() {
    return (
        <article className={styles.card}>
            <img src="https://doodleipsum.com/350x197/hand-drawn?i=cdc1467dc51494b84db187dc836fddaf" alt="Hand drawn doodle" className="card__image" />
            <h2 className={styles.card__heading}>Lorem ipsum dolor</h2>
            <div className={styles.card__content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci dignissimos repellendus ut provident. Rem distinctio adipisci quod dolores! Explicabo, laborum ducimus veritatis expedita impedit nam error maiores quaerat doloribus.
                </p>
            </div>
            <a href="#" className={styles.card__btn}>Check this out</a>
        </article>
    )
}
