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
            <span>Women</span>
          </Link>
        </li>
        <li>
          <Link href="/about" as="/about">
            <span>Men</span>
          </Link>
        </li>
        <li>
          <Link href="/services" as="/services">
            <span>Accesories</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" as="/contact">
            <span>Gift Sale</span>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: black;
          color: white;
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
          font-size: 1.2rem;
          color: white;
        }
        .nav-links li span::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease-in-out;
        }
        .nav-links li span:hover::before {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
