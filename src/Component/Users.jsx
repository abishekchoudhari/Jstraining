import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(" get user in function");
      console.log(response);
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //componentdidmount
  useEffect(() => {
    getUser();
    console.log("in useEffect");
  }, []);

  //   componentdidupdate
  useEffect(() => {
    getSearchUser();
  }, [search]);

  const getSearchUser = () => {
    const data = users.filter((user) => {
      return user.username.toLowerCase().match(search.toLowerCase());
    });

    setFilteredUsers(data);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Posts</th>
            <th>Comments</th>
            <th>Albums</th>
            <th>Photos</th>
            <th>Todos</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(
            ({ id, name, username, email, website, phone }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{website}</td>
                  <td>{phone}</td>
                  <td>
                    <Link to={`/posts/${id}`}>Posts</Link>
                  </td>
                  <td>
                    <Link to={`/comments/${id}`}>Comments</Link>
                  </td>
                  <td>
                    <Link to={`/albums/${id}`}>Albums</Link>
                  </td>
                  <td>
                    <Link to={`/photos/${id}`}>Photos</Link>
                  </td>
                  <td>
                    <Link to={`/todos/${id}`}>Todos</Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
