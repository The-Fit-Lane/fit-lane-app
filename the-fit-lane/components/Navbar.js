import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" as="/">
          <span>The Fit Lane</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/" as="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" as="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/services" as="/services">
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" as="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
        }
        .nav-links {
          display: flex;
          justify-content: space-between;
          width: 30%;
          list-style: none;
        }
        .nav-links li span {
          text-decoration: none;
          color: #333;
          font-size: 1.2rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
