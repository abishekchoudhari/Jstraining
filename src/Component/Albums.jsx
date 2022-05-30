import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        userId
          ? `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
          : `https://jsonplaceholder.typicode.com/albums`
      );

      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <h1>Albums</h1>
      <div className="row">
        {albums.map((album) => {
          return (
            <div className="col-4 mb-3">
              <div className="card" key={album.id}>
                <div className="card-body">
                  <h1 className="card-title">Title: {album.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
