import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        userId
          ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
          : `https://jsonplaceholder.typicode.com/posts`
      );
      //console.log(" get user in function");
      //console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    //console.log("in useEffect");
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <PostCard data={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
