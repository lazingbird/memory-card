const Modal = ({ handleReset, isOver, modalText }) => {
  {
    if (isOver) {
      return (
        <div id="gameover-modal">
          <div id="modal-container">
            <h2 id="gameover-text">{modalText[0]}</h2>
            <button id="gameover-button" onClick={() => handleReset()}>
              {modalText[1]}
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Modal;
