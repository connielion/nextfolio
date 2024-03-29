import styled from "styled-components";
import { date } from "../../util/date";
import { NextSeo } from "next-seo";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: "Ubuntu", serif;
  font-weight: bold;
`;

const Content = styled.div`
  font-family: "Lato", sans-serif;
`;

const PostLayout = ({ children, title = "A post from Connie's Tech Blog" }) => {
  return (
    <Container>
      <Title>Post Title here: {title}</Title>
      <p>Date: {date}</p>
      <Content>{children}</Content>
    </Container>
  );
};

export default PostLayout;
