import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Berries = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {
    name,
    growth_time,
    max_harvest,
    natural_gift_power,
    size,
    smoothness,
    soil_dryness,
    firmness,
    flavors,
    item,
    natural_gift_type,
  } = fetchedData;

  let api = `https://pokeapi.co/api/v2/berry/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} alt="" />
        <div className="content">
          <div className="">
            <span className="fw-bold">growth_time : </span>
            {growth_time}
          </div>
          <div className="">
            <span className="fw-bold">max_harvest: </span>
            {max_harvest}
          </div>
          <div className="">
            <span className="fw-bold">natural_gift_power: </span>
            {natural_gift_power}
          </div>
          <div className="">
            <span className="fw-bold">size: </span>
            {size}
            <div className="">
              <span className="fw-bold">smoothness: </span>
              {smoothness}
            </div>
            <div className="">
              <span className="fw-bold">soil_dryness: </span>
              {soil_dryness}
            </div>
            <div className="">
              <span className="fw-bold">firmness: </span>
              {firmness}
              <div className="">
                <span className="fw-bold">flavors: </span>
                {flavors}
              </div>
              <div className="">
                <span className="fw-bold">item: </span>
                {item}
                <div className="">
                  <span className="fw-bold">natural_gift_type: </span>
                  {natural_gift_type}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berries;
