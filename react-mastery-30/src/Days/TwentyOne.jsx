import { useState } from "react";

const TwentyOne = () => {
  const users = {
    Nagesh: {
      name: "Nagesh",
      email: "nagesh@gmail.com",
    },
    Umesh: {
      name: "Umesh",
      email: "umesh@gmail.com",
    },
  };

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    const selectedUser = users[e.target.value];
    selectedUser
      ? setFormData(selectedUser)
      : setFormData({
          email: "",
          name: "",
        });
  };

  return (
    <div>
      <h3>AutoPopulate Field</h3>

      <form onSubmit={(e) => e.preventDefault()} style={{ color: "black" }}>
        <select name="" id="" onChange={handleChange}>
          <option value="">Select User</option>
          <option value="Umesh">Umesh</option>
          <option value="Nagesh">Nagesh</option>
        </select>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          id="email"
          value={formData.email}
          placeholder="email@gmail.com"
        />
        <br /> <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="john"
          value={formData.name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TwentyOne;
