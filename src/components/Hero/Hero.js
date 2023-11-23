import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Good thinks to do</h1>
      <PageTitle>A simple to-do app, with lists, columns and card</PageTitle>
    </div>
  );
};

export default Hero;