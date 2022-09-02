import React from "react";
import Item from "../item/Item";

const List = ({ clients, remove }) => {
  return (
    <>
      <ul className="mt-3 list-group">
        {clients &&
          clients.map((client, index) => (
            <Item key={`${client} ${index}`} client={client} remove={remove} />
          ))}
      </ul>
    </>
  );
};

export default List;
