import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Not found</p>
      <h1>That Sportive preview page is not available.</h1>
      <Link className="button primary" href="/sportive">
        Return to Sportive preview
      </Link>
    </main>
  );
}
