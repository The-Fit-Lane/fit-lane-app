import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <nav className="nav">
        <Image
          src="/fitlaneLogo.png"
          alt="fitlane Logo"
          height={100}
          width={130}
        />

        <img className="logo"  ></img>
        <ul>
          <li><a href="">Women</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Gift Sets</a></li>
          <li><a href="">Shoes</a></li>
          <li><a href="">Sale</a></li>
        </ul>
        <div>
        <Image
          src="/search.png"
          alt="Search"
          height={50}
          width={50}
        />
         <Image
          src="/user.png"
          alt="User"
          height={50}
          width={50}
        />
         <Image
           src="/cart.png"
           alt="Cart"
           height={50}
           width={50}
        />
        </div>
      </nav>
    </div>
  )
}