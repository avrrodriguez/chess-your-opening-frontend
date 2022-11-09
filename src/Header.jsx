import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Studies">Studies</Link>
        <Link to="/Login">Login</Link>
        <Link to="/SignUp">SignUp</Link>
      </nav>
    </header>
  );
}
