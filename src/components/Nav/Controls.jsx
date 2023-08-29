import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShopBorderIcon from "@mui/icons-material/Shop";
import Badge from "@mui/material/Badge";


import { NavLink } from "react-router-dom";
// import Cart from '../../Card/Cart/Cart';
// import { useContext } from 'react';
// import { WishItemsContext } from '../../../Context/WishItemsContext';

// const Controls = () => {
//     return (
//         <div className='controls__container'>

//         </div>
//      );
// }

// export default Controls;

const Control = () => {
  // const wishItems = useContext(WishItemsContext)

  return (
    <div className="control__bar__container">
      <div className="controls__container">

        <div className="control">
          <NavLink to="/wishlist">
            <Badge badgeContent={3} color="error">
              <FavoriteBorderIcon color="black" sx={{ width: "35px" }} />
            </Badge>
          </NavLink>
        </div>

        <div className="control">
          <NavLink to="/cart">
            <Badge badgeContent={0} color="error">
              <ShopBorderIcon color="black" sx={{ width: "35px" }} />
            </Badge>
          </NavLink>
        </div>

        <div className="control">
          <NavLink to="/account/login">
            <PersonOutlineIcon
              color="black"
              size="large"
              sx={{ width: "35px" }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Control;
