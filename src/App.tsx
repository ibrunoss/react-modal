import { useState } from "react";
import Modal from "./Modal/Modal";
import ModalButton from "./ModalButton/ModalButton";

function App() {
  const [showModal, setShowModal] = useState(false);

  const changeModal = () => {
    setShowModal((v) => !v);
  };

  return (
    <>
      <ModalButton onClick={changeModal} />
      <Modal isOpen={showModal} onChange={changeModal}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Modal Content</h1>
        </div>
      </Modal>
    </>
  );
}

export default App;
