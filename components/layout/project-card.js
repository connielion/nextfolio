import styled from "styled-components";
import Image from "next/image";
import BorderButton from "./border-button";
import widths from "../../styling/device-sizes";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${widths.laptop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: no-wrap;
    width: 100%;
    margin: 0 auto;
    padding: 0 6rem;
  }
`;

const TextSection = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem;
  @media (min-width: ${widths.tab}) {
    width: 60%;
    font-size: 1.2rem;
  }
  @media (min-width: ${widths.laptop}) {
    width: 40%;
    font-size: 1.2rem;
    padding-left: 5rem;
  }
`;

const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: ${widths.desktop}) {
    font-size: 2.5rem;
  }
`;
const ImgContainer = styled.div`
  min-width: 100%;
  padding: 1rem;

  @media (min-width: ${widths.tab}) {
    min-width: 70%;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
  }
  @media (min-width: ${widths.laptop}) {
    min-width: 50%;
    margin: 0 auto;
    position: relative;
  }
`;
const Buttons = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  @media (min-width: ${widths.tab}) {
    justify-content: flex-start;
    width: 40%;
    margin: 0;
    padding: 0;
  }
`;

const ProjectCard = ({ title, info, info2, img, repo, url }) => {
  return (
    <Container>
      <TextSection>
        <Title>{title}</Title>
        <p>{info}</p>
        <br />
        <p>{info2}</p>
        <Buttons>
          {repo.length > 0 ? (
            <BorderButton>
              <a href={repo ? repo : "#"}>Source Code</a>
            </BorderButton>
          ) : (
            <></>
          )}
          {url.length > 0 ? (
            <BorderButton>
              <a href={url}>View Live</a>
            </BorderButton>
          ) : (
            <BorderButton>Coming soon</BorderButton>
          )}
        </Buttons>
      </TextSection>
      <ImgContainer>
        <Image
          src={img}
          alt={`screenshot of ${title}`}
          layout={"responsive"}
          height={300}
          width={480}
        />
      </ImgContainer>
    </Container>
  );
};

export default ProjectCard;
