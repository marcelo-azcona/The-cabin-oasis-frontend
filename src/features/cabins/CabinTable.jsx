import Spinner from '../../ui/Animation/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './hooks/useCabins';
import styles from './Cabin.module.css';

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.cabinTable} role="table">
      <header className={styles.cabinTableHeader} role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;
