"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 — Page Not Found</h1>
      <p>Sorry, we couldn’t find what you were looking for.</p>
      <Link href="/">
        <a
          style={{
            marginTop: "1.5rem",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          Go back home
        </a>
      </Link>
    </main>
  );
}
