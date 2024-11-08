// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center h-28 p-4 bg-blue-500">
      <Image
        src="/logo.svg"
        alt="Insurance Company Logo"
        width={150}
        height={150}
      />
      {/* <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      /> */}
      <h1 style={{ marginLeft: "515px", fontSize: "24px" }}>Broker Portal</h1>
      <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
        <Link className="mx-5" href="/event-request">
          Event Request Form
        </Link>
        <Link className="mx-5" href="/account-maintenance">
          Account Maintenance
        </Link>
      </div>
    </nav>
  );
}
