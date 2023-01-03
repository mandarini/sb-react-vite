import styles from './react-three.module.css';

/* eslint-disable-next-line */
export interface ReactThreeProps {}

export function ReactThree(props: ReactThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactThree!</h1>
    </div>
  );
}

export default ReactThree;
