import React from "react";
import EventItem from "./EventItem";
import styles from "./eventsList.module.css";

const EventsList = (props) => {
  // const events = props.events;
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventsList;
