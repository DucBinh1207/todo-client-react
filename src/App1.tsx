import { useRef, useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="z-[-1] flex justify-center">
      <button
        className="fixed left-0 top-0 ml-[200px] mt-[200px] rounded-[5px] bg-blue-500 px-[20px] py-[10px] hover:bg-blue-800"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </div>
  );
}

export default App1;
