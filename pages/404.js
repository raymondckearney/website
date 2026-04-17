import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found — Ray Kearney</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-8xl font-bold text-brand-100 mb-4">404</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">Page not found</h1>
          <p className="text-gray-500 mb-8">Looks like this path hasn&apos;t been explored yet.</p>
          <Link href="/" className="bg-brand-500 text-white font-medium px-6 py-3 rounded-full hover:bg-brand-600 transition-colors">
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
}
