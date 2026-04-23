import { useState } from "react";
import Header from "./components/Header/Header";
import PopUp from "./components/PopUp/PopUp";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <FloatingButtons />
      <Header onOpenModal={openModal} />
      <Hero />
      <Footer />
      <PopUp isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default App;
