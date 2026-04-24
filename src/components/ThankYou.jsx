import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f7fb",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          width: "100%",
          background: "white",
          borderRadius: "24px",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.12)",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "1rem", color: "#002544" }}>Cảm ơn bạn!</h1>
        <p style={{ marginBottom: "2rem", color: "#475569", lineHeight: 1.8 }}>
          Chúng tôi đã nhận được thông tin của bạn. Nhân viên kinh doanh sẽ liên
          hệ lại trong thời gian sớm nhất.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#004380",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "0.9rem 2rem",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
}
