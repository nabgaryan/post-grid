import classes from "./MobileMenu.module.css";
import Logotype from "../../assets/Logotype.png";
import { GrClose } from "react-icons/gr";

const MobileMenu = ({onClose}) => {
  return (
    <div className={classes.mobileHeader}>
      <div className={classes.mobileTopHeader}>
        <img className={classes.logoImage} src={Logotype} alt={"Logo"} />
        <GrClose className={classes.closeIcon} onClick={onClose} />
      </div>
      <hr className={classes.line} />
      <nav className={classes.mobileNavigation}>
        <ul>
          <li>
            <a href="#">Demos</a>
            <i className={classes.arrow}></i>
          </li>
          <li>
            <a href="#">Post</a>
            <i className={classes.arrow}></i>
          </li>
          <li>
            <a href="#">Features</a>
            <i className={classes.arrow}></i>
          </li>
          <li>
            <a href="#">Categories</a>
            <i className={classes.arrow}></i>
          </li>
          <li>
            <a href="#">Shop</a>
            <i className={classes.arrow}></i>
          </li>
          <li>
            <a href="#">Buy Now</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
