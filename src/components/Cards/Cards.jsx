import styles from "./Cards.module.scss";
import Card from "../Card";
import { useState } from "react";
import ListLocations from "../ListLocations";
import GroupFilter from "../GroupFilter";
import GroupCard from "../GroupCards";

const Cards = ({ data }) => {
  const [more, setMore] = useState(8);
  const [locations, setLocations] = useState(data);
  const [view, setView] = useState(false);

  const onClickMore = () => {
    if (more >= 32) {
      setMore(8);
    } else {
      setMore((prev) => prev + 8);
    }
  };

  const onClickFilter = (e) => {
    if (e.target.value === "Show all") {
      setLocations(data);
    } else {
      setLocations(data.filter((data) => data.arrival.Port === e.target.value));
    }
  };

  const onClickGroups = () => setView(!view);

  return (
    <div>
      {view ? (
        <>
          <div className={styles.filters}>
            <ListLocations
              data={data}
              onClickFilter={(e) => onClickFilter(e)}
            />
            <GroupFilter onClickGroups={onClickGroups} />
          </div>
          <GroupCard data={data} />
        </>
      ) : (
        <>
          <div className={styles.filters}>
            <ListLocations
              data={data}
              onClickFilter={(e) => onClickFilter(e)}
            />
            <GroupFilter onClickGroups={onClickGroups} />
          </div>
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
      )}
    </div>
  );
};

export default Cards;
