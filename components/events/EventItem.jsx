import Link from "next/link";
import React from "react";

const EventItem = (props) => {
  const { id, title, image, date, location } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedLocation = location.replace(", ", "\n"); // to add a line break

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
