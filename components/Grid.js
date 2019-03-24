import styled from "styled-components";

const GridContainer = styled.div`
  margin-left: -${props => props.theme.spacing5};
  margin-right: -${props => props.theme.spacing5};
  margin-bottom: ${props => props.theme.spacing5};
  display: flex;

  @media ${props => props.theme.breakpointMedium} {
    margin-left: -${props => props.theme.spacing3};
    margin-right: -${props => props.theme.spacing3};
  }

  @media ${props => props.theme.breakpointSmall} {
    flex-direction: column-reverse;
    align-items: center;
    margin-left: -${props => props.theme.spacing3};
    margin-right: -${props => props.theme.spacing3};
  }
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <GridContainer>{this.props.children}</GridContainer>;
  }
}

export default Grid;
