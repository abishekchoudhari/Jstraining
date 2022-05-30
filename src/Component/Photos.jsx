import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
  //const [photoData, setPhotoData] = useState([]);
  const [subData, setSubData] = useState([]);

  const { albumId } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        albumId
          ? `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
          : `https://jsonplaceholder.typicode.com/photos`
      );

      setSubData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Photos</h1>
      <div className="row">
        {subData.map((record) => {
          return (
            <div className="col-4 mb-3">
              <div className="card" key={record.id}>
                <img src={record.url} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{record.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
