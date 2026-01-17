const KEY = "gbsks_donations_v1";

export function getLocalDonations() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function addLocalDonation(donation) {
  const list = getLocalDonations();
  const next = [donation, ...list];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
