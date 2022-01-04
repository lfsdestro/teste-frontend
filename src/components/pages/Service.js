import styles from "./Service.module.css";
import service from "../../img/bloco_services.svg";

function Service() {
  return (
    <section className={styles.home_container}>
      <div>
        <img src={service} alt="service" />
      </div>
      <ul>
        <li>
          <h1>The best services ready To serve you</h1>
        </li>
        <br></br>
        <li>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </li>
        <br></br>
        <li>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
        </li>
        <br></br>
        <li>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </li>
        <li></li>
      </ul>
    </section>
  );
}

export default Service;
