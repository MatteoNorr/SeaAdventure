import Card from "../Card";
import styles from "./RandomItineraries.module.scss";
import banner from "../../../public/banner.jpeg";

const RandomItineraries = ({ data }) => {
  const randomizer = () => {
    let i = data.length;

    while (i) {
      const j = Math.floor(Math.random() * i--);
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  };

  const randomArray = randomizer();

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
      {randomArray.map((itinerary, i) => (
        <Card data={itinerary} key={i} />
      ))}
    </div>
  );
};

export default RandomItineraries;
