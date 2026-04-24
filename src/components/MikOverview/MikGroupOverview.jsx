import React from "react";
import styles from "./MikGroupOverview.module.css";
import logo from "/images/logo.png";
export default function MikGroupOverview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* ── Text Section ── */}
        <div className={styles.textLeft}>
          <div className={styles.contentOuter}>
            {/* Logo */}
            <div className={styles.logo}>
              <div
                className={styles.logoImage}
                style={{ backgroundImage: `url(${logo})` }}
              />
            </div>

            <div className={styles.contentInner}>
              {/* Subtitle */}
              <div className={styles.subtitle}>
                <span className={styles.subtitleText}>
                  KIẾN TẠO CỘNG ĐỒNG SỐNG THỊNH VƯỢNG
                </span>
              </div>

              {/* Stats Grid */}
              <div className={styles.statsGrid}>
                {/* Left — Big Red Card */}
                <div className={styles.gridLeft}>
                  <div className={styles.cardRed}>
                    <div className={styles.cardRedNumber}>
                      <div className={styles.cardRedNumberInner}>
                        <span className={styles.bigNumber}>30+</span>
                      </div>
                    </div>
                    <div className={styles.cardRedLabel}>
                      <div className={styles.cardRedLabelInner}>
                        <span className={styles.labelText}>
                          Dự án khắp cả nước
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right — Blue Cards */}
                <div className={styles.gridRight}>
                  {/* Top row — 2 small blue cards */}
                  <div className={styles.rightTop}>
                    <div className={styles.cardBlueLeft}>
                      <div className={styles.smallCardNumber}>
                        <div className={styles.smallCardNumberInner}>
                          <span className={styles.smallNumber}>10.000+</span>
                        </div>
                      </div>
                      <div className={styles.smallCardLabel}>
                        <div className={styles.smallCardLabelInner}>
                          <span className={styles.smallLabelText}>
                            Hecta quỹ đất đầu tư
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardBlueRight}>
                      <div className={styles.smallCardNumber}>
                        <div className={styles.smallCardNumberInner}>
                          <span className={styles.smallNumber}>20.000+</span>
                        </div>
                      </div>
                      <div className={styles.smallCardLabel}>
                        <div className={styles.smallCardLabelInner}>
                          <span className={styles.smallLabelText}>
                            Căn hộ đã bàn giao
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom — wide blue card */}
                  <div className={styles.rightBottom}>
                    <div className={styles.rightBottomNumber}>
                      <div className={styles.rightBottomNumberInner}>
                        <span className={styles.mediumNumber}>30.000+</span>
                      </div>
                    </div>
                    <div className={styles.rightBottomLabel}>
                      <div className={styles.rightBottomLabelBottom}>
                        <span className={styles.mediumLabelText}>
                          Khách hàng
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Video Section ── */}
        <div className={styles.videoEmbed}>
          <div className={styles.video}>
            <iframe
              className={styles.videoIframe}
              src="https://www.youtube.com/embed/A2mGhIKWn1Y"
              title="Mik Group overview video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
