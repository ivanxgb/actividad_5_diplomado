import React from "react";

const Item = ({ client, remove }) => {
  const handleClick = (e) => {
    remove(client);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p className="m-0 align-middle">{`${client.name} ${client.lastname}`}</p>
      <span
        className="btn btn-danger"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        {"\u00D7"}
      </span>
    </li>
  );
};

export default Item;
