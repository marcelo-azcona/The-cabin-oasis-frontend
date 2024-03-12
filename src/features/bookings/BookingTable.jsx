// import styled from 'styled-components';
import BookingRow from './BookingRow';
import Spinner from '../../ui/Animation/Spinner';
import Table from '../../ui/Table/Table';
import { useBookings } from './hooks/useBookings';
import Menus from '../../ui/Menu/Menus';
import Pagination from '../../ui/Pagination/Pagination';
import Empty from '../../ui/Empty';

function BookingTable() {
  const { bookings, count, isLoading } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings) return <Empty resource={'bookings'} />;

  console.log(bookings);

  return (
    <Menus>
      {/* A beautiful API we created here! We could even have defined the widths on the columns in the table header individually, but this keeps it simpler, and I also really like it */}
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
