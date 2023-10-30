import EventContent from "@/components/eventDetails/event-content";
import EventLogistics from "@/components/eventDetails/event-logistics";
import EventSummary from "@/components/eventDetails/event-summary";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById, getFeaturedEvents } from "@/utils/api-utils";
// import { useRouter } from "next/router";
import React, { Fragment } from "react";

// context, as we need to know which id to use
export async function getStaticProps(context) {
  const eventId = context.params.id;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

// as id is a dynamic parameter
export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { id: event.id } }));

  return {
    paths: paths,
    // fallback: false,
    fallback: "blocking", // to tell nextjs that we have more pages that only featured events
  };
}

const EventDetailsPage = (props) => {
  const event = props.selectedEvent;
  /*  const router = useRouter();
  const eventId = router.query.id; */

  if (!event) {
    return (
      // <ErrorAlert>
      <div className="center">
        <p>Loading...</p>
      </div>
      // </ErrorAlert>
    );
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
