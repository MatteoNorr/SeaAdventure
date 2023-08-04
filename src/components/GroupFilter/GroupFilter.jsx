import { useState } from "react";
import styles from "./GroupFilter.module.scss";

const GroupFilter = ({ onClickGroups, selected }) => {
  return (
    <select onChange={onClickGroups} className={styles.GroupFilter}>
      <option>Show all</option>
      <option selected={selected}>Show by departure location</option>
    </select>
  );
};

export default GroupFilter;
