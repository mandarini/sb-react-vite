import styles from './react-six.module.css';

/* eslint-disable-next-line */
export interface ReactSixProps {}

export function ReactSix(props: ReactSixProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactSix!</h1>
    </div>
  );
}

export default ReactSix;
