import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/data/data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const AllEventsPage = () => {
  const events = Array.from(getAllEvents);
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
