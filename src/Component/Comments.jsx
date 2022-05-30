import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        postId
          ? `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
          : `https://jsonplaceholder.typicode.com/comments`
      );

      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <h1>Comments</h1>
      <div className="row">
        {comments.map((comment) => {
          return (
            <div className="col-4 mb-3">
              <div className="card" key={comment.id}>
                <div className="card-body">
                  <h1 className="card-title">Name: {comment.name}</h1>
                  <h3 className="card-title">Email: {comment.email}</h3>
                  <h5 className="card-title">Msg: {comment.body}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
