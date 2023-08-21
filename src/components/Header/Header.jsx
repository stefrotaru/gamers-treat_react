import NavBrand from "../Nav/NavBrand";
import SearchForm from "../Nav/SearchForm";
import Controls from "../Nav/Controls";

import NavLinks from "../Nav/NavLinks";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <NavBrand />
        <div className="search-form__container">
          <SearchForm />
        </div>
        <Controls />
      </div>
      <div className="sub-header_container">
        <NavLinks />
      </div>
    </>
  );
};

export default Header;
