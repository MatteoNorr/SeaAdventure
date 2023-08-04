import styles from "./GroupFilter.module.scss";

const GroupFilter = ({ onClickGroups }) => {
  return (
    <select onChange={onClickGroups} className={styles.GroupFilter}>
      <option>Show all</option>
      <option>Show by departure location</option>
    </select>
  );
};

export default GroupFilter;
