import styles from './react-four.module.css';

/* eslint-disable-next-line */
export interface ReactFourProps {}

export function ReactFour(props: ReactFourProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactFour!</h1>
    </div>
  );
}

export default ReactFour;
