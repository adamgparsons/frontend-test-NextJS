import styled from "styled-components";

const HeroLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: ${props => props.theme.fontSize1};
    line-height: ${props => props.theme.lineHeight7};
    font-weight: ${props => props.theme.fontBold};
    text-transform: uppercase;
    letter-spacing: 6px;
    color: ${props => props.theme.white};
    margin: 0;
    padding-left: ${props => props.theme.spacing2};
  }

  @media screen and (max-width: 550px) {
    svg {
      width: 52px;
    }
    h1 {
      font-size: ${props => props.theme.fontSize2};
      padding-left: ${props => props.theme.spacing1};
    }
  }
`;

const HeroLogo = () => (
  <HeroLogoContainer>
    <svg
      title="Basement logo"
      width="83"
      height="99"
      viewBox="0 0 83 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.1622 42.8957L82.1859 40.9593L41.4929 0.0732727L0.859131 40.8999L0.999047 57.2814L0.979341 58.1041L41.6585 98.9762L82.2923 58.1496L82.1622 42.8957ZM5.68131 42.8819L41.4929 6.9013L76.3537 41.9275L41.56 76.8864L41.4969 76.823L22.1195 57.1547L26.2372 53.0185L41.4969 68.3259L67.8602 41.9275L67.8129 41.879L41.8319 15.7757L41.4939 15.4351H41.4929L5.75324 51.3444L5.68131 42.8819ZM41.6585 92.1482L6.79867 57.123L41.5925 22.1631L41.6555 22.2265L61.0329 41.8948L56.9153 46.0311L41.6555 30.7237L15.2922 57.123L15.3395 57.1705L41.3205 83.2749L41.6585 83.6144L77.3982 47.7051L77.4701 56.1667L41.6585 92.1482Z"
        fill="#FF5E1B"
      />
    </svg>
    <h1>Basement</h1>
  </HeroLogoContainer>
);

export default HeroLogo;
