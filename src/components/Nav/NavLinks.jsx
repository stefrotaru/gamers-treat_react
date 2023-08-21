

import './NavLinks.css'

const NavLinks = () => {
    return ( 
        <nav className="nav-bottom__container">
            <div className='nav-links__container'>
                <ul className="nav">
                    <li className="nav-link">
                        <a href="/pc-games">PC Games</a>
                    </li>
                    <li className="nav-link">
                        <a href="/xbox-games">Xbox Games</a>
                    </li>
                    <li className="nav-link">
                        <a href="/playstation-games">Playstation Games</a>
                    </li>
                    <li className="nav-link">
                        <a href="/switch-games">Switch Games</a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavLinks;