import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  max-width: 500px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  padding-top: ${props => props.theme.spacing4};

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto;
    text-align: center;
    list-style-type: none;
  }
  a {
    color: ${props => props.theme.white};
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${props => props.theme.fontSize5};
    line-height: ${props => props.theme.lineHeight2};
    letter-spacing: 1.5px;
    color: ${props => props.theme.lightGrey};
    font-weight: ${props => props.theme.fontRegular};
  }
  a:hover {
    border-bottom: white 2px solid;
    padding-bottom: 1px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const TopNav = () => (
  <NavContainer>
    <ul>
      <li>
        <Link href="#">
          <a>Product</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </NavContainer>
);

export default TopNav;
