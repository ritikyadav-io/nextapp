"use client";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Page Not Found</h1>
          <p className="text-gray-600">The page you are looking for does not exist.</p>
        </div>
      </body>
    </html>
  );
}
