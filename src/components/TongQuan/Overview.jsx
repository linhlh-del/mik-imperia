import React from "react";
import styles from "./Overview.module.css";

const projectData = [
  { label: "Dự án", value: "Imperia Green Paradise" },
  { label: "Tên gọi khác", value: "Imperia Green Paradise Cần Giờ" },
  {
    label: "Vị trí dự án",
    value:
      "Mặt tiền biển thuộc Long Hòa, thị trấn Cần Thạnh, huyện Cần Giờ, TP. Hồ Chí Minh",
  },
  { label: "Phát triển dự án", value: "Tập đoàn MIK Group" },
  {
    label: "Loại hình sản phẩm",
    value: "Nhà phố, Biệt thự, Căn hộ, Officetel, Shophouse, Khách sạn",
  },
  {
    label: "Quy mô gồm",
    value: (
      <>
        <span className={styles.valueNormal}>
          25.000 Căn hộ với 3 phân khu chiến lược chính:
        </span>
        <span className={styles.valueBold}>
          {`Phân khu District 1 - Khoảng 10.000 căn hộ
Phân khu District 2 - Khoảng 7.000 căn hộ
Phân khu District 3 - Khoảng 8.000 căn hộ`}
        </span>
      </>
    ),
    multiline: true,
  },
  { label: "Mật độ xây dựng", value: "30%, ưu tiên cho mảng xanh và mặt nước" },
  {
    label: "Thời gian sở hữu",
    value: "Lâu dài với khách hàng Việt Nam & 50 năm với khách hàng nước ngoài",
  },
];

export default function Overview({ titleImage, logoImage }) {
  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        {/* Left column - Logo & Title */}
        <div className={styles.left}>
          {titleImage && (
            <img
              src={titleImage}
              alt="Overview title"
              className={styles.titleImg}
            />
          )}
          {logoImage && (
            <img src={logoImage} alt="Project logo" className={styles.logo} />
          )}
        </div>

        {/* Right column - Text */}
        <div className={styles.right}>
          <div className={styles.table}>
            {projectData.map((item, index) => (
              <div
                key={index}
                className={`${styles.row} ${item.multiline ? styles.rowTall : ""}`}
              >
                <div className={styles.label}>{item.label}</div>
                <div
                  className={`${styles.value} ${item.multiline ? styles.valueMultiline : ""}`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
