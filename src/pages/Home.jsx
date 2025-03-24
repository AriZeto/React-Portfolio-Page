import About from "/src/pages/About.jsx";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import styled from "@emotion/styled";
import LeftRight from "../components/LeftRight";

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex: 1;
  @media (min-width: 800px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1200px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px); /* Cool effect */
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s; /* Animation effects */
  animation: fadeIn 1s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    background-color: rgba(255, 255, 255, 0.4); /* Less transparent on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow effect */
  animation: slideIn 1s; /* Slide-in animation */

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default function Home() {
  return (
    <Homepage>
      <Section>
        <Heading>About Me</Heading>
        <About />
      </Section>
      <Section>
        <Heading>Highlights</Heading>
        <LeftRight />
      </Section>
      <Section>
        <Heading>Skills</Heading>
        <Skills />
      </Section>
      <Section>
        <Heading>Portfolio</Heading>
        <Portfolio />
      </Section>
    </Homepage>
  );
}
