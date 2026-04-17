import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const projects = {
  'new-app-design': {
    title: 'New App Design',
    heroTitle: "Enhancing Taco Bell's digital experience through app design",
    heroImage: '/portfolio/new-app-design.jpg',
    heroBg: '#1a0a2e',
    impact: [
      'Sold the organization on the vision for an enhanced experience for users and the design to elevate brand equity and cohesion.',
      'Oversaw Product Management, Product Design and UX research to design the app visually and experientially with a mix of internal resources and external consultant talent.',
      'Led strategy for the experience design and worked to ensure coordination with other channels and parts of the business to create functionality to enable a seamless experience for customers',
      'Designed and led multiple workshops to involve partners across all parts of the business to generate ideas for new and enhanced features and functionality within the app.',
      'Guided research to ensure designers were provided with necessary insights, feedback and testing throughout the design process',
      'Enhanced ways of working for the Product Management, Design and Engineering teams to foster stronger collaboration and coordination',
      'Devised an "innovation Circle" among cross functional leaders to infuse innovation and cutting-edge experience design through the app design process',
    ],
    moodImage: '/portfolio/new-app-mood-dark.jpg',
    galleryImages: [
      '/portfolio/phone-cantina.jpg',
      '/portfolio/phone-crunchy-taco.jpg',
      '/portfolio/phone-rewards-landing.jpg',
      '/portfolio/phone-decades.jpg',
      '/portfolio/phone-rewards.jpg',
    ],
    featuredImage: '/portfolio/phone-with-background-luxe.jpg',
    nextSlug: 'creating-a-design-system',
    nextTitle: 'Creating a Design System',
    prevSlug: null,
    prevTitle: null,
  },
  'creating-a-design-system': {
    title: 'Creating a Design System',
    heroTitle: 'Building a scalable design system for Taco Bell',
    heroImage: '/portfolio/creating-a-design-system.jpg',
    heroBg: '#2d1463',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'shaping-organizational-culture',
    nextTitle: 'Shaping Organizational Culture',
    prevSlug: 'new-app-design',
    prevTitle: 'New App Design',
  },
  'shaping-organizational-culture': {
    title: 'Shaping Organizational Culture',
    heroTitle: 'Shaping organizational culture at Taco Bell Digital & Tech',
    heroImage: '/portfolio/shaping-organizational-culture.jpg',
    heroBg: '#1c1c2e',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-wealth-management-firm',
    nextTitle: 'Global Wealth Management Firm',
    prevSlug: 'creating-a-design-system',
    prevTitle: 'Creating a Design System',
  },
  'global-wealth-management-firm': {
    title: 'Global Wealth Management Firm',
    heroTitle: 'Reimagining the wealth management client experience',
    heroImage: '/portfolio/global-wealth-management-firm.jpg',
    heroBg: '#0d2d1e',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'large-utility-provider',
    nextTitle: 'Large Utility Provider',
    prevSlug: 'shaping-organizational-culture',
    prevTitle: 'Shaping Organizational Culture',
  },
  'large-utility-provider': {
    title: 'Large Utility Provider',
    heroTitle: 'Designing the future of utility service experiences',
    heroImage: '/portfolio/large-utility-provider.jpg',
    heroBg: '#0a2540',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'national-financial-services',
    nextTitle: 'National Financial Services Organization',
    prevSlug: 'global-wealth-management-firm',
    prevTitle: 'Global Wealth Management Firm',
  },
  'national-financial-services': {
    title: 'National Financial Services Organization',
    heroTitle: 'Transforming student loan service through human-centered design',
    heroImage: '/portfolio/national-financial-services.jpg',
    heroBg: '#0a2540',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-food-retailer',
    nextTitle: 'Global Food Retailer',
    prevSlug: 'large-utility-provider',
    prevTitle: 'Large Utility Provider',
  },
  'global-food-retailer': {
    title: 'Global Food Retailer',
    heroTitle: 'Elevating the digital ordering experience for a global food retailer',
    heroImage: '/portfolio/global-food-retailer.jpg',
    heroBg: '#7b1200',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-snack-beverage-distributer',
    nextTitle: 'Global Snack and Beverage Distributer',
    prevSlug: 'national-financial-services',
    prevTitle: 'National Financial Services Organization',
  },
  'global-snack-beverage-distributer': {
    title: 'Global Snack and Beverage Distributer',
    heroTitle: 'Growing snack sales through a B2B digital platform',
    heroImage: '/portfolio/global-snack-beverage-distributer.jpg',
    heroBg: '#1a1a1a',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'experience-strategy-podcast',
    nextTitle: 'Experience Strategy and Design Podcast',
    prevSlug: 'global-food-retailer',
    prevTitle: 'Global Food Retailer',
  },
  'experience-strategy-podcast': {
    title: 'Experience Strategy and Design Podcast',
    heroTitle: 'eXperience unwrapped: behind the scenes of human centered experiences',
    heroImage: '/portfolio/experience-strategy-podcast.jpg',
    heroBg: '#c0192b',
    impact: [],
    galleryImages: [],
    featuredImage: null,
    nextSlug: null,
    nextTitle: null,
    prevSlug: 'global-snack-beverage-distributer',
    prevTitle: 'Global Snack and Beverage Distributer',
  },
};

