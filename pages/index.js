import Link from "next/link";

function Index() {
  return (
    <section>
      <nav>
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
      </nav>
    </section>
  );
}

export default Index;
