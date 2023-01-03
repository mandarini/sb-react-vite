import styles from './react-five.module.css';

/* eslint-disable-next-line */
export interface ReactFiveProps {}

export function ReactFive(props: ReactFiveProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactFive!</h1>
    </div>
  );
}

export default ReactFive;
