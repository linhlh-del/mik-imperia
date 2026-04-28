import React, { useState, useEffect, useRef } from "react";
import styles from "./TienIch.module.css";
import arrowIcon from "/images/arrow-left.png";

// Import nội khu images
import noikhu1 from "/images/tienich/noikhu1.webp";
import noikhu2 from "/images/tienich/noikhu2.webp";
import noikhu3 from "/images/tienich/noikhu3.webp";

// Import ngoại khu images
import ngoaikhu1 from "/images/tienich/ngoaikhu.webp";

export default function TienIch({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState("noi-khu");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const sectionRef = useRef(null);

  const noikhuImages = [
    { src: noikhu1, alt: "Tiện ích nội khu 1" },
    { src: noikhu2, alt: "Tiện ích nội khu 2" },
    { src: noikhu3, alt: "Tiện ích nội khu 3" },
  ];

  const ngoaikhuImages = [{ src: ngoaikhu1, alt: "Tiện ích ngoại khu 1" }];

  const images = activeTab === "noi-khu" ? noikhuImages : ngoaikhuImages;
  const currentImage = images.length > 0 ? images[currentIndex] : null;

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting && !modalShown && onOpenModal) {
          setModalShown(true);
          onOpenModal();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [modalShown, onOpenModal]);

  // Auto-advance image every 5 seconds when in viewport
  useEffect(() => {
    if (!isInViewport) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isInViewport, activeTab, images.length]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section className={styles.tienich} id="tien-ich" ref={sectionRef}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              IMPERIA GREEN PARADISE <br /> TIỆN ÍCH 5 SAO
            </h2>
            <div className={styles.line} />
          </div>

          <div className={styles.headerRight}>
            <p className={styles.description}>
              Imperia Green Paradise được trang bị hệ thống dịch vụ tiện ích cao
              cấp theo tiêu chuẩn 5 sao, hướng tới trải nghiệm "All-in-one" (tất
              cả trong một), biến mỗi căn hộ không chỉ là nơi để ở, mà còn là
              một không gian thư giãn tách biệt khỏi sự ồn ào của đô thị. Dự án
              Imperia Green Paradise căn hộ Cần Giờ
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className={styles.carouselWrapper}>
          {/* TABS */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "noi-khu" ? styles.tabActive : styles.tabInactive
              }`}
              onClick={() => handleTabChange("noi-khu")}
            >
              TIỆN ÍCH NỘI KHU
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "ngoai-khu"
                  ? styles.tabActive
                  : styles.tabInactive
              }`}
              onClick={() => handleTabChange("ngoai-khu")}
            >
              TIỆN ÍCH NGOẠI KHU
            </button>
          </div>

          {/* IMAGE */}
          <div
            className={
              activeTab === "ngoai-khu"
                ? styles.imageContainerAuto
                : styles.imageContainer
            }
          >
            {currentImage ? (
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className={
                  activeTab === "ngoai-khu" ? styles.imageContain : styles.image
                }
              />
            ) : (
              <div className={styles.noContent}>Chưa có nội dung</div>
            )}

            {/* ARROWS — inside imageContainer for correct overlay */}
            {images.length > 1 && (
              <div className={styles.arrowRow}>
                <button className={styles.arrowBtn} onClick={handlePrev}>
                  <div className={styles.arrowCircle}>
                    <img
                      src={arrowIcon}
                      alt="prev"
                      className={styles.arrowImg}
                      style={{ transform: "scaleX(1)" }}
                    />
                  </div>
                </button>
                <button className={styles.arrowBtn} onClick={handleNext}>
                  <div className={styles.arrowCircle}>
                    <img
                      src={arrowIcon}
                      alt="next"
                      className={styles.arrowImg}
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* DOTS */}
          {images.length > 1 && (
            <div className={styles.dots}>
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
