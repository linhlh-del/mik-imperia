import React from "react";
import styles from "./OverviewBg.module.css";

export default function OverviewBg({ backgroundImage }) {
  return (
    <div
      className={styles.overviewBg}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}
