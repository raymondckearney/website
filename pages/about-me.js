import Head from 'next/head';
import Link from 'next/link';

const values = [
  { title: 'Curiosity',  description: 'The best ideas come from asking "why not?" more than "why?"' },
  { title: 'Empathy',    description: 'Every decision is better when you deeply understand the people it affects.' },
  { title: 'Excellence', description: 'Good enough never is. The details are where trust is built.' },
  { title: 'Connection', description: 'The richest experiences—professional and personal—are built on genuine human connection.' },
];

const photoAdventures = [
  {
    image: '/about-mountains.jpg',
    title: 'World Traveler',
    body: 'Explored over 40 countries across 6 continents, diving into cultures, cuisines, and communities few tourists ever discover.',
    imageLeft: true,
  },
  {
    image: '/about-diving.jpg',
    title: 'Underwater Explorer',
    body: 'Dived with Hammerhead sharks, proving that the most extraordinary experiences often require you to step far outside your comfort zone.',
    imageLeft: false,
  },
  {
    image: '/about-skiing.jpg',
    title: 'High-Altitude Adventurer',
    body: "Hiked and hang glided some of the world's highest peaks, chasing views that remind you how vast—and beautiful—this world is.",
    imageLeft: true,
  },
];

const moreAdventures = [
  { emoji: '🍽️', title: 'Culinary Curator',  body: 'Maintains a meticulously crafted spreadsheet of over 500 restaurants—because life is too short for a bad meal.' },
  { emoji: '🗣️', title: 'Language Learner',  body: "Studied 3 foreign languages, believing that speaking someone's language—even imperfectly—is one of the greatest acts of respect." },
];

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me — Ray Kearney</title>
        <meta name="description" content="Learn about Ray Kearney—strategic executive leader, world traveler, culinary curator, and lifelong learner passionate about experience in every form." />
        <link rel="canonical" href="https://www.raymondckearney.com/about-me" />
      </Head>

      <main className="pt-24">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="section-label animate-fade-in">About Me</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up">
            Beyond the<br />
            <span className="text-brand-500">Boardroom</span>
          </h1>
          <p className="prose-custom max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            I&apos;m a strategic executive leader who believes the most effective professionals are
            those who lead full, curious lives. My passions outside of work don&apos;t just color
            who I am—they directly shape how I think, lead, and build.
          </p>
        </section>

        {/* ── My Story ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">My Story</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A career built at the intersection of people and possibility</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>My professional journey began in Product and Experience Strategy—a space where business goals and human needs collide, and where the most thoughtful practitioners find a way to honor both.</p>
                <p>Over the years, I&apos;ve led transformation and change across numerous organizations, earning an MBA along the way and developing a conviction that the best strategies are the ones that put people first—whether that&apos;s customers, employees, or partners.</p>
                <p>Today, I focus on helping organizations unlock their potential by designing experiences worth having and building cultures worth working in.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Life Outside Work ── */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <p className="section-label">Life Outside Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience is everything</h2>
            <p className="prose-custom max-w-2xl">
              My appetite for new experiences isn&apos;t a hobby—it&apos;s a philosophy. The curiosity,
              resilience, and perspective I gain from these adventures directly inform how I lead and how I think.
            </p>
          </div>

          {/* Alternating photo + text rows */}
          {photoAdventures.map(({ image, title, body, imageLeft }) => (
            <div key={title} className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-2`}>
              <div className="w-full lg:w-1/2 overflow-hidden" style={{ minHeight: '400px' }}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center px-10 xl:px-16 py-14 bg-gray-50">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{body}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Emoji cards for remaining adventures */}
          <div className="max-w-5xl mx-auto px-6 mt-10 space-y-6">
            {moreAdventures.map(({ emoji, title, body }) => (
              <div key={title} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 hover:border-brand-100 hover:bg-brand-50/30 transition-all duration-300">
                <div className="text-4xl shrink-0">{emoji}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="bg-brand-500 py-20 text-center text-white">
          <div className="max-w-3xl mx-auto px-6">
            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed italic mb-6">
              &ldquo;The richest experiences come from showing up fully—whether in the boardroom, on a mountainside, or at the dinner table.&rdquo;
            </blockquote>
            <cite className="text-brand-100 text-sm font-semibold tracking-widest uppercase not-italic">— Ray Kearney</cite>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s create something meaningful</h2>
          <p className="prose-custom mb-8">Whether it&apos;s transforming an organization or sharing a great meal—I&apos;m always open to a good conversation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@raymondckearney.com" className="bg-brand-500 text-white font-medium px-6 py-3 rounded-full hover:bg-brand-600 transition-colors">
              Get in Touch
            </a>
            <Link href="/" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-gray-500 transition-colors">
              Back to Home
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
