import NavBrand from "../Nav/NavBrand";
import SearchForm from "../Nav/SearchForm";
import Controls from "../Nav/Controls";

import NavLinks from "../Nav/NavLinks";

const Header = () => {
  return (
    <>
      <header className="header__container">
        <NavBrand />
        <div className="search-form__container">
          <SearchForm />
        </div>
        <Controls />
      </header>
      
      <div className="sub-header_container">
        <NavLinks />
      </div>
    </>
  );
};

export default Header;
