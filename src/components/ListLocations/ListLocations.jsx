import styles from "./ListLocations.module.scss";

const ListLocations = ({ data, onClickFilter }) => {
  return (
    <select className={styles.ListLocations} onChange={onClickFilter}>
      <option value="Mostra tutti">Mostra tutti</option>
      {data.map((locations) => (
        <option value={locations.arrival.Port}>{locations.arrival.Port}</option>
      ))}
    </select>
  );
};

export default ListLocations;
