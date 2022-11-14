import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    if (localStorage.user_admin) {
      localStorage.removeItem("user_admin");
    }
    window.location.href = "/";
  };

  return (
    <a className="dropdown-item" href="#" onClick={handleClick} style={{ textDecoration: "none" }}>
      Logout
    </a>
  );
}
