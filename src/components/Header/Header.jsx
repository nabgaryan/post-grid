import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = ({ onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuhandler = () => {
    setMobileMenuOpen(true);
  };

  const mobileMenuClosehandler = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {mobileMenuOpen && <MobileMenu onClose={mobileMenuClosehandler} />}
      <Logo mobileMenuhandler={mobileMenuhandler} onSearch={onSearch} />
      <Navigation />
    </>
  );
};

export default Header;