export default function ProjectDetail() {
  const { query } = useRouter();
  const slug = query.slug;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="mb-4 text-gray-500">Project not found.</p>
        <Link href="/portfolio" className="underline text-sm">← Back to Portfolio</Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} — Ray Kearney</title>
        <meta name="description" content={project.heroTitle} />
      </Head>

      <main>

        {/* ── Hero ── */}
        <section className="flex flex-col md:flex-row" style={{ minHeight: '90vh' }}>
          <div
            className="w-full md:w-[55%] flex items-end p-10 xl:p-16"
            style={{ backgroundColor: project.heroBg, minHeight: '50vh' }}
          >
            <h1 className="text-3xl xl:text-5xl font-black text-white leading-tight max-w-lg">
              {project.heroTitle}
            </h1>
          </div>
          <div className="w-full md:w-[45%] overflow-hidden" style={{ minHeight: '50vh' }}>
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ minHeight: '50vh' }}
            />
          </div>
        </section>

        {/* ── Mood image + Impact ── */}
        {project.impact.length > 0 && (
          <section className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Left: mood/collage image */}
            <div className="w-full lg:w-[58%] bg-black overflow-hidden min-h-[360px]">
              {project.moodImage && (
                <img
                  src={project.moodImage}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ minHeight: '360px' }}
                />
              )}
            </div>

            {/* Right: My Impact bullets */}
            <div className="w-full lg:w-[42%] px-10 xl:px-14 py-12 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-5">My Impact:</h2>
              <ul className="space-y-4">
                {project.impact.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── Featured large image ── */}
        {project.featuredImage && (
          <section className="bg-black py-16 flex justify-center">
            <img
              src={project.featuredImage}
              alt=""
              className="max-h-[85vh] w-auto object-contain"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </section>
        )}

        {/* ── 5-phone gallery row ── */}
        {project.galleryImages.length > 0 && (
          <section className="py-12 px-6 xl:px-10">
            <div className="flex gap-4 justify-center overflow-x-auto">
              {project.galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-[480px] w-auto object-contain flex-shrink-0"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Prev / Next navigation ── */}
        <div className="flex items-center justify-between px-6 xl:px-10 py-10 border-t border-gray-100">
          <div>
            {project.prevSlug && (
              <Link
                href={`/portfolio/${project.prevSlug}`}
                className="text-base font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                <span className="text-xl">‹</span> {project.prevTitle}
              </Link>
            )}
          </div>
          <div>
            {project.nextSlug && (
              <Link
                href={`/portfolio/${project.nextSlug}`}
                className="text-base font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                {project.nextTitle} <span className="text-xl">›</span>
              </Link>
            )}
          </div>
        </div>

      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(projects).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects[params.slug] ?? null;
  return { props: { project } };
}
