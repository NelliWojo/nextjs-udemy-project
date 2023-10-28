import React from "react";
import EventItem from "./EventItem";
import styles from "./events-list.module.css";

const EventsList = (props) => {
  // const events = props.events;
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items?.map((event) => (
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
