import { useSearchParams } from 'react-router-dom';
import { useCabins } from './hooks/useCabins';
import Spinner from '../../ui/Animation/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table/Table';
import Empty from '../../ui/Empty';
import Menus from '../../ui/Menu/Menus';
import styles from './Cabin.module.css';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins) return <Empty resource="cabins" />;

  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;

  if (filterValue === 'all') {
    filteredCabins = cabins;
  }

  if (filterValue === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  if (filterValue === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>

        <Table.Body>
          {filteredCabins.map((cabin) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          ))}
        </Table.Body>
      </Table>
    </Menus>
  );
}

export default CabinTable;
