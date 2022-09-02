import React, { useState } from "react";

const Form = ({ sendData }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData({ name, lastname });
    setName("");
    setLastname("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Type name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Ivan"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type lastname</label>
        <input
          className="form-control"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Gonzalez"
          value={lastname}
          onChange={({ target }) => setLastname(target.value)}
          required
        />
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
