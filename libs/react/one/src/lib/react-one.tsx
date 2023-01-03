import styles from './react-one.module.css';

/* eslint-disable-next-line */
export interface ReactOneProps {}

export function ReactOne(props: ReactOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactOne!</h1>
    </div>
  );
}

export default ReactOne;
