import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarUL = styled.ul`
  display: flex;
  flex-direction: column;

  background-color: #080808;
  padding: 1rem;
  margin-top: 0;

  @media (min-width: 587px) {
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 70px;
    margin: 2rem;
  }
`;

const NavbarLi = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0.5rem;
  font-size: 1.2rem;
  justify-content: center;
  font-weight: 400;

  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #5b0888;
    }
  }
  a.active {
    color: #65d180;
  }
`;

const MobileNavToggle = styled.button`
  color: white;
  align-items: end;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  :hover {
    color: #65d180;
    cursor: pointer;
  }
  :active {
    color: #65d180;
  }
`;

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [, setMobileNav] = useState(false);
  const switchOn = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    const screen = window.matchMedia("(min-width: 655px)");
    const handleScreenChange = (e) => {
      setMobileNav(e.matches);
    };

    screen.addEventListener("change", handleScreenChange);
    setMobileNav(screen.matches);

    return () => {
      screen.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <NavbarUL>
      {window.innerWidth <= 655 && toggle === false ? (
        <>
          <NavbarLi>
            <MobileNavToggle onClick={switchOn}>
              <FontAwesomeIcon icon={faBars} />
            </MobileNavToggle>
          </NavbarLi>
        </>
      ) : (
        <>
          {window.innerWidth <= 655 ? (
            <>
              <NavbarLi>
                <MobileNavToggle onClick={switchOn}>
                  <FontAwesomeIcon icon={faBars} />
                </MobileNavToggle>
              </NavbarLi>

              <NavbarLi>
                <NavLink to="/">Home</NavLink>
              </NavbarLi>
              <NavbarLi>
                <NavLink to="/contact-resume">Contact & Resume</NavLink>
              </NavbarLi>
            </>
          ) : (
            <>
              <NavbarLi>
                <NavLink to="/">Home</NavLink>
              </NavbarLi>
              <NavbarLi>
                <NavLink to="contact-resume">Contact & Resume</NavLink>
              </NavbarLi>
            </>
          )}
        </>
      )}
    </NavbarUL>
  );
}
