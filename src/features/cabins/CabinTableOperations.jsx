import TableOperations from '../../ui/Table/TableOperations';
import Filter from '../../ui/Filter&Sort/Filter';
import SortBy from '../../ui/Filter&Sort/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A - Z)' },
          { value: 'name-desc', label: 'Sort by name (Z - A)' },
          { value: 'price-asc', label: 'Sort by price (lowest first)' },
          { value: 'price-desc', label: 'Sort by price (highest first)' },
          {
            value: 'maxCapacity-asc',
            label: 'Sort by capacity (lowest first)',
          },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by capacity (highest first)',
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
