import Cards from '../cards/Cards'
import styles from './styles/Card.module.css'

export default function Card() {
    return (
        <main className={styles.card__container}>
            <Cards />
            <Cards />
            <Cards />
        </main>
    )
}
