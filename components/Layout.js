import Head from "next/head";
import Hero from "./Hero";
import styled from "styled-components";
import MoreInfo from "./MoreInfo";
import Introduction from "./Introduction";
import Footer from "./Footer";

const Body = styled.body`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
  font-family: "Open Sans", sans-serif;
  font-size: ${props => props.theme.fontSize4};
  line-height: ${props => props.theme.lineHeight3};
  font-weight: ${props => props.theme.fontRegular};
  letter-spacing: 0.3px;
  color: ${props => props.theme.lightGrey};
  margin: 0;
`;

const Layout = () => (
  <div>
    <Head>
      <title>This is a page title</title>
    </Head>

    <Body>
      <Hero />
      <MoreInfo />
      <Introduction />
      <Footer />
    </Body>
  </div>
);

export default Layout;
