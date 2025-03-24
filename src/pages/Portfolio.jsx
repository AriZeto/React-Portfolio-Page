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
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  padding: 1rem;
  margin: 1rem;
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

  h3 {
    color: #fff; /* White text color */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow effect */
    animation: fadeIn 2s; /* Fade-in animation */
  }

  a {
    color: #3e9854;
    text-decoration: none;
    transition: color 0.3s; /* Animation effect */

    &:hover {
      color: #2e7d32; /* Darker green on hover */
      text-decoration: underline;
    }
  }

  @media (min-width: 587px) {
    max-width: 100%;
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

function Portfolio() {
  return (
    <>
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
