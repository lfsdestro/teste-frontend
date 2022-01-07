import React from 'react';
import Button from '../Layout/Button';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import useMedia from '../useMedia';

const Navbar = () => {
  const mobile = useMedia('(max-width: 60rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/">
          <div className={styles.navbarTitle}>Healthy Food</div>
        </NavLink>

        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.buttonMobile} ${
              mobileMenu && styles.buttomMobAct
            }`}
            onClick={(e) => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.buttomMobAct
          }`}
        >
          <ul className={styles.navList}>
            <li>
              <a>HEALTHY RECIPES</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>JOIN</a>
            </li>
          </ul>
          <nav>
            <NavLink to="/Register">
              <Button label={'Register'} branco />
            </NavLink>
          </nav>
        </nav>
      </nav>
    </>
  );
};
export default Navbar;
