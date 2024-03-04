import PDF from "../components/PDF";
import Resume from "/src/assets/Ariel_Zeto_Resume.pdf";
import styled from "@emotion/styled";

const StyleResume = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: center;
  height: 500px;
  width: 100%;

  @media (min-width: 587px) {
    display: flex;
    margin-left: 10%;
    height: 100vh;
    width: 80%;
  }
`;

export default function Contact() {
  return (
    <>
      <StyleResume>
        <PDF file={Resume} height="1600px" width="100%" />
      </StyleResume>
    </>
  );
}
