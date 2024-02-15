const SETTINGS_URL = 'http://localhost:8080/api';

export async function getSettings() {
  try {
    const response = await fetch(`${SETTINGS_URL}/settings`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    // Data gives back an Array and only need the first
    return data[0];
  } catch {
    throw new Error('Settings could not be loaded');
  }
}

export async function updateSettingById(newSetting, id = newSetting.id) {
  try {
    const response = await fetch(`${SETTINGS_URL}/settings/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSetting),
    });

    const data = await response.json();
    return data;
  } catch {
    throw new Error('Setting could not be updated');
  }
}
