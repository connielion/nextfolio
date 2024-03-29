import styled from "styled-components";
import SectionHeading from "../layout/section-heading";
import { projects } from "../../data/projectsData";
import ProjectCard from "../layout/project-card";
import widths from "../../styling/device-sizes";
import Spinner from "../scroll-parallax";
const Wrapper = styled.section`
  min-height: 100vh;
  margin-top: -30rem;
  margin-bottom: -20rem;
  padding-top: 30rem;
  padding-bottom: 0.8rem;
  height: 100%;
  @media (min-width: ${widths.tab}) {
    margin-top: -30rem;
  }
  @media (min-width: ${widths.laptop}) {
    padding-bottom: 25rem;
  }
  @media (min-width: ${widths.desktop}) {
    padding-bottom: 30rem;
  }
`;
const ProjectsSection = () => {
  return (
    <Wrapper id="projects-section">
      <SectionHeading>Projects I contributed to...</SectionHeading>
      <Spinner />
      {projects?.map((project) => {
        const { id, img, title, info, info2, url, repo } = project;

        return (
          <ProjectCard
            key={id}
            img={img}
            title={title}
            info={info}
            info2={info2}
            url={url}
            repo={repo}
          />
        );
      })}
    </Wrapper>
  );
};
export default ProjectsSection;
