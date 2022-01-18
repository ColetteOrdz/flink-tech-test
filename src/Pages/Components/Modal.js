import React from "react";

const Modal = () => {
  return (
    <>
      <div className="modal-content">
        <div className="modal-headaer">
          <h2>Título</h2>
        </div>
        <div className="moda-body">Contenido</div>
        <div className="moda-footer">
          <button>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
