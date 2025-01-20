import React from "react";

const Four = () => {
  const lists = ["item1", "item2", "item3", "item4"];
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <ul>
        {lists.map((list) => {
          return <li key={list}>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default Four;
