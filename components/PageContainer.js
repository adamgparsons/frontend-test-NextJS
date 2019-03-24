import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 ${props => props.theme.spacing2};

  @media #{$breakpoint-medium} {
    padding: 0 ${props => props.theme.spacing3};
  }
`;
class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default PageContainer;
