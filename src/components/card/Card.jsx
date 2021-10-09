import styles from './card.module.css'

export default function Card({item}){
    console.log(item)
    return(<div className={styles.card} key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.rating}</p>
        <img className={styles.img} src={item.background_image} alt="" />
    </div>)
}