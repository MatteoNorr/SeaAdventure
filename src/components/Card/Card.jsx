import styles from "./Card.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.budget}>
        <p>
          <span>{data.budget.value}€</span> per cabina
        </p>
      </div>
      <h2>{data.title}</h2>
      <div className={styles.itineraryInfo}>
        <div className={styles.itineraryInfo__move}>
          <div className={styles.departurePosition}>
            <p className={styles.title}>Partenza da</p>
            <p className={styles.departure}>{data.departure.Port}</p>
          </div>
          <div className={styles.otherInfo}>
            <p>{data.boatType}</p>
            <p>{data.numberOfDays} giorni</p>
          </div>
        </div>
        <div className={styles.itineraryInfo__date}>
          <div className={styles.departureDate}>
            <p>{data.departureDate.slice(0, 10)}</p>
            <p className={styles.hour}>{data.departureDate.slice(10, 15)}</p>
          </div>
          <div className={styles.arrivalsDate}>
            <p>{data.arrivalDate.slice(0, 10)}</p>
            <p className={styles.hour}>{data.arrivalDate.slice(10, 16)}</p>
          </div>
        </div>
        <div className={styles.reservations}>
          <p>Reservations: {data.reservations}</p>
          <p className={styles.available}>
            <span>Available</span> {data.reservationsAvailable}
          </p>
        </div>
      </div>
      <button>RESERVE</button>
    </div>
  );
};

export default Card;
