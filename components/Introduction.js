import styled from "styled-components";
import PageContainer from "./PageContainer";
import Grid from "./Grid";
import Testimonial from "./Testimonial";
import About from "./About";

const IntroductionContainer = styled.section`
  h2 {
    font-size: ${props => props.theme.fontSize2};
    line-height: ${props => props.theme.lineHeight6};
    font-weight: ${props => props.theme.fontRegular};
    letter-spacing: -1px;
    text-align: center;
    color: ${props => props.theme.darkGrey};
    max-width: 656px;
    margin: ${props => props.theme.spacing7} auto;
  }

  @media ${props => props.theme.breakpointSmall} {
    h2 {
      margin-bottom: ${props => props.theme.spacing5};
      text-align: left;
      margin-left: ${props => props.theme.spacing3};
      margin-right: ${props => props.theme.spacing3};
    }
  }
`;

const Introduction = () => (
  <IntroductionContainer>
    <PageContainer>
      <h2>
        Etiam nisl dui, ultricies quis turpis quis, dapibus finibus tortor
      </h2>
      <Grid>
        <Testimonial />
        <About />
      </Grid>
    </PageContainer>
  </IntroductionContainer>
);

export default Introduction;
