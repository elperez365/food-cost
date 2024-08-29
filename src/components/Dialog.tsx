import React from "react";
import { createPortal } from "react-dom";

interface DialogProps {
  showModal: boolean;
  setShowmodal: (showModal: boolean) => void;
  text1: string;
  text2: string;
}

const Dialog: React.FC<DialogProps> = ({
  showModal,
  setShowmodal,
  text1,
  text2,
}): React.ReactNode => {
  return createPortal(
    <dialog
      id="modal"
      open={showModal}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "2rem",
        border: "1px solid black",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Risultato</h2>
        <p>Il costo totale è : </p>
        <span>
          <strong>{text1}</strong>
        </span>
        <p>Il costo della quantità consumata è : </p>
        <span>
          <strong>{text2}</strong>
        </span>
        <br />
        <button
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "lightblue",
            cursor: "pointer",
          }}
          onClick={() => setShowmodal(false)}
        >
          OK
        </button>
      </div>
    </dialog>,
    document.getElementById("dialog") as HTMLDivElement
  );
};

export default Dialog;
