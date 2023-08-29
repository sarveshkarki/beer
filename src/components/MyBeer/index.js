import React, { useEffect, useState } from "react";
import BeerCard from "../BeerCard";
import myBeerImg from "../../assets/images/myBeer.png";
import { Button } from "react-bootstrap";
import FormModal from "../Modal";
import EmptyMyBeer from "../EmptyMyBeer";
import { fetchBeersFromLS } from "../../api";

const MyBeer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchedBeers = fetchBeersFromLS();
    setBeers(fetchedBeers);
  }, []);

  const updateBeerList = (newBeer) => {
    setBeers([...beers, newBeer]);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end">
        <Button onClick={() => setModalShow(true)}>Add Beer</Button>
      </div>
      <FormModal
        show={modalShow}
        updateBeerList={updateBeerList}
        onHide={() => setModalShow(false)}
      />

      {beers.length ? (
        <div className="row">
          {beers.map((beer, index) => (
            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-12">
              <BeerCard
                name={beer.beerName}
                tag={beer.beerTag}
                desc={beer.beerDesc}
                image={myBeerImg}
                ingredients={beer.ingredients || ""}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <EmptyMyBeer />
        </>
      )}
    </>
  );
};

export default MyBeer;
