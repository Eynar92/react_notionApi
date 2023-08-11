import Cards from '../cards/Cards'
import styles from './styles/Card.module.css'
import { useEffect, useState } from 'react'


export default function Card() {

    const [cardNotion, setCardNotion] = useState([])

    useEffect(() => {
        const notionAPI = async () => {
            const url = '/api/fetchNotion'
            const response = await fetch(url)
            const result = await response.json()

            const arrayCardsData = result.results.map(data => {
                const cardDataObject = {
                    id: data.id,
                    image: data.properties.Image.files[0].external.url,
                    title: data.properties.Name.title[0].plain_text,
                    content: data.properties.Content.rich_text[0].plain_text,
                    link: data.properties.Link.url,
                    button: data.properties.Btn_text.rich_text[0].plain_text,
                }

                return cardDataObject
            })

            setCardNotion(arrayCardsData);

        }

        notionAPI();

    }, [])

    return (
        <main className={styles.card__container}>
            {
                cardNotion.map(card => (
                    <Cards
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        content={card.content}
                        link={card.link}
                        button={card.button}
                    />
                ))
            }
        </main>
    )
}
