import styles from './Spinner.module.css';
import { BiLoaderAlt } from 'react-icons/bi';

function SpinnerMini() {
  return <BiLoaderAlt className={styles.spinnerMini} />;
}

export default SpinnerMini;
