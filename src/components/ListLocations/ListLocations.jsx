import styles from "./ListLocations.module.scss";

const ListLocations = ({ data, onClickFilter }) => {
  return (
    <select className={styles.ListLocations} onChange={onClickFilter}>
      <option value="Show all">Show all</option>
      {data.map((locations, i) => (
        <option key={i} value={locations.arrival.Port}>
          {locations.arrival.Port}
        </option>
      ))}
    </select>
  );
};

export default ListLocations;
