import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faNode,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import VSCodeSVG from "../assets/SVGs/Vscodesvg";
import MariaDBSvg from "../assets/SVGs/MariaDBSvg";
import MongoDBSvg from "../assets/SVGs/MongoDBSvg";
import ReduxSvg from "../assets/SVGs/ReduxSvg";
import ExpressSvg from "../assets/SVGs/ExpressSvg";
import EJSSvg from "../assets/SVGs/EJSSvg";
import JavaScriptSvg from "../assets/SVGs/JavaScriptSvg";
import TypeScriptSvg from "../assets/SVGs/TypeScriptSvg";
import PythonSvg from "../assets/SVGs/PythonSvg";
import ViteSvg from "../assets/SVGs/ViteSvg";
import PostmanSvg from "../assets/SVGs/PostmanSvg";

import styled from "@emotion/styled";

const SurroundSVG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 10%;
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  backdrop-filter: blur(5px); /* Cool effect */
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s; /* Animation effects */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    background-color: rgba(255, 255, 255, 0.4); /* Less transparent on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    animation: pulse 1s infinite; /* Pulse animation */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  svg {
    font-size: 5rem;
    transition: transform 0.3s; /* Animation effect */
    &:hover {
      transform: rotate(360deg); /* Rotate on hover */
    }
  }

  h4 {
    padding: 0;
    align-content: flex-end;
    color: #fff; /* White text color */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow effect */
  }
`;

const SkillsDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 587px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default function Skills() {
  return (
    <>
      <h3>Languages: </h3>
      <SkillsDisplay>
        <SurroundSVG>
          <TypeScriptSvg />
          <h4>TypeScript</h4>
        </SurroundSVG>
        <SurroundSVG>
          <JavaScriptSvg />
          <h4>JavaScript</h4>
        </SurroundSVG>
        <SurroundSVG>
          <PythonSvg />
          <h4>Python</h4>
        </SurroundSVG>
        <SurroundSVG>
          <MariaDBSvg />
          <h4>MariaDB</h4>
        </SurroundSVG>
        <SurroundSVG>
          <MongoDBSvg />
          <h4>MongoDB</h4>
        </SurroundSVG>
        <SurroundSVG>
          <FontAwesomeIcon icon={faHtml5} />
          <h4>HTML</h4>
        </SurroundSVG>
        <SurroundSVG>
          <FontAwesomeIcon icon={faCss3Alt} />
          <h4>CSS</h4>
        </SurroundSVG>
      </SkillsDisplay>

      <h3>Libraries/Frameworks: </h3>
      <SkillsDisplay>
        <SurroundSVG>
          <FontAwesomeIcon icon={faReact} />
          <h4>React.js</h4>
        </SurroundSVG>
        {/* <SurroundSVG>
          <Nextjsvg />
          <h4>Next.js</h4>
        </SurroundSVG> */}
        <SurroundSVG>
          <ReduxSvg />
          <h4>Redux.js</h4>
        </SurroundSVG>
        <SurroundSVG>
          <FontAwesomeIcon icon={faNode} />
          <h4>Node.js</h4>
        </SurroundSVG>
        <SurroundSVG>
          <ExpressSvg />
          <h4>Express.js</h4>
        </SurroundSVG>
        <SurroundSVG>
          <EJSSvg />
          <h4>EJS</h4>
        </SurroundSVG>
        <SurroundSVG>
          <FontAwesomeIcon icon={faBootstrap} />
          <h4>Bootstrap</h4>
        </SurroundSVG>
      </SkillsDisplay>

      <h3>Developer Tools: </h3>
      <SkillsDisplay>
        <SurroundSVG>
          <FontAwesomeIcon icon={faGithub} />
          <h4>Git</h4>
        </SurroundSVG>
        <SurroundSVG>
          <ViteSvg />
          <h4>Vite</h4>
        </SurroundSVG>
        <SurroundSVG>
          <VSCodeSVG />
          <h4>VS Code</h4>
        </SurroundSVG>
        <SurroundSVG>
          <PostmanSvg />
          <h4>Postman</h4>
        </SurroundSVG>
      </SkillsDisplay>
    </>
  );
}
