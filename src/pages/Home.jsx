import About from "/src/pages/About.jsx";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import styled from "@emotion/styled";

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

export default function Home() {
  return (
    <>
      <Homepage>
        <About />
        <Skills />
        <Portfolio />
      </Homepage>
    </>
  );
}
