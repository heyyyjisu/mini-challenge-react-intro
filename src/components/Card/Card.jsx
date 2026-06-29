import styles from "./Card.module.scss";

export default function Card({ name, contents, rating, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={image} className={styles.image} />
      {rating === 5 && <div className={styles.topRating}>Top Rating!</div>}
      <h2>{name}</h2>
      <h5>{contents}</h5>
      <p>Rating: {rating}</p>
    </article>
  );
}
