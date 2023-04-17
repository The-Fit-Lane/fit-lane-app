

export default function HomePage() {
  return (
    <div>
      <nav className="nav">
        <img className="logo" src="../Public/Images/LandingPage/fitlaneLogo.png" alt="fitlane Logo"></img>
        <ul>
          <li><a href="">Women</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Gift Sets</a></li>
          <li><a href="">Shoes</a></li>
          <li><a href="">Sale</a></li>
        </ul>
        <div>
        <img className="logo" src="../Public/Images/LandingPage/search.png" alt="search"></img>
        <img className="logo" src="../Public/Images/LandingPage/user.png" alt="User"></img>
        <img className="logo" src="../Public/Images/LandingPage/cart.png" alt="cart"></img>
        </div>
      </nav>
    </div>
  )
}