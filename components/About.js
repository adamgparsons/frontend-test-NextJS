import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: ${props => props.theme.widthTwoThirds};
  margin-left: ${props => props.theme.spacing5};
  margin-right: ${props => props.theme.spacing5};

  @media ${props => props.theme.breakpointMedium} {
    margin-left: ${props => props.theme.spacing3};
    margin-right: ${props => props.theme.spacin3};
  }
  @media ${props => props.theme.breakpointSmall} {
    max-width: 100%;
  }

  h3 {
    font-size: ${props => props.theme.fontSize3};
    line-height: ${props => props.theme.lineHeight5};
    font-weight: ${props => props.theme.fontRegular};
    letter-spacing: -0.03px;
    color: ${props => props.theme.midGrey};
    margin-bottom: ${props => props.theme.spacing2};
  }
`;

const About = () => (
  <AboutContainer>
    <h3>Ut sit amet scelerisque ex, sit amet mattis sapien</h3>
    <p>
      Mauris eu finibus diam. Quisque accumsan aliquet dictum. Aenean interdum
      tortor vitae elit elementum, et interdum tortor imperdiet. Duis sed justo
      ultrices, aliquam nisi sit amet, interdum justo.
    </p>
    <p>
      Mauris eu finibus diam. Quisque accumsan aliquet dictum. Aenean interdum
      tortor vitae elit elementum, et interdum tortor imperdiet. Duis sed justo
      ultrices, aliquam nisi sit amet, interdum justo.
    </p>
    <h3>
      Ut sit amet scelerisque ex, sit amet mattis sapien. Proin convallis libero
      porta, mattis quam vitae
    </h3>
    <p>
      Pellentesque porttitor urna a nisi sodales, ac condimentum mauris auctor.
      In efficitur velit ut eros porttitor eleifend. In tempor diam at urna
      finibus, vitae lobortis sem tincidunt. Donec ac elementum orci.
    </p>
  </AboutContainer>
);

export default About;
