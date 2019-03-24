import TopNav from "../components/TopNav";
import HeroLogo from "./HeroLogo";
import styled from "styled-components";

const HeroContainer = styled.section`
  background: radial-gradient(#585858, #333333);
  padding: 240px 0;
  @media (max-width: 550px) {
          section {
            padding: 200px;
          };
`;

const Hero = () => (
  <HeroContainer>
    <TopNav />
    <HeroLogo />
  </HeroContainer>
);

export default Hero;
