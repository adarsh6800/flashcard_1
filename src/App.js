import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Share from "./Share";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <Button variant="danger" onClick={() => setModalShow(true)}>
        <span> Share </span>
      </Button>

      <div>This is oshan Commit</div>
      <div>This is second change</div>
      <Share show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
