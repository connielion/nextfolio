import styled from "styled-components";
import Link from "next/link";
import widths from "../../styling/device-sizes";
import pages from "../../util/navLinks";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  @media (min-width: ${widths.mobileL}) {
    height: 30vh;
    padding-top: 0.8rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80vw;
  margin: 0 auto;
  @media (min-width: ${widths.laptop}) {
    width: 50vw;
  }
`;

const MenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4rem;
  text-decoration: none;
  color: inherit;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
  margin-left: 4px;
  margin-right: 4px;
  :hover {
    color: #ddd;
  }
  @media ${widths.desktop} {
    font-size: 1.25rem;
  }
`;

const Footer = () => {
  const router = useRouter(); // for conditional rendering of nav links

  return (
    <Container>
      <Menu>
        {/* bottom links */}
        <LinksWrapper>
          {pages?.map((item, i) => {
            return router.route === item.path ? null : (
              <MenuLink key={i}>
                <Link href={item.path}>{item.text}</Link>
              </MenuLink>
            );
          })}
          <MenuLink>
            <a href="https://github.com/connielion" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </MenuLink>
          <MenuLink>
            <a
              href="https://www.linkedin.com/in/connielion/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </MenuLink>
          <MenuLink>
            <a
              href="https://www.twitter.com/connielion011/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </MenuLink>
        </LinksWrapper>
      </Menu>
      <p>© 2022 - Connie Lai</p>
    </Container>
  );
};
export default Footer;
