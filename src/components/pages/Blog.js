import styles from "./Blog.module.css";
import blog1 from "../../img/blog_image_1.svg";
import blog2 from "../../img/bloco_image_2.svg";
import blog3 from "../../img/bloco_image_3.svg";

function Blog() {
  return (
    <section className={styles.home_container}>
      <h2 className={styles.titulo_h2}>Read Our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>

      <section className={styles.home_container02}>
        <div className={styles.card}>
          <img src={blog1} alt="comida" />

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
          <img src={blog2} alt="comida" />

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
          <img src={blog3} alt="comida" />

          <ul>
            <li>
              <h3>Classic Potato Salad</h3>
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

export default Blog;
