import styles from "./Cards.module.scss";
import Card from "../Card";
import { useState } from "react";

const Cards = ({ data }) => {
  const [more, setMore] = useState(8);

  const onClickMore = () => {
    if (more >= 32) {
      setMore(8);
    } else {
      setMore((prev) => prev + 8);
    }
  };

  return (
    <>
      <div className={styles.Cards}>
        {data.slice(0, more).map((itinerary, i) => (
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
