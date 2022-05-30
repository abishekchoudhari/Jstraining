import React, { useState } from "react";

const InputElements = () => {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <select className="form-control">
        <option value="" disabled>
          Select options
        </option>
        <option value="options 1" onChange={(e) => setName(e.target.value)}>
          options 1
        </option>
        <option value="options 2">options 2</option>
        <option value="options 3">options 3</option>
      </select>

      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setName(e.target.value)}
      >
        Male
      </input>
      <input
        type="radio"
        name="gender"
        value="Femle"
        onChange={(e) => setName(e.target.value)}
      >
        Female
      </input>

      <input
        type="checkbox"
        value={name}
        onChange={(e) => console.log(e.target.selected)}
      ></input>
    </div>
  );
};

export default InputElements;
