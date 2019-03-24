import styled from "styled-components";
import PageContainer from "./PageContainer";
import Button from "./Button";

const MoreInfoContainer = styled.section`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};

  .PageContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: ${props => props.theme.fontSize4};
    line-height: ${props => props.theme.lineHeight4};
    font-weight: ${props => props.theme.fontRegular};
    letter-spacing: 0.2px;
    color: ${props => props.theme.white};
    max-width: 700px;
    margin-top: ${props => props.theme.spacing4};
    margin-bottom: ${props => props.theme.spacing4};
  }
  button {
    margin-left: ${props => props.theme.spacing4};
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;

    p {
      margin-top: ${props => props.theme.spacing5};
      margin-bottom: ${props => props.theme.spacing5};
    }

    button {
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: ${props => props.theme.spacing5};
    }
  }
`;

const MoreInfoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MoreInfo = () => (
  <MoreInfoContainer>
    <PageContainer>
      <MoreInfoFlex>
        <p>
          Nam elementum rutrum ipsum sit amet luctus. Sed libero turpis,
          eleifend in quam sed, vestibulum vulputate ante.
        </p>
        <Button>More info</Button>
      </MoreInfoFlex>
    </PageContainer>
  </MoreInfoContainer>
);

export default MoreInfo;
