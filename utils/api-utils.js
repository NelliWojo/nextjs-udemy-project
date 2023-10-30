export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-udemy-d4ce5-default-rtdb.firebaseio.com/Events.json"
  );
  const data = await response.json();

  // transform data from firebase
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key], // all data for the given key
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
