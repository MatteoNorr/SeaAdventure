import { useState } from "react";
import Card from "../Card";
import styles from "./GroupCard.module.scss";

const GroupCard = ({ data }) => {
  const portFilter = () => {
    const portFilter = data.map((port) => port.departure.Port);
    let uniquePort = portFilter.filter((element, index) => {
      return portFilter.indexOf(element) === index;
    });

    return uniquePort;
  };

  const [port, setPort] = useState(portFilter);

  const filterCard = (port) =>
    data.filter((data) => data.departure.Port === port);

  return (
    <div className={styles.GroupCard}>
      {port.length &&
        port.map((port, i) => (
          <div key={i}>
            <h2 className={styles.portTitle}>{port}</h2>
            <div className={styles.group}>
              {filterCard(port).map((data, i) => (
                <Card data={data} key={i} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GroupCard;
