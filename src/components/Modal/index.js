import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import myBeerImg from "../../assets/images/myBeer.png";
import { fetchBeersFromLS } from "../../api";

const FormModal = (props) => {
  const [beers, setBeers] = useState(fetchBeersFromLS);

  const [beerName, setBeerName] = useState("");
  const [beerTag, setBeerTag] = useState("");
  const [beerDesc, setBeerDesc] = useState("");

  const handleSubmit = () => {
    let beer = {
      beerName,
      beerTag,
      beerDesc,
    };
    setBeers((prevBeers) => [...prevBeers, beer]);
    props.onHide();
  };

  useEffect(() => {
    localStorage.setItem("beers", JSON.stringify(beers));
  }, [beers]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Beer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="mb-4"
          alt="beer-img"
          src={myBeerImg}
          style={{
            width: "150px",
            border: "1px solid #eeee",
            borderRadius: "5px",
          }}
        />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicBeerName">
            <Form.Control
              type="text"
              placeholder="Beer Name*"
              onChange={(e) => setBeerName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGenre">
            <Form.Control
              type="text"
              placeholder="Genre*"
              onChange={(e) => setBeerTag(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Description*"
              rows={3}
              onChange={(e) => setBeerDesc(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
