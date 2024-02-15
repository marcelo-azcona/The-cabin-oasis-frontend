import { useMoveBack } from '../hooks/useMoveBack';
import Heading from '../ui/Head/Heading';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles.pageNotFoundContainer}>
      <div className={styles.pageNotFoundBox}>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
