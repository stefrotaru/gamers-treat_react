import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="nav-bottom__container">
      <div className="nav-links__container">
        <ul className="nav">
          <NavLink to="/shop/all" >All Games</NavLink>
          <NavLink to="/shop/pc" >PC Games</NavLink>
          <NavLink to="/shop/xbox">Xbox Games</NavLink>
          <NavLink to="/shop/playstation">Playstation Games</NavLink>
          <NavLink to="/shop/nintendo">Nintendo Games</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
