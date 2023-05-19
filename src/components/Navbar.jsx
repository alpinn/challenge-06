import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { id: 1, name: "Our Services", link: "ourservices" },
    { id: 2, name: "Why Us", link: "whyus" },
    { id: 3, name: "Testimonial", link: "testimonial" },
    { id: 4, name: "FAQ", link: "faq" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top wrapper">
      <div className="container-fluid">
        <Link
          className="logo"
          to="/"
          aria-label="Binar Car Rental"
        ></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" id="navbarScroll">
          <div className="offcanvas-header">
            <a
              className="offcanvas-title nav-link fw-bold text-black"
              id="offcanvasLabel"
              href="#"
            >
              BCR
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              {navItems.map((item, index) => (
                <li className="nav-item pointer" key={index}>
                  <ScrollLink
                    to={item.link}
                    className="nav-link pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <li className="nav-item">
                <button type="button" className="btn-register">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
