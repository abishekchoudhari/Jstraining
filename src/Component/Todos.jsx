import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        userId
          ? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
          : `https://jsonplaceholder.typicode.com/todos`
      );

      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <h1>Todos</h1>
      <div className="row">
        {todos.map((todo) => {
          return (
            <div className="col-4 mb-3">
              <div className="card" key={todo.id}>
                <div className="card-body">
                  <h1 className="card-title">Title: {todo.title}</h1>
                  <h3 className="card-title">
                    Completed: {todo.completed.toString()}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
