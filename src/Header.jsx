import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Chess Your Opening
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </a>
              </li>
              {localStorage.jwt !== undefined ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to="/Studies" style={{ textDecoration: "none" }}>
                        My Studies
                      </Link>
                    </a>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User Settings
                </a>
                <ul className="dropdown-menu">
                  {localStorage.jwt === undefined ? (
                    <>
                      <li>
                        <a className="dropdown-item" href="#">
                          <Link to="/Login" style={{ textDecoration: "none" }}>
                            Login
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <Link to="/SignUp" style={{ textDecoration: "none" }}>
                            SignUp
                          </Link>
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a className="dropdown-item" href="#">
                        <LogoutLink />
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
