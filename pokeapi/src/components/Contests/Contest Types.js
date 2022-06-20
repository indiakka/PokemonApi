
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Contest = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {
    name,
    berry_flavor,
    names
  } = fetchedData;

  let api = `https://pokeapi.co/api/v2/contest-type/${id}`;

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
            <span className="fw-bold">berry_flavor : </span>
            {berry_flavor}
          </div>
          <div className="">
            <span className="fw-bold">names: </span>
            {names}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
