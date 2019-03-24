import styled from "styled-components";

const TestimonialContainer = styled.div`
  background-color: ${props => props.theme.paleGrey};
  padding: ${props => props.theme.spacing5};
  margin-left: ${props => props.theme.spacing5};
  margin-right: ${props => props.theme.spacing5};
  max-width: ${props => props.theme.widthThird};
  align-self: flex-start;

  @media ${props => props.theme.breakpointMedium} {
    margin-left: ${props => props.theme.spacing3};
    margin-right: ${props => props.theme.spacing3};
  }

  @media ${props => props.theme.breakpointSmall} {
    max-width: 100%;
    margin-top: ${props => props.theme.spacing3};
    padding: ${props => props.theme.spacing4};
  }

  h3 {
    font-size: ${props => props.theme.fontSize3};
    line-height: ${props => props.theme.lineHeight5};
    font-weight: ${props => props.theme.fontRegular};
    letter-spacing: -0.03px;
    color: ${props => props.theme.midGrey};
    margin-bottom: ${props => props.theme.spacing2};
  }
  p {
    font-size: ${props => props.theme.fontSize5};
    line-height: ${props => props.theme.lineHeight2};
    font-weight: ${props => props.theme.fontRegular};
    letter-spacing: 0.2px;
  }

  p:first-of-type {
    margin-bottom: ${props => props.theme.spacing5};
  }

  span {
    color: ${props => props.theme.midGrey};
  }
`;

const Testimonial = () => (
  <TestimonialContainer>
    <h3>Fantastic service, I’m exited!</h3>
    <p>
      Pellentesque porttitor urna a nisi sodales, ac condimentum mauris auctor.
      In efficitur velit ut eros porttitor eleifend. In tempor diam at urna
      finibus, vitae lobortis sem tincidunt.{" "}
    </p>
    <span>James Counter</span>
    <p>Citizens Advice Lead Front End UX Developer</p>
  </TestimonialContainer>
);

export default Testimonial;
