import Logotype from "../../assets/Logotype.png";
import classes from "./Logo.module.css";
import Search from "./Search";

const Logo = ({ onSearch }) => {
  return (
    <div className={classes.topHeader}>
      <img className={classes.logoImage} src={Logotype} alt={"Logo"} />
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Logo;
