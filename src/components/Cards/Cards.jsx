import styles from "./Cards.module.scss";
import Card from "../Card";

const Cards = ({ data }) => {
  return (
    <div className={styles.Cards}>
      {data.map((itinerary) => (
        <Card data={itinerary} />
      ))}
    </div>
  );
};

export default Cards;
