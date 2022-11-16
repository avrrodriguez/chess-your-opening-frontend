import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      class="d-flex justify-content-center align-content-center align-self-center flex-wrap"
      id="Signup"
      style={{ height: "90vh" }}
    >
      <div style={{ backgroundColor: "#C8A2C8", height: "200px", width: "290px" }}>
        <h1 className="d-flex justify-content-center mt-1">Signup</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
              Email
            </label>
            <input name="email" type="email" />
          </div>
          <div>
            <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
              Password
            </label>
            <input name="password" type="password" />
          </div>

          <button className="btn btn-secondary m-1" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
