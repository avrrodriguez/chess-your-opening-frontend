import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        if (response.data.admin) {
          localStorage.setItem("user_admin", response.data.admin);
        }
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-content-center align-self-center flex-wrap"
      id="login"
      style={{ height: "90vh" }}
    >
      <div style={{ backgroundColor: "#C8A2C8", height: "200px", width: "290px" }}>
        <h1 className="d-flex justify-content-center">Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="m-1">
            Email: <input name="email" type="email" />
          </div>
          <div className="m-1">
            Password: <input name="password" type="password" />
          </div>
          <button className="btn btn-secondary m-1" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
