import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Layout.module.css";

import layout1 from "/images/layout/layout1.webp";
import layout2 from "/images/layout/layout2.webp";
import layout3 from "/images/layout/layout3.webp";
import layout4 from "/images/layout/layout4.webp";
import layout5 from "/images/layout/layout5.webp";
import layout6 from "/images/layout/layout6.webp";
import layout7 from "/images/layout/layout7.webp";

const thumbnails = [
  { src: layout1, alt: "Layout căn hộ 1" },
  { src: layout2, alt: "Layout căn hộ 2" },
  { src: layout3, alt: "Layout căn hộ 3" },
  { src: layout4, alt: "Layout căn hộ 4" },
  { src: layout5, alt: "Layout căn hộ 5" },
  { src: layout6, alt: "Layout căn hộ 6" },
  { src: layout7, alt: "Layout căn hộ 7" },
];

const TOTAL = thumbnails.length;
const VISIBLE = 4; // số thumbnail hiển thị cùng lúc

// Clone: thêm VISIBLE ảnh đầu vào cuối và VISIBLE ảnh cuối vào đầu
// để infinite loop mượt
const clonedList = [
  ...thumbnails.slice(-VISIBLE),
  ...thumbnails,
  ...thumbnails.slice(0, VISIBLE),
];
// Index bắt đầu thật trong clonedList
const START_INDEX = VISIBLE;

export default function Layout() {
  const [activeIndex, setActiveIndex] = useState(0); // 0-6, ảnh chính
  const [isMobile, setIsMobile] = useState(false);

  // --- DESKTOP ---
  // trackIndex: vị trí hiện tại trong clonedList
  const [trackIndex, setTrackIndex] = useState(START_INDEX);
  const [animated, setAnimated] = useState(true);
  const autoRef = useRef(null);
  const isJumping = useRef(false);

  // --- MOBILE ---
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileAutoRef = useRef(null);
  const touchStartX = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ============================================================
  // DESKTOP
  // ============================================================

  // realIndex từ trackIndex (0-6)
  const getRealIndex = (ti) => (((ti - START_INDEX) % TOTAL) + TOTAL) % TOTAL;

  const goTo = useCallback((ti, animate = true) => {
    setAnimated(animate);
    setTrackIndex(ti);
  }, []);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setTrackIndex((prev) => {
        setAnimated(true);
        return prev + 1;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isMobile) resetAuto();
    return () => clearInterval(autoRef.current);
  }, [isMobile, resetAuto]);

  // Sau transition: teleport nếu ở vùng clone
  const handleTransitionEnd = () => {
    if (isJumping.current) return;
    if (trackIndex >= START_INDEX + TOTAL) {
      isJumping.current = true;
      goTo(START_INDEX + (trackIndex - START_INDEX - TOTAL), false);
      setTimeout(() => {
        isJumping.current = false;
      }, 50);
    } else if (trackIndex < START_INDEX) {
      isJumping.current = true;
      goTo(START_INDEX + TOTAL + trackIndex - START_INDEX + TOTAL, false);
      setTimeout(() => {
        isJumping.current = false;
      }, 50);
    }
    // Sync activeIndex với ảnh đầu tiên đang hiển thị
    setActiveIndex(getRealIndex(trackIndex));
  };

  // Tính % translateX trên track width:
  // Track width = clonedList.length * (100% / VISIBLE)
  // mỗi item = 100% / clonedList.length của track width
  const translateX = `${-(trackIndex * (100 / clonedList.length))}%`;

  // Dots: dựa trên realIndex
  const realIndex = getRealIndex(trackIndex);

  // ============================================================
  // MOBILE
  // ============================================================
  const resetMobileAuto = useCallback(() => {
    clearInterval(mobileAutoRef.current);
    mobileAutoRef.current = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % TOTAL);
    }, 4000);
  }, []);

  useEffect(() => {
    if (isMobile) resetMobileAuto();
    return () => clearInterval(mobileAutoRef.current);
  }, [isMobile, resetMobileAuto]);

  useEffect(() => {
    if (isMobile) setActiveIndex(mobileIndex);
  }, [isMobile, mobileIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      setMobileIndex((prev) =>
        delta > 0 ? (prev + 1) % TOTAL : (prev - 1 + TOTAL) % TOTAL,
      );
      resetMobileAuto();
    }
    touchStartX.current = null;
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <section className={styles.layout} id="layout">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.title}>LAYOUT CĂN HỘ</span>
          <span className={styles.subtitle}>
            Nội thất hoàn thiện cao cấp · Bàn giao theo tiêu chuẩn
          </span>
        </div>

        {/* ── DESKTOP ── */}
        {!isMobile && (
          <div className={styles.imageWrapper}>
            {/* Main image */}
            <div className={styles.imageMain}>
              <img
                src={thumbnails[activeIndex].src}
                alt={thumbnails[activeIndex].alt}
                className={styles.imgMain}
              />
            </div>

            {/* Thumbnail slider */}
            <div className={styles.sliderWrapper}>
              {/* Viewport: chỉ show 4 ảnh */}
              <div className={styles.sliderViewport}>
                <div
                  className={styles.sliderTrack}
                  style={{
                    width: `${(clonedList.length / VISIBLE) * 100}%`,
                    transform: `translateX(${translateX})`,
                    transition: animated ? "transform 0.4s ease" : "none",
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {clonedList.map((thumb, i) => {
                    const ri = (((i - START_INDEX) % TOTAL) + TOTAL) % TOTAL;
                    return (
                      <div
                        key={i}
                        className={styles.thumbSlot}
                        style={{ width: `${100 / clonedList.length}%` }}
                      >
                        <button
                          className={`${styles.card} ${ri === activeIndex ? styles.cardActive : ""}`}
                          onClick={() => {
                            setActiveIndex(ri);
                            resetAuto();
                          }}
                        >
                          <img
                            src={thumb.src}
                            alt={thumb.alt}
                            className={styles.imgThumb}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dots — 1 dot mỗi ảnh */}
              <div className={styles.dots}>
                {thumbnails.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === realIndex ? styles.dotActive : ""}`}
                    onClick={() => {
                      goTo(START_INDEX + i);
                      setActiveIndex(i);
                      resetAuto();
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MOBILE — unified slider ── */}
        {isMobile && (
          <div className={styles.mobileSlider}>
            <div
              className={styles.mobileTrack}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={thumbnails[mobileIndex].src}
                alt={thumbnails[mobileIndex].alt}
                className={styles.mobileImg}
              />
            </div>
            <div className={styles.dots}>
              {thumbnails.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === mobileIndex ? styles.dotActive : ""}`}
                  onClick={() => {
                    setMobileIndex(i);
                    resetMobileAuto();
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
