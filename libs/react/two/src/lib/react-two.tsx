import styles from './react-two.module.css';

/* eslint-disable-next-line */
export interface ReactTwoProps {}

export function ReactTwo(props: ReactTwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactTwo!</h1>
    </div>
  );
}

export default ReactTwo;
