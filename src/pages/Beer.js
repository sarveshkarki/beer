import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import { fetchBeers } from "../api";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MyBeer from "../components/MyBeer";
import { Spinner } from "react-bootstrap";

function Beer() {
  const [beerData, setBeerData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchBeers(page);
        setLoading(false);
        if (page === 1) {
          setBeerData(data);
        } else {
          setBeerData((prev) => [...prev, ...data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      <Tabs
        defaultActiveKey="beers"
        id="uncontrolled-tab-example"
        className="mt-5 mb-3"
      >
        <Tab eventKey="beers" title="Beers">
          <div>
            <div className="row">
              {beerData &&
                beerData.map((beer, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-12"
                  >
                    <BeerCard
                      name={beer.name}
                      image={beer.image_url}
                      tag={beer.tagline}
                      desc={beer.description}
                      ingredients={beer.ingredients || ""}
                    />
                  </div>
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setPage(page + 1)}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </Tab>
        <Tab eventKey="my-beers" title="My Beers">
          <MyBeer />
        </Tab>
      </Tabs>
    </>
  );
}

export default Beer;
