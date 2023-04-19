import Image from 'next/image';
import Link from 'next/link';


export default function NavBar() {
  return (
    <div 
    className='NavBar'
    >
      <nav className="nav">
      <Link className='logo' href="/">
        <Image
          src="/FitLaneLogo 1.svg"
          alt="fitlane Logo"
          height={80}
          width={100}
        />
        </Link>
        

        <div className='navbar-links'>

        <Link className='link' href="">Women</Link>
        <Link className='link' href="">Men</Link>
        <Link className='link' href="">Accessories</Link>
        <Link className='link' href="">Gift Sets</Link>
        <Link className='link' href="">Shoes</Link>
        <Link className='link' href="">Sale</Link>

        </div> 

        <div className='navbar-icons'>
        <Image
          className='icon'
          src="/search.png"
          alt="Search"
          height={30}
          width={30}
        />
         <Image
          className='icon'
          src="/user.png"
          alt="User"
          height={30}
          width={30}
        />
         <Image
           className='icon'
           src="/cart.png"
           alt="Cart"
           height={30}
           width={30}
        />
        </div>
      </nav>
    </div>
  )
}