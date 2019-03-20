import Link from "next/link";

const TopNav = () => (
  <nav>
    <ul>
      <li>
        <Link href="#">
          <a>Product</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        nav {
          max-width: 500px;
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          top: 0;
          padding-top: 2rem;
        }
        ul {
          display: flex;
          justify-content: space-between;
          list-style: none;
          margin: 0 auto;
          text-align: center;
          list-style-type: none;
        }
        a {
          color: white;
          text-transform: uppercase;
          text-decoration: none;
          color: #b2b2b2;
        }
        a:hover {
          border-bottom: white 2px solid;
          padding-bottom: 1px;
        }
        @media screen and (max-width: 800px) {
          nav {
            display: none;
          }
        }
      `}
    </style>
  </nav>
);

export default TopNav;
