import Head from 'next/head';
import Link from 'next/link';

const experience = [
  {
    title: 'Head of Digital Product',
    company: 'Taco Bell',
    period: 'May 2025 – Mar 2026',
    current: true,
  },
  {
    title: 'Head of Digital Product Design & Research',
    company: 'Taco Bell',
    period: 'Jun 2024 – May 2025',
  },
  {
    title: 'Director, Digital',
    company: 'Taco Bell',
    period: 'May 2023 – Jun 2024',
  },
  {
    title: 'User Experience Leader',
    company: 'Google',
    period: 'Mar 2021 – May 2023',
  },
  {
    title: 'Senior Manager, Experience Strategy & Design',
    company: 'PwC',
    period: '2018 – Feb 2021',
  },
  {
    title: 'Vice President, Customer Experience',
    company: 'PHEAA',
    period: 'Jan 2017 – 2018',
  },
  {
    title: 'Marketing Manager',
    company: 'Verizon',
    period: 'Jun 2015 – Jan 2017',
  },
  {
    title: 'Manager, Experience Strategy',
    company: 'PwC',
    period: 'Jan 2014 – Jun 2015',
  },
  {
    title: 'Senior Associate',
    company: 'PwC',
    period: 'Jan 2011 – Jan 2014',
  },
];

const education = [
  { degree: 'Master of Business Administration', school: 'Brigham Young University (BYU)' },
  { degree: 'Bachelor of Arts', school: 'Brigham Young University (BYU)' },
];

const skills = [
  'Experience Strategy',
  'Digital Product Strategy',
  'Executive Leadership',
  'Design Leadership',
  'Product Leadership',
  'Experience Design',
  'Digital Design',
  'XFN Leadership',
  'Innovation',
  'Collaboration',
  'Mentorship',
  'Consulting',
];

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume — Ray Kearney</title>
        <meta name="description" content="Professional resume of Ray Kearney — executive leader in digital product, experience strategy, and design." />
        <link rel="canonical" href="https://www.raymondckearney.com/resume" />
      </Head>

      <main className="pt-24">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="section-label">Resume</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Ray Kearney
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
            Executive leader at the intersection of digital product, experience strategy, and organizational transformation.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </section>

        {/* ── Experience + Skills sidebar ── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Timeline ── */}
            <div className="flex-1">
              <h2 className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-10">Work Experience</h2>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

                <ol className="space-y-10">
                  {experience.map(({ title, company, period, current }) => (
                    <li key={`${company}-${title}`} className="relative pl-9">
                      {/* Dot */}
                      <span className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${current ? 'bg-brand-500 border-brand-500' : 'bg-white border-gray-300'}`} />

                      <p className="text-xs text-gray-400 mb-1 font-medium">{period}</p>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug">{title}</h3>
                      <p className="text-brand-500 font-semibold text-sm mt-0.5">{company}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* ── Right column: Education + Skills ── */}
            <div className="lg:w-72 xl:w-80 space-y-12 lg:pt-9">

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map(({ degree, school }) => (
                    <div key={degree} className="border-l-2 border-gray-200 pl-4">
                      <p className="font-bold text-gray-900 text-sm leading-snug">{degree}</p>
                      <p className="text-gray-500 text-sm mt-1">{school}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-brand-500 mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-brand-500 py-20 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-brand-100 mb-8 leading-relaxed">
              I&apos;m always open to new challenges, opportunities, and conversations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:RaymondCKearney@gmail.com"
                className="inline-block bg-white text-brand-500 font-semibold px-8 py-3 rounded-full hover:bg-brand-50 transition-colors"
              >
                Get in Touch
              </a>
              <Link
                href="/portfolio"
                className="inline-block border border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
