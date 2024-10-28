import "./styles.css";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  return <Modal isOpen={showModal} closeModal={() => setShowModal(false)} />;
}
