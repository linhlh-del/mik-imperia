import React from "react";
import styles from "./MatBang.module.css";

export default function MatBang() {
  return (
    <section className={styles.matBang} id="mat-bang">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.line} />
          <span className={styles.title}>
            MẶT BẰNG DỰ ÁN IMPERIA GREEN PARADISE
          </span>
        </div>

        {/* IMAGE GRID */}
        <div className={styles.imageGrid}>
          {/* TOP — ảnh lớn */}
          <div className={styles.imageTop}>
            <img
              src="/images/mat-bang/1.jpg"
              alt="Mặt bằng tổng thể"
              className={styles.img}
            />
          </div>

          {/* BOTTOM — 2 ảnh nhỏ */}
          <div className={styles.imageBottom}>
            <div className={styles.imageBottomItem}>
              <img
                src="/images/mat-bang/2.jpg"
                alt="Mặt bằng 2"
                className={styles.img}
              />
            </div>
            <div className={styles.imageBottomItem}>
              <img
                src="/images/mat-bang/3.jpg"
                alt="Mặt bằng 3"
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
