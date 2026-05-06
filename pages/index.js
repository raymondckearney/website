import Head from 'next/head';
import Link from 'next/link';

const bullets = [
  '18+ years of professional work experience working across several industries',
  '12+ years leading and motivating teams to achieve results and mentoring individuals',
  'Experience in financial services, tech, food & beverage, utilities, entertainment & media, telecom, and healthcare',
  'Global experience working across cultures and conducting business in various countries',
];

const testimonials = [
  {
    quote: "The client loved Ray and loved our results. We are in the process of signing $1.5M follow-on work, which is a direct result of Ray's hard work. Ray leveraged his previous strategic and organizational expertise to craft something new, tangible, valuable and useful for the C-suite.",
    navy: true,
  },
  {
    quote: "Ray's leadership...continued to be exceptional. He continued to leverage and extend key relationships with the CCO, CIO, and VP of Marketing to showcase our BXT philosophy and deliver great product.",
    navy: false,
  },
  {
    quote: "Ray has a gift with people, and he created an exceptional environment for both for the client, introducing new ways of working, and with the internal PwC team, creating a high-integrity work environment coupled with fun, foodie adventures.",
    navy: true,
  },
  {
    quote: "Ray developed great relationships with all members of the client team and specifically the Chief Customer Officer and CIO. Ray's ability to leverage his technical acumen to extend the clients perspective allowed us to quickly elevate their ideas on brand and experience.",
    navy: false,
  },
  {
    quote: "Ray got the team and client to collaborate, which with the client culture was no small feat. The client looked to him for direction on expanding their future state client journey's and to provide the training for them to expand their team.",
    navy: true,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ray Kearney, MBA — Innovative & Strategic Executive Leader</title>
        <meta name="description" content="Ray Kearney is an innovative and strategic executive leader passionate about crafting experiences for consumers and organizations." />
        <link rel="canonical" href="https://www.raymondckearney.com" />
      </Head>

      <main>

        {/* ── Hero ── */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-[48%] bg-gray-200" style={{ minHeight: '620px' }}>
            <img
              src="/headshot.jpg"
              alt="Ray Kearney"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '620px', display: 'block' }}
            />
          </div>

          <div className="w-full md:w-[52%] px-10 xl:px-14 py-14 flex flex-col justify-center">
            <h1 className="text-5xl xl:text-6xl font-black text-black leading-tight mb-3">
              Ray Kearney, MBA
            </h1>
            <p className="text-xs font-bold tracking-widest uppercase text-center text-black mb-6">
              Innovative &amp; Strategic Executive Leader
            </p>
            <p className="text-center text-gray-800 text-sm leading-relaxed mb-6">
              I am PASSIONATE about experience! Whether crafting experiences for consumers or creating
              an inspiring work environment I am focused on the person behind the experience. Since
              beginning my professional journey in Product and Experience Strategy, I&apos;ve led
              transformation and change across numerous organizations. Through all my experience I remain
              focused on bringing innovative thinking and strategic vision to all I do. I&apos;m grateful
              to wake up each day loving what I do and I&apos;m excited to share with you some of my
              greatest work. Please take a look and contact me with any questions.
            </p>
            <hr className="border-gray-300 mb-6" />
            <div className="bg-gray-500 p-6 mb-6">
              <ul className="space-y-4">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-white font-bold text-sm leading-snug">
                    <span className="mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <Link
                href="/portfolio"
                className="bg-[#1c3054] text-white px-10 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="px-6 xl:px-10 py-16">
          <h2 className="text-3xl xl:text-4xl font-black uppercase mb-10">
            What My Colleagues Say About Me...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 text-white text-xs text-center leading-relaxed italic ${
                  t.navy ? 'bg-[#1c3054]' : 'bg-[#555565]'
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </div>
            ))}
          </div>
        </section>

        {/* ── Speaking photo + Contact ── */}
        <section className="bg-[#1c3054] pb-16">
          <img
            src="/speaking.jpg"
            alt="Ray Kearney presenting"
            className="w-full object-cover"
            style={{ maxHeight: '520px', objectPosition: 'center' }}
          />
          <div className="pt-12 px-6 xl:px-10 text-center text-white space-y-2 mb-10">
            <p className="font-bold text-lg">RaymondCKearney@gmail.com</p>
            <p className="font-bold text-lg">(202) 578-3695</p>
            <p className="font-bold text-xl pt-3 pb-6">New York, NY 10024</p>
            <Link
              href="/contact"
              className="inline-block border border-white text-white px-16 py-3 text-base hover:bg-white hover:text-[#1c3054] transition-colors"
            >
              Contact
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
