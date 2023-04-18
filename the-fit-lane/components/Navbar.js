import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <nav className="nav">
      <Link href="/">
        <Image
          src="/fitlaneLogo.png"
          alt="fitlane Logo"
          height={100}
          width={130}
        />
        </Link>
        

        <div>

        <Link href="">Women</Link>
        <Link href="">Men</Link>
        <Link href="">Accessories</Link>
        <Link href="">Gift Sets</Link>
        <Link href="">Shoes</Link>
        <Link href="">Sale</Link>

        </div> 

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