import styles from "./Hero.module.scss";
import hero from "../../../public/hero.png";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img className={styles.Hero__img} src="./hero.png" />
      <h2 className={styles.Hero__title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
  );
};

export default Hero;
