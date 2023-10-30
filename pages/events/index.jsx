import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/utils/api-utils";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

const AllEventsPage = (props) => {
  const { events } = props;

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
