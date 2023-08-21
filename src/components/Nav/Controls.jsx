import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
// import { Link } from 'react-router-dom';
// import Cart from '../../Card/Cart/Cart';
// import { useContext } from 'react';
// import { WishItemsContext } from '../../../Context/WishItemsContext';

import "./Controls.scss";

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
          <a to="/wishlist">
            <Badge badgeContent={3} color="error">
              <FavoriteBorderIcon color="black" sx={{ width: "35px" }} />
            </Badge>
          </a>
        </div>
        <div className="control"></div>

        <div className="control">
          <a to="/account/login">
            <PersonOutlineIcon
              color="black"
              size="large"
              sx={{ width: "35px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Control;
