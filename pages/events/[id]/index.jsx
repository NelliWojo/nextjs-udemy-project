import EventContent from "@/components/eventDetails/event-content";
import EventLogistics from "@/components/eventDetails/event-logistics";
import EventSummary from "@/components/eventDetails/event-summary";
import { getEventById } from "@/data/data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const EventDetailsPage = () => {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailsPage;
