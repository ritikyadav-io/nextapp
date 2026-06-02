"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="p-8 bg-white rounded shadow max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Something went wrong
            </h1>
            <p className="mb-4 text-gray-600">{error.message}</p>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
