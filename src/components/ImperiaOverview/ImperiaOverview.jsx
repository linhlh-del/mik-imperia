import React from "react";
import styles from "./ImperiaOverview.module.css";

export default function ImperiaOverview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Text Section */}
        <div className={styles.textLeft}>
          <div className={styles.content}>
            {/* Logo / Title Image */}
            <div className={styles.logo}>
              <img
                src="/images/logo-imperia.png"
                alt="Imperia logo"
                className={styles.logoImage}
              />
            </div>

            {/* Description Text */}
            <div className={styles.textDes}>
              <span className={styles.paragraph}>
                Imperia Green Paradise Cần Giờ (hay còn được biết đến là MIK Cần
                Giờ) là siêu đô thị lấn biển quy mô lớn do Tập đoàn MIK GROUP
                phát triển. Dự án nằm trong quần thể khu dự trữ sinh quyển rừng
                ngập mặn Cần Giờ, TP.HCM. Dự án có tổng diện tích khoảng 103 ha,
                được quy hoạch theo triết lý ESG++ – Xanh, thông minh, sinh thái
                và tái sinh. Hướng đến mô hình đô thị bền vững, nơi con người
                hòa hợp cùng thiên nhiên và công nghệ, Imperia Green Paradise
                Cần Giờ được đánh giá là "Siêu đô thị lấn biển ESG++ hàng đầu
                thế giới" khẳng định tầm vóc tiên phong của Việt Nam trong xu
                hướng phát triển đô thị tương lai.
              </span>
            </div>
          </div>
        </div>

        {/* Video Embed Section */}
        <div className={styles.videoEmbed}>
          <div className={styles.video}>
            <img
              src="/images/imperia-overview.jpg"
              alt="Imperia overview"
              className={styles.videoImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
