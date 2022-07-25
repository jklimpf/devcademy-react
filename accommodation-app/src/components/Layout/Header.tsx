import header from "../../assets/header.png";
import classes from "./Header.module.css";

const Header = () => {
  return <img src={header} className={classes.header} alt="header"></img>;
};

export default Header;
