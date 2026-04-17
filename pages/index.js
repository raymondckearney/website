import Head from 'next/head';
import Link from 'next/link';

const highlights = [
  { emoji: '✈️', stat: '40+',  label: 'Countries visited' },
  { emoji: '🍽️', stat: '500+', label: 'Restaurants catalogued' },
  { emoji: '🗣️', stat: '3',    label: 'Foreign languages studied' },
  { emoji: '🏔️', stat: '∞',    label: 'Adventures sought' },
];

const expertise = [
  {
    title: 'Product Strategy',
    description: 'Defining vision, roadmap, and go-to-market strategies that align cross-functional teams around measurable outcomes.',
    icon: '🎯',
  },
  {
    title: 'Experience Design',
    description: 'Human-centered approaches to building products and services that delight customers at every touchpoint.',
    icon: '✨',
  },
  {
    title: 'Transformation & Change',
    description: 'Leading large-scale organizational change and digital transformation programs with clarity and momentum.',
    icon: '⚡',
  },
  {
    title: 'Executive Leadership',
    description: 'Building high-performing teams and inspiring cultures where people do their best work.',
    icon: '🚀',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ray Kearney — Strategic Executive Leader</title>
        <meta name="description" content="Ray Kearney is a strategic executive leader passionate about crafting experiences—for consumers and the teams that build them." />
        <meta property="og:title" content="Ray Kearney — Strategic Executive Leader" />
        <meta property="og:description" content="Passionate about crafting experiences for consumers and creating inspiring work environments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.raymondckearney.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ray Kearney — Strategic Executive Leader" />
        <meta name="twitter:description" content="Passionate about crafting experiences for consumers and creating inspiring work environments." />
        <link rel="canonical" href="https://www.raymondckearney.com" />
      </Head>

      <main>
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-50 rounded-full opacity-40 blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
            <p className="section-label animate-fade-in">Strategic Executive Leader</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Passionate about<br />
              <span className="text-brand-500">Experience</span>
            </h1>
            <p className="prose-custom max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I believe great products and great places to work share the same foundation—a deep
              respect for the person behind the experience. My career has been built at the
              intersection of Product Strategy, Experience Design, and organizational transformation.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/about" className="bg-brand-500 text-white font-medium px-6 py-3 rounded-full hover:bg-brand-600 transition-colors">
                About Me
              </Link>
              <a href="#contact" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section className="bg-brand-500 text-white py-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map(({ emoji, stat, label }) => (
              <div key={label}>
                <div className="text-3xl mb-1">{emoji}</div>
                <div className="text-4xl font-bold mb-1">{stat}</div>
                <div className="text-brand-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-24">
          <p className="section-label">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map(({ title, description, icon }) => (
              <div key={title} className="card group">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="section-label">My Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The person behind the experience</h2>
              <div className="space-y-5 prose-custom">
                <p>Great experiences don&apos;t happen by accident. They are the result of deliberate thinking, empathy at scale, and teams that feel genuinely motivated to do their best work every day.</p>
                <p>My career began in Product and Experience Strategy, where I quickly learned that sustainable growth comes not from the shiniest feature set, but from deeply understanding the people you serve—and building organizations capable of serving them brilliantly over time.</p>
                <p>I&apos;ve had the privilege of leading transformation and change across numerous organizations, always bringing the same conviction: <em>innovation without empathy is just noise.</em></p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="text-brand-500 font-semibold hover:text-brand-700 transition-colors">
                  More about me →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
          <div className="bg-brand-500 rounded-3xl p-12 text-center text-white">
            <p className="text-brand-100 text-sm font-semibold tracking-widest uppercase mb-3">Let&apos;s Connect</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to build something great?</h2>
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re looking to transform your organization, craft better customer experiences, or simply have a great conversation—I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:hello@raymondckearney.com" className="bg-white text-brand-500 font-semibold px-6 py-3 rounded-full hover:bg-brand-50 transition-colors">
                Send an Email
              </a>
              <a href="https://www.linkedin.com/in/raymondckearney/" target="_blank" rel="noopener noreferrer" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
