const CABIN_URL = 'http://localhost:8080/api';

export async function getCabins() {
  try {
    const response = await fetch(`${CABIN_URL}/cabins`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch {
    throw new Error('Cabins could not be loaded');
  }
}

export async function createEditCabin(newCabin) {
  console.log(newCabin);
  try {
    const response = await fetch(`${CABIN_URL}/cabins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCabin),
    });

    const data = await response.json();
    return data;
  } catch {
    throw new Error('Cabin could not be created');
  }
}

export async function deleteCabinById(id) {
  try {
    const response = await fetch(`${CABIN_URL}/cabins/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    throw new Error('Cabins could not be deleted');
  }
}
