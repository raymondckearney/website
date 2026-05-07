import Head from 'next/head';
import Link from 'next/link';

const stats = [
  { value: '18+', label: 'Years of experience' },
  { value: '12+', label: 'Years leading teams' },
  { value: '7+',  label: 'Industries served' },
  { value: '40+', label: 'Countries explored' },
];

const testimonials = [
  {
    quote: "The client loved Ray and loved our results. We are in the process of signing $1.5M follow-on work, which is a direct result of Ray's hard work. Ray leveraged his previous strategic and organizational expertise to craft something new, tangible, valuable and useful for the C-suite.",
    featured: true,
  },
  {
    quote: "Ray's leadership...continued to be exceptional. He continued to leverage and extend key relationships with the CCO, CIO, and VP of Marketing to showcase our BXT philosophy and deliver great product.",
  },
  {
    quote: "Ray has a gift with people, and he created an exceptional environment for both for the client, introducing new ways of working, and with the internal PwC team, creating a high-integrity work environment coupled with fun, foodie adventures.",
  },
  {
    quote: "Ray developed great relationships with all members of the client team and specifically the Chief Customer Officer and CIO. Ray's ability to leverage his technical acumen to extend the clients perspective allowed us to quickly elevate their ideas on brand and experience.",
  },
  {
    quote: "Ray got the team and client to collaborate, which with the client culture was no small feat. The client looked to him for direction on expanding their future state client journey's and to provide the training for them to expand their team.",
  },
];

export default function Home() {
  const [featured, ...rest] = testimonials;

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
            <p className="text-xs font-bold tracking-widest uppercase text-center text-gray-500 mb-6">
              Innovative &amp; Strategic Executive Leader
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              I&apos;m an executive leader at the intersection of people, strategy, and experience.
              My career spans 18+ years building transformative digital products, leading
              high-performing teams, and helping organizations design the experiences their
              customers and employees deserve. Take a look at my work — I&apos;d love to connect.
            </p>

            {/* ── Stat callouts ── */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-2xl font-black text-[#1c3054] leading-none mb-1">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug">{label}</p>
                </div>
              ))}
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
        <section className="px-6 xl:px-10 py-20">
          <h2 className="text-3xl xl:text-4xl font-black uppercase mb-12">
            What My Colleagues Say
          </h2>

          {/* Featured quote */}
          <div className="bg-[#1c3054] rounded-2xl px-10 py-12 mb-6 relative overflow-hidden">
            <span className="absolute top-4 left-8 text-8xl text-white/10 font-serif leading-none select-none">&ldquo;</span>
            <p className="relative text-white text-xl sm:text-2xl font-light leading-relaxed italic max-w-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
          </div>

          {/* Supporting quotes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-gray-700 text-sm leading-relaxed italic border border-gray-100 bg-gray-50"
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
