import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import './Modal.css'

const StatScreen = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };


  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">RULES</h2>
            <button onClick={props.onClose} className="button modal-button">
              <span className="close-button">x</span>
              
            </button>
          </div>
          <div className="modal-body">
            <p>1. Use the quote and the blurry album cover to figure out the name of the Taylor Swift song<br/>
            2. Use the search bar to guess the song <br />
            3. You have 1 try to guess the song title<br />
            5. Have fun! <br />
            <u>Album Border Key</u><br />
            Red: Wrong<br />
            Green: Correct<br />
            Gray: Waiting
            <br />
            <br/>
            Special thanks to <a href="https://github.com/MitanshiKshatriya/taylor-swift-api">MitanshiKshatriya</a> for the quotes</p>
            </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default StatScreen;