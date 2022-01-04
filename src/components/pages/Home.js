import styles from "./Home.module.css";
import savings from "../../img/Illustration.svg";
import { FaSistrix } from "react-icons/fa";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1 className={styles.titulo_h1}>Ready for Trying a new recipe?</h1>
      <label>
      <input className={styles.label_input} type="text" placeholder="Search healthy recipes"/>
      <button className={styles.button_search} type="button"><FaSistrix /></button>
      </label>
      <img src={savings} alt="teste" />
    </section>
  );
}

export default Home;
