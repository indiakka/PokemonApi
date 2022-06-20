import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {
    Berries,
    Contests,
    Encounters,
    Evolution,
    Games,
    Items,
    Locations,
    Machines,
    Moves,
    Pokémon,
  } = fetchedData;

  let api = `https://pokeapi.co/api/v2/${id}`;

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
            <span className="fw-bold">Berries : </span>
            {Berries}
          </div>
          <div className="">
            <span className="fw-bold">Contest: </span>
            {Contests}
          </div>
          <div className="">
            <span className="fw-bold">Encounters: </span>
            {Encounters}
          </div>
          <div className="">
            <span className="fw-bold">Evolution: </span>
            {Evolution}
            <div className="">
              <span className="fw-bold">Games: </span>
              {Games}
            </div>
            <span className="fw-bold">Items: </span>
            {Items}
            <div className="">
              <span className="fw-bold">Locations: </span>
              {Locations}
            </div>
            <div className="">
              <span className="fw-bold">Machines: </span>
              {Machines}
              <div className="">
                <span className="fw-bold">Moves: </span>
                {Moves}
              </div>
              <span className="fw-bold">Pokemon: </span>
              {Pokémon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
