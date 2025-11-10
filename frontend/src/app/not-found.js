import Link from 'next/link';
import './globals.css';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
            <h2 className="mb-4 text-3xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="rounded-lg bg-[#1e7571] px-6 py-3 text-white transition-colors hover:bg-[#155955]">
              Go Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
