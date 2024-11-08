// app/event-request/page.tsx
import React from "react";

const EventRequest: React.FC = () => (
  <div style={{ padding: "20px" }}>
    <h1
      style={{ padding: "20px", fontSize: "2rem" }}
      className="flex items-center justify-center text-large text-gray-600 text-bold"
    >
      Event Request Form
    </h1>
    <iframe
      title="Event Request Form"
      src="https://form.jotform.com/243124221736145" // Replace with your Jotform URL
      width="100%"
      height="800px"
      style={{ border: "none" }}
    ></iframe>
  </div>
);

export default EventRequest;
