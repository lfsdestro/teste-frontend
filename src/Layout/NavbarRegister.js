import React from 'react';
import styles from './NavbarRegister.module.css';
import { NavLink } from 'react-router-dom';
import useMedia from '../useMedia';

const NavbarRegister = () => {
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
        </nav>
      </nav>
    </>
  );
};
export default NavbarRegister;