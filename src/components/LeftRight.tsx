import React from "react";
import styled from "@emotion/styled";
import wafer from "../assets/wafer.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(240, 240, 240, 0.4); /* More transparent background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* Cool effect */
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s; /* Animation effects */

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    background-color: rgba(240, 240, 240, 0.8); /* Less transparent on hover */
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
`;

const RightColumn = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s; /* Animation effect */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  animation: fadeIn 2s; /* Fade-in animation */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  animation: slideIn 1s; /* Slide-in animation */

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1);
    }
  }
`;

export default function LeftRight() {
  return (
    <Container>
      <LeftColumn>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I'm a passionate developer with a love for creating beautiful and
          functional web applications. I enjoy learning new technologies and
          improving my skills.
        </Paragraph>
      </LeftColumn>
      <RightColumn>
        <Image src={wafer} alt="Wafer" />
      </RightColumn>
    </Container>
  );
}
