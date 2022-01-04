import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";
import LinkButton from '../layout/LinkButton'
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        
          <h1 className={styles.h1_logo}>Healthy Food</h1>
        
        <ul class={styles.list}>
          <li className={styles.item}>
            <Link to="/">HEALTHY RECIPES</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">BLOG</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">JOIN</Link>
          </li>
          <li className={styles.item}>
          <LinkButton to="/newproject" text="REGISTER" />
          </li>
          
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
