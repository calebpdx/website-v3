import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-primary-light">
      <h1 className="text-6xl font-montserrat font-bold">404</h1>
      <p className="mt-4 text-xl text-primary-light/60">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 text-lg underline underline-offset-4 hover:text-primary-light/80 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
