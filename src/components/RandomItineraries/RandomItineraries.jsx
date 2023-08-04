import Card from "../Card";
import styles from "./RandomItineraries.module.scss";
import banner from "../../../public/banner.jpeg";

const RandomItineraries = ({ data }) => {
  const randomizer = (array) => {
    let arrayOrder = [];

    for (let i = Math.floor(Math.random() * 10); i < array.length - 1; i++) {
      arrayOrder.push(array[i]);
    }

    return arrayOrder;
  };

  return (
    <div className={styles.RandomItineraries}>
      <div className={styles.banner}>
        <img src="./banner.jpeg" />
        <div className={styles.text}>
          <h2>+20 destinations</h2>
          <h2>+15 boat types</h2>
          <h2>+40 itineraries</h2>
        </div>
      </div>
      <h1>Adventure to experience</h1>
      <div className={styles.cardsContainer}>
        {randomizer(data)
          .slice(0, 6)
          .map((itinerary) => (
            <Card data={itinerary} key={itinerary.id} />
          ))}
      </div>
    </div>
  );
};

export default RandomItineraries;
