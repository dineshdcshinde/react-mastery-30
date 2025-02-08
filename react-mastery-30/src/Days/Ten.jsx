import React, { useState } from "react";

const Ten = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log(file);
  return (
    <div>
      <input type="file" accept="file" onChange={handleFileChange} />

      {file && <img src={URL.createObjectURL(file)} alt="uploaded" />}
    </div>
  );
};

export default Ten;
