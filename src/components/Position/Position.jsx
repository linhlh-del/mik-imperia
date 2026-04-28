import React from "react";
import styles from "./Position.module.css";
import mapImage from "../../assets/img/map_16x9.jpg";

export default function Position() {
  return (
    <div className={styles.positionSection}>
      <div className={styles.textWrapper}>
        <div className={styles.titleWrapper}>
          <span className={styles.titleText}>VỊ TRÍ CHIẾN LƯỢC</span>
        </div>
      </div>
      <div
        className={styles.imageBlock}
        style={{ backgroundImage: `url(${mapImage})` }}
      />
    </div>
  );
}
