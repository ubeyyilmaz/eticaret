import React from "react";
import "./ModalDialog.css";

const ModalDialog = ({ isDialogShow, setIsDialogShow }) => {

    const handleCloseDialog = (event) => {
        const checked = event.target.checked;
        localStorage.setItem("dialog", JSON.stringify(!checked))
       
    }

  return (
    <div>
      <div className={`modal-dialog ${isDialogShow ? "show" : " "} `}>
        <div className="modal-content">
          <button className="modal-close">
            <i className="bi bi-x" onClick={() => setIsDialogShow(false)}></i>
          </button>
          <div className="modal-image">
            <img src="/img/modal-dialog.jpg" alt="" />
          </div>
          <div className="popup-wrapper">
            <div className="popup-content">
              <div className="popup-title">
                <h3>NEWSLETTER</h3>
              </div>
              <p className="popup-text">
                Sign up to our newsletter and get exclusive deals you won find
                any where else straight to your inbox!
              </p>
              <form className="popup-form">
                <input type="text" placeholder="Enter Email Address Here" />
                <button className="btn btn-primary">SUBSCRIBE</button>
                <label>
                  <input type="checkbox"  onChange={handleCloseDialog} />
                  <span>Don't show this popup again</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-overlay" onClick={() => setIsDialogShow(false)} ></div>
      </div>
    
    </div>
  );
};

export default ModalDialog;
