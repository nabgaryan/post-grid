import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.mainNavigation}>
      <ul>
        <li>
          <a href="https://github.com/">Demos</a>
          <i className={classes.arrow}></i>
        </li>
        <li>
          <a href="https://github.com/">Post</a>
          <i className={classes.arrow}></i>
        </li>
        <li>
          <a href="https://github.com/">Features</a>
          <i className={classes.arrow}></i>
        </li>
        <li>
          <a href="https://github.com/">Categories</a>
          <i className={classes.arrow}></i>
        </li>
        <li>
          <a href="https://github.com/">Shop</a>
          <i className={classes.arrow}></i>
        </li>
        <li>
          <a href="https://github.com/">Buy Now</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
