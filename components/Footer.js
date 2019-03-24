import styled from "styled-components";
import PageContainer from "./PageContainer";
import LogoSmall from "./LogoSmall";

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: -${props => props.theme.spacing6};
  margin-right: -${props => props.theme.spacing6};
  padding: ${props => props.theme.spacing6} 0;

  @media screen and (max-width: 910px) {
    flex-wrap: wrap;
    margin-left: -${props => props.theme.spacing4};
    margin-right: -${props => props.theme.spacing4};
    padding-top: ${props => props.theme.spacing4};

    ul {
      padding-left: 0;
    }
  }

  ul {
    margin-top: 0;
    margin-left: ${props => props.theme.spacing6};
    margin-right: ${props => props.theme.spacing6};
    list-style-type: none;

    a {
      @include transition;
      text-decoration: none;
      color: ${props => props.theme.lightGrey};

      &:hover {
        color: ${props => props.theme.darkGrey};
      }
    }
  }

  .social-icons {
    margin-top: ${props => props.theme.spacing1};

    svg {
      padding-right: ${props => props.theme.spacing1};
    }
  }
  .footer-list-heading {
    font-size: ${props => props.theme.fontSize6};
    line-height: ${props => props.theme.lineHeight2};
    letter-spacing: 1px;
    color: ${props => props.theme.midGrey};
    text-transform: uppercase;
  }

  .footer-list-item {
    font-size: ${props => props.theme.fontSize6};
    line-height: ${props => props.theme.lineHeight2};
    letter-spacing: 1px;
    color: ${props => props.theme.lightGrey};
  }
`;

const Footer = () => (
  <PageContainer>
    <FooterContainer>
      <LogoSmall />
      <ul>
        <li>
          <a className="footer-list-heading" href="#">
            Product
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            Promo
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            Download
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a className="footer-list-heading" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            Find us
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            FAQ
          </a>
        </li>
        <li>
          <a className="footer-list-item" href="#">
            Help
          </a>
        </li>
      </ul>
      <ul>
        <li className="footer-list-heading">Follow us</li>
        <li>
          <div className="social-icons">
            <a href="#">
              <svg
                title="Facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 12H12.7V16.7H10.8V12H9.8V10.4H10.8V9.4C10.8 8.1 11.3 7.3 12.9 7.3H14.2V8.9H13.4C12.8 8.9 12.7 9.2 12.7 9.6V10.4H14.2L14 12ZM12 0C5.4 0 0 5.4 0 12 0 18.6 5.4 24 12 24 18.6 24 24 18.6 24 12 24 5.4 18.6 0 12 0Z"
                  fill="#CBCBCB"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                title="Twitter"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 9.9L16.5 10.2C16.5 13 14.4 16.2 10.5 16.2 9.3 16.2 8.2 15.8 7.2 15.2 7.4 15.3 7.6 15.3 7.8 15.3 8.7 15.3 9.7 14.9 10.4 14.4 9.4 14.3 8.7 13.7 8.4 12.9 8.5 12.9 8.7 12.9 8.8 12.9 9 12.9 9.2 12.9 9.4 12.9 8.4 12.7 7.7 11.8 7.7 10.8V10.8C7.9 10.9 8.3 11 8.6 11 8.1 10.6 7.7 10 7.7 9.3 7.7 8.9 7.8 8.5 8 8.2 9 9.5 10.6 10.3 12.3 10.4 12.3 10.3 12.3 10.1 12.3 9.9 12.3 8.8 13.2 7.8 14.4 7.8 15 7.8 15.5 8.1 15.9 8.5 16.4 8.4 16.8 8.2 17.3 8 17.1 8.5 16.8 8.9 16.3 9.1 16.8 9.1 17.2 9 17.5 8.8 17.3 9.2 16.9 9.6 16.5 9.9ZM12 0C5.4 0 0 5.4 0 12 0 18.6 5.4 24 12 24 18.6 24 24 18.6 24 12 24 5.4 18.6 0 12 0Z"
                  fill="#CBCBCB"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                title="Dribble"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.3 12.9C12.5 12.8 12.7 12.8 12.9 12.7 13.1 13.3 13.2 13.8 13.4 14.4 13.6 15.3 13.8 16.1 13.9 17 13.3 17.2 12.7 17.3 12 17.3 10.8 17.3 9.7 16.9 8.8 16.2 9.5 14.8 10.7 13.6 12.3 12.9ZM12.2 11.1C12.3 11.3 12.4 11.6 12.5 11.9 12.4 11.9 12.2 12 12.1 12 10.2 12.8 8.8 14 8 15.5 7.2 14.6 6.7 13.3 6.7 12L6.7 11.8C7 11.8 7.3 11.8 7.6 11.8 9.3 11.7 10.9 11.5 12.2 11.1ZM7.7 10.7C7.4 10.7 7.1 10.7 6.9 10.7 7.2 9.2 8.3 8 9.6 7.3 10.4 8 11.1 9 11.7 10.1 10.5 10.5 9.1 10.7 7.7 10.7ZM12.8 9.8C12.2 8.6 11.5 7.6 10.7 6.9 11.1 6.8 11.6 6.7 12 6.7 13.3 6.7 14.5 7.2 15.4 7.9 14.8 8.7 13.9 9.3 12.8 9.8ZM13.7 11.7C13.5 11.3 13.4 11 13.2 10.7 14.5 10.1 15.5 9.4 16 8.6 16.8 9.4 17.2 10.5 17.3 11.7 16.1 11.6 14.8 11.6 13.7 11.7ZM14.9 16.5C14.8 15.6 14.6 14.7 14.4 13.8 14.3 13.4 14.1 13 14 12.6 15 12.5 16.3 12.5 17.3 12.6 17.1 14.2 16.2 15.6 14.9 16.5ZM12 5.6C8.5 5.6 5.6 8.5 5.6 12 5.6 15.5 8.5 18.4 12 18.4 15.5 18.4 18.4 15.5 18.4 12 18.4 8.5 15.5 5.6 12 5.6ZM12 24C5.4 24 0 18.6 0 12 0 5.4 5.4 0 12 0 18.6 0 24 5.4 24 12 24 18.6 18.6 24 12 24Z"
                  fill="#CBCBCB"
                />
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </FooterContainer>
  </PageContainer>
);

export default Footer;
