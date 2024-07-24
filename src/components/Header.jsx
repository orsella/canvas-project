export default function Header() {
  return (
    <div className="header">
      <div className="logobox">
        <img src="./assets/logo.png" alt="logo" className="logo" />
      </div>
      <h1 className="main-heading">HTML Canvas Showcase</h1>
      <nav className="nav">
        <ul className="navlist">
          <li>
            <a href="" className="navlinks">
              Home
            </a>
          </li>
          <li>
            <a href="" className="navlinks">
              Canvas 1
            </a>
          </li>
          <li>
            <a href="" className="navlinks">
              Canvas 2
            </a>
          </li>
          <li>
            <a href="" className="navlinks">
              Canvas 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
