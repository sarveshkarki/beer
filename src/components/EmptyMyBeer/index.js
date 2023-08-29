import React, { useState } from "react";
import "./emptyMyBeer.css";
import FormModal from "../Modal";

const EmptyMyBeer = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="emptyBeer">
        <p>
          Nothing to see yet.
          <br />
          <span onClick={() => setModalShow(true)}>Click here</span> to add your
          first beer!
        </p>
      </div>
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default EmptyMyBeer;
