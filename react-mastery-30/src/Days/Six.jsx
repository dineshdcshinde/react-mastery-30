import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products/7")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <strong>Loading...</strong>;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="container w-[300px] h-[390px] rounded-md shadow-lg bg-[#333] p-4 flex flex-col items-center justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="h-[10vh] w-[30vh] object-cover mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-lg mb-2">{data.description}</p>
        <p className="text-xl font-bold">${data.price}</p>
      </div>
    </div>
  );
};

export default Six;
