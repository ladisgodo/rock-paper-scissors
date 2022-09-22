import React, { useState } from "react";
import Modal from "./Modal.jsx";

function Footer() {
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  return (
    <>
      <footer className="footer">
        <div className="atribution">Coded by Ladislao Godocik</div>
        <button className="rules" onClick={() =>toggle()}>Rules</button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
}

export default Footer;
