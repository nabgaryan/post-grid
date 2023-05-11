import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.mainNavigation}>
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
  );
};

export default Navigation;
