import React from "react";

const PostCard = ({ data }) => {
  console.log(data);
  return (
    <div className="col-4 mb-3">
      <div className="card" key={data.id}>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
