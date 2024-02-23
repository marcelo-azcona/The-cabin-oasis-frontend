import FilterButton from './FilterButton';
import styles from './Filter.module.css';
import { useSearchParams } from 'react-router-dom';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set('discount', value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.filterContainer}>
      <FilterButton onClick={() => handleClick('all')}>All</FilterButton>
      <FilterButton onClick={() => handleClick('no-discount')}>
        No discount
      </FilterButton>
      <FilterButton onClick={() => handleClick('with-discount')}>
        With discount
      </FilterButton>
    </div>
  );
}

export default Filter;
