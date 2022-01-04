import styles from "./Healthy.module.css";
import comida1 from "../../img/comida_1.svg";
import comida2 from "../../img/comida_2.svg";
import comida3 from "../../img/comida_3.svg";
import comida4 from "../../img/comida_4.svg";

function Healthy() {
  return (
    <section className={styles.home_container}>
      <h2 className={styles.titulo_h2}>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <section className={styles.home_container02}>
        <div className={styles.card}>
          <img src={comida1} alt="comida" />

          <ul>
            <li>
              <h3>Broccoli Salad with Bacon</h3>
            </li>
            <li>
              <button type="button">Se Recipe</button>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <img src={comida2} alt="comida" />

          <ul>
            <li>
              <h3>Classic Beef Burgers</h3>
            </li>
            <li>
              <button type="button">Se Recipe</button>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <img src={comida3} alt="comida" />

          <ul>
            <li>
              <h3>Classic Potato Salad</h3>
            </li>
            <li>
              <button type="button">Se Recipe</button>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <img src={comida4} alt="comida" />
 
          <ul>
            <li>
              <h3>Cherry Cobbler on the Grill</h3>
            </li>
            <li>
              <button type="button">Se Recipe</button>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Healthy;
