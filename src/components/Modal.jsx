const Modal = ({ handleReset, isOver }) => {
  {
    if (isOver) {
      return (
        <div id="gameover-modal">
          <div id="modal-container">
            <h2 id="gameover-text">GAME OVER!</h2>
            <button id="gameover-button" onClick={() => handleReset()}>
              Play Again
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Modal;
