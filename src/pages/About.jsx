import styled from "@emotion/styled";

const SpecialSpan = styled.span`
  font-size: 2.5rem;
  background: -webkit-linear-gradient(#aa3fb6, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const PStyle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
`;

export default function About() {
  return (
    <>
      <p>
        <SpecialSpan>Hello, my name is Ariel Zeto.</SpecialSpan>
      </p>
      <PStyle>
        Recently graduated with a Bachelor of Science in Computer Science from
        Oregon State University, following the completion of a Bachelor of
        Science in Mathematics at Portland State University.
      </PStyle>
      <PStyle>
        I have a passion for data and creating wonderful user experiences, and
        am seeking Frontend roles to build impactful products.
      </PStyle>
    </>
  );
}
