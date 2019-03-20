import TopNav from "../components/TopNav";
import HeroLogo from "./HeroLogo";

const Hero = () => (
  <section>
    <TopNav />
    <HeroLogo />

    <style jsx>
      {`
        section {
          background: radial-gradient(#585858, #333333);
          padding: 240px 0;
        }
        @media screen and (max-width: 550px) {
          section {
            padding: 200px;
          }
        }
      `}
    </style>
  </section>
);

export default Hero;
