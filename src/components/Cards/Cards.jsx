import styles from "./Cards.module.scss";
import Card from "../Card";
import { useState } from "react";
import ListLocations from "../ListLocations";

const Cards = ({ data }) => {
  const [more, setMore] = useState(8);
  const [locations, setLocations] = useState(data);

  const onClickMore = () => {
    if (more >= 32) {
      setMore(8);
    } else {
      setMore((prev) => prev + 8);
    }
  };

  const onClickFilter = (e) => {
    if (e.target.value === "Mostra tutti") {
      setLocations(data);
    } else {
      setLocations(data.filter((data) => data.arrival.Port === e.target.value));
    }
  };

  return (
    <>
      <ListLocations data={data} onClickFilter={(e) => onClickFilter(e)} />
      <div className={styles.Cards}>
        {locations.slice(0, more).map((itinerary, i) => (
          <Card key={i} data={itinerary} />
        ))}
      </div>
      <div className={styles.seeMore}>
        <button onClick={onClickMore}>
          {more === 32 ? "Back to 8 results" : "See more"}
        </button>
      </div>
    </>
  );
};

export default Cards;
