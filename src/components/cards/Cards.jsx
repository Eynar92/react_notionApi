import styles from './styles/Cards.module.css'

export default function Cards({ image, title, content, link, button }) {
    return (
        <article className={styles.card}>
            <img src={image} alt={`${title} image`} className="card__image" />
            <h2 className={styles.card__heading}>{title}</h2>
            <div className={styles.card__content}>
                <p>
                    {content}
                </p>
            </div>
            <a href={link} className={styles.card__btn}>{button}</a>
        </article>
    )
}
