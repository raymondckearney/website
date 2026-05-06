import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Ray Kearney</title>
        <meta name="description" content="Get in touch with Ray Kearney." />
        <link rel="canonical" href="https://www.raymondckearney.com/contact" />
      </Head>

      <main className="pt-24">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="section-label">Contact</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Let&apos;s create something<br />
            <span className="text-brand-500">meaningful</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Whether it&apos;s a new project, a career conversation, or just a great idea worth exploring,
            I&apos;m always open to connecting.
          </p>
        </section>

        {/* ── Contact options ── */}
        <section className="max-w-5xl mx-auto px-6 pb-24 grid sm:grid-cols-2 gap-6 max-w-2xl">
          <a
            href="mailto:RaymondCKearney@gmail.com"
            className="group flex items-start gap-5 p-8 rounded-2xl border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all duration-300"
          >
            <div className="mt-1 shrink-0 text-brand-500 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">Email</h2>
              <p className="text-gray-500 text-sm mb-3">The best way to reach me directly.</p>
              <span className="text-brand-500 font-medium text-sm">RaymondCKearney@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/raymondckearney/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-5 p-8 rounded-2xl border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all duration-300"
          >
            <div className="mt-1 shrink-0 text-brand-500 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">LinkedIn</h2>
              <p className="text-gray-500 text-sm mb-3">Connect and follow my work.</p>
              <span className="text-brand-500 font-medium text-sm">linkedin.com/in/raymondckearney</span>
            </div>
          </a>
        </section>

        {/* ── Navy CTA strip ── */}
        <section className="bg-brand-500 py-20 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Ready to start a conversation?</h2>
            <p className="text-brand-100 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new challenges, opportunities, and ideas.
            </p>
            <a
              href="mailto:RaymondCKearney@gmail.com"
              className="inline-block bg-white text-brand-500 font-semibold px-8 py-3 rounded-full hover:bg-brand-50 transition-colors"
            >
              Send me an email
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
