import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/data/data";
import React from "react";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return <EventsList events={featuredEvents} />;
};

export default HomePage;
