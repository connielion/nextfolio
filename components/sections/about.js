import styled from "styled-components";
import RoundImage from "../layout/RoundImage";
import Image from "next/image";
import SectionHeading from "../layout/section-heading";
import widths from "../../styling/device-sizes";
import aboutData from "../../data/aboutData";

const Wrapper = styled.section`
  background: linear-gradient(
      100deg,
      rgba(49, 53, 69, 0.6),
      rgba(73, 70, 99, 0.9)
    ),
    url("/images/hk.jpeg");
  background-position: center;
  background-size: cover;
  color: #eee;
  height: auto;
  padding-bottom: 3.5rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  width: 100%;
  @media (min-width: ${widths.laptop}) {
    padding: 1rem 2rem 10rem 2rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem 4rem 0.6rem;
  @media (min-width: ${widths.tab}) {
    flex-direction: row;
    margin: 0 auto;
    width: 90vw;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  padding: 0 0.8rem 0.2rem 0.8rem;
  @media (min-width: ${widths.laptop}) {
    padding: 0.5rem;
    margin: 0 2rem 2rem 2rem;
  }
`;

const Text = styled.div`
  font-size: 16px;
  padding-left: 1rem;
  @media (min-width: ${widths.tab}) {
    font-size: 1.2rem;
  }
  @media (min-width: ${widths.laptop}) {
    font-size: 1.25rem;
  }
`;
const AboutSection = () => {
  return (
    <Wrapper id="about-section">
      <SectionHeading>About Connie</SectionHeading>
      <Content>
        <ImageColumn>
          <RoundImage>
            <Image
              src="/images/dogs.jpeg"
              alt="me with a dog mask and a choco laborador named Hugo"
              layout="fill"
              priority
            />
          </RoundImage>
          <RoundImage>
            <Image
              src="/images/tiger-scratchboard.jpg"
              alt="scratchboard art of a tiger by me"
              layout="fill"
              priority
            />
          </RoundImage>
        </ImageColumn>
        <Text>
          <p> Dogfooding? ✅ </p>

          {aboutData ? (
            aboutData?.map((p, i) => {
              return <p key={i}>{p}</p>;
            })
          ) : (
            <>Loading...</>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default AboutSection;
