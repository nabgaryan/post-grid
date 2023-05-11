import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = ({ onSearch }) => {
  return (
    <>
      <Logo onSearch={onSearch} />
      <Navigation />
    </>
  );
};

export default Header;
