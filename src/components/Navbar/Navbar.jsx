import styles from "./Navbar.module.scss";
import Logo from "../assets/logo";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Logo />
    </div>
  );
};
export default Navbar;
