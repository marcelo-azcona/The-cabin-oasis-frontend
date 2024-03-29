import { getToday } from '../utils/helpers';

const BOOKING_URL = 'http://localhost:8080/api';

export async function getAllBookings() {
  try {
    const response = await fetch(`${BOOKING_URL}/bookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch {
    throw new Error('Bookings could not be loaded');
  }
}

export async function getBooking(id) {}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  // const { data, error } = await supabase
  //   .from('bookings')
  //   .select('created_at, totalPrice, extrasPrice')
  //   .gte('created_at', date)
  //   .lte('created_at', getToday({ end: true }));
  // if (error) {
  //   console.error(error);
  //   throw new Error('Bookings could not get loaded');
  // }
  // return data;
  return {};
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  // const { data, error } = await supabase
  //   .from('bookings')
  //   // .select('*')
  //   .select('*, guests(fullName)')
  //   .gte('startDate', date)
  //   .lte('startDate', getToday());

  // if (error) {
  //   console.error(error);
  //   throw new Error('Bookings could not get loaded');
  // }

  // return data;
  return {};
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  // const { data, error } = await supabase
  //   .from('bookings')
  //   .select('*, guests(fullName, nationality, countryFlag)')
  //   .or(
  //     `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
  //   )
  //   .order('created_at');

  // // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  // if (error) {
  //   console.error(error);
  //   throw new Error('Bookings could not get loaded');
  // }
  // return data;
  return {};
}

export async function updateBooking(id, obj) {
  // const { data, error } = await supabase
  //   .from('bookings')
  //   .update(obj)
  //   .eq('id', id)
  //   .select()
  //   .single();

  // if (error) {
  //   console.error(error);
  //   throw new Error('Booking could not be updated');
  // }
  // return data;
  return null;
}

export async function deleteBooking(id) {
  // // REMEMBER RLS POLICIES
  // const { data, error } = await supabase.from('bookings').delete().eq('id', id);
  // if (error) {
  //   console.error(error);
  //   throw new Error('Booking could not be deleted');
  // }
  // return data;
  return {};
}
