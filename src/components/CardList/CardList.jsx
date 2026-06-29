import styles from "./CardList.module.scss";
import data from "../../assets/drinks-list.json";
import Card from "../Card/Card";

export default function CardList() {
  return (
    <ul className={styles.cardlist}>
      {data.map((drink, index) => (
        <Card
          key={index}
          name={drink.name}
          contents={drink.contents}
          rating={drink.rating}
          image={drink.image}
        />
      ))}
    </ul>
  );
}
