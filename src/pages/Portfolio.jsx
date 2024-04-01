import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  @media (min-width: 587px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 1rem;
  margin: 1rem;
  a {
    color: #3e9854;
  }
  @media (min-width: 587px) {
    max-width: 100%;
  }
`;

function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <Container>
        <Card>
          <h3>YouTube Tidy</h3>
          <Link to="https://youtubetidy.netlify.app/">View Live Demo</Link>
          <Link to="https://github.com/AriZeto/youtube-tidy">
            View on GitHub
          </Link>
        </Card>
        <Card>
          <h3>React Weather App</h3>
          <Link to="https://zetoweather.netlify.app/">View Live Demo</Link>
          <Link to="https://github.com/AriZeto/React-Weather-App">
            View on GitHub
          </Link>
        </Card>
        <Card>
          <h3>Games Web App</h3>
          <Link to="https://intense-journey-49547-3965d03e6dee.herokuapp.com/">
            View Live Demo
          </Link>
          <Link to="https://github.com/AriZeto/Games-Web-App">
            View on GitHub
          </Link>
        </Card>
        <Card>
          <h3>Class Circles</h3>
          <Link to="https://github.com/AriZeto/ClassCircles">
            View on GitHub
          </Link>
        </Card>
        <Card>
          <h3>The Grand Auditorium</h3>
          <Link to="https://github.com/AriZeto/The-Grand-Auditorium">
            View on GitHub
          </Link>
        </Card>
      </Container>
    </>
  );
}

export default Portfolio;
