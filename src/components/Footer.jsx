import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const FooterUl = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #080808;
  padding: 1rem;
  @media (min-width: 587px) {
    flex-direction: row;
    justify-content: center;
    border-radius: 70px;
    margin: 2rem;
  }
`;

const FooterLi = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  font-weight: 400;
  color: white;
  a {
    color: #65d180;
  }
  justify-content: center;
  align-items: center;
`;

const SVGIcons = styled.svg`
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 3rem;
`;

export default function Footer() {
  return (
    <FooterUl>
      <FooterLi>&copy; 2024 Ariel Zeto.</FooterLi>
      <FooterLi>
        <SVGIcons>
          <Link to="https://www.linkedin.com/in/ariel-zeto/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </SVGIcons>
      </FooterLi>
      <FooterLi>
        <SVGIcons>
          <Link to="https://github.com/AriZeto">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Link>
        </SVGIcons>
      </FooterLi>
    </FooterUl>
  );
}
