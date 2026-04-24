import Head from 'next/head';
import Link from 'next/link';

const projects = [
  { slug: 'new-app-design',                    title: 'New App Design' },
  { slug: 'creating-a-design-system',          title: 'Creating a Design System' },
  { slug: 'shaping-organizational-culture',    title: 'Shaping Organizational Culture' },
  { slug: 'enhancing-collaboration',           title: 'Enhancing Collaboration' },
  { slug: 'global-wealth-management-firm',     title: 'Global Wealth Management Firm' },
  { slug: 'large-utility-provider',            title: 'Large Utility Provider' },
  { slug: 'national-financial-services',       title: 'National Financial Services Organization' },
  { slug: 'global-food-retailer',              title: 'Global Food Retailer' },
  { slug: 'global-snack-beverage-distributer', title: 'Global Snack and Beverage Distributer' },
  { slug: 'experience-strategy-podcast',       title: 'Experience Strategy and Design Podcast' },
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio — Ray Kearney</title>
        <meta name="description" content="Ray Kearney's portfolio of experience strategy, design, and organizational transformation work." />
        <link rel="canonical" href="https://www.raymondckearney.com/portfolio" />
      </Head>

      <main className="px-6 xl:px-10 py-10">
        <p className="text-sm text-gray-700 mb-8">Click on an image for more detail</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ slug, title }) => (
            <Link key={slug} href={`/portfolio/${slug}`} className="group block">
              <div className="overflow-hidden bg-gray-200 aspect-[4/3] w-full">
                <img
                  src={`/portfolio/${slug}.jpg`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h2 className="mt-3 text-base font-bold text-black">{title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
