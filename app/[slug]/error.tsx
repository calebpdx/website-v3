"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-primary-light">
      <h1 className="text-6xl font-montserrat font-bold">Error</h1>
      <p className="mt-4 text-xl text-primary-light/60">
        Something went wrong.
      </p>
      <button
        onClick={reset}
        className="mt-8 text-lg underline underline-offset-4 hover:text-primary-light/80 transition-colors"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
