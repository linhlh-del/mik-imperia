import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PopUp from "./components/PopUp/PopUp";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import Overview from "./components/TongQuan/Overview";
import OverviewBg from "./components/TongQuan/Overview-bg";
import GetInfor from "./components/Getinfor/GetInfor";
import ThankYou from "./components/ThankYou";
import ImperiaOverview from "./components/ImperiaOverview/ImperiaOverview";
import MikGroupOverview from "./components/MikOverview/MikGroupOverview";
import Position from "./components/Position/Position";
import GetInforGreen from "./components/Getinfor_greeen/GetInforGreen";
import TienIch from "./components/TienIch/TienIch";
import MatBang from "./components/MatBang/MatBang";
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const HomePage = () => (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <FloatingButtons />
      <Header onOpenModal={openModal} />
      <Hero />
      <Overview
        logoImage="/images/logo-imperia.png"
        titleImage="/images/overview-title.png"
      />
      <OverviewBg backgroundImage="/images/overview-bg.webp" />
      <GetInfor />
      <ImperiaOverview />
      <MikGroupOverview />
      <Position />
      <GetInforGreen />
      <TienIch />
      <MatBang />
      <Footer />
      <PopUp isOpen={showModal} onClose={closeModal} />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
