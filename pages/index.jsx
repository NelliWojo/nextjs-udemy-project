import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/utils/api-utils";
import React from "react";

export async function getStaticProps() {
  const featuredEvents = getFeaturedEvents();

  return {
    props: {
      events: await featuredEvents,
    },
  };
}

const HomePage = (props) => {
  const { events } = props;
  return (
    <div>
      <EventsList items={events} />
    </div>
  );
};


export default HomePage;
