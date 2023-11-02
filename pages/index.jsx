import EventsList from "@/components/events/EventsList";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getFeaturedEvents } from "@/utils/api-utils";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  const featuredEvents = getFeaturedEvents();

  return {
    props: {
      events: await featuredEvents,
    },
    revalidate: 1800,
  };
}

const HomePage = (props) => {
  const { events } = props;
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find your special event" />
      </Head>
      <NewsletterRegistration />
      <EventsList items={events} />
    </div>
  );
};


export default HomePage;
