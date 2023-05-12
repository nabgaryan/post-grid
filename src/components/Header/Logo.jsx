import Logotype from "../../assets/Logotype.png";
import classes from "./Logo.module.css";
import Search from "./Search";
import { GiHamburgerMenu } from "react-icons/gi";

const Logo = ({ onSearch, mobileMenuhandler }) => {
  
  return (
    <div className={classes.topHeader}>
      <GiHamburgerMenu className="hamburger" onClick={mobileMenuhandler} />
      <img className={classes.logoImage} src={Logotype} alt={"Logo"} />
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Logo;
