import styled from "styled-components";

const ButtonPrimary = styled.button`
  padding: ${props => props.theme.spacing2} 56px;
  height: 46px;
  background-color: ${props => props.theme.white};
  border: 1px solid $white;
  border-radius: 40px;
  font-size: ${props => props.theme.fontSize6};
  font-weight: ${props => props.theme.fontBold};
  color: ${props => props.theme.midGrey};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 14px;
  @include transition;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.darkGrey};
    border-color: ${props => props.theme.darkGrey};
    color: ${props => props.theme.white};
  }
`;
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ButtonPrimary>{this.props.children}</ButtonPrimary>;
  }
}

export default Button;
