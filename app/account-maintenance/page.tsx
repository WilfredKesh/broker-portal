// app/account-maintenance/page.tsx
import React from "react";

const AccountMaintenance: React.FC = () => (
  <div style={{ padding: "20px" }}>
    <h1
      style={{ padding: "20px", fontSize: "2rem" }}
      className="flex items-center justify-center text-large text-gray-600 text-bold"
    >
      Account Maintenance Form
    </h1>
    <iframe
      title="Account Maintenance Form"
      src="https://form.jotform.com/243124221736145" // Replace with your Jotform URL
      width="100%"
      height="600px"
      style={{ border: "none" }}
    ></iframe>
  </div>
);

export default AccountMaintenance;
