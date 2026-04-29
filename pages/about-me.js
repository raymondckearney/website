import Head from 'next/head';

const photos = [
  { src: '/about-mountains.jpg', alt: 'Mountain adventure' },
  { src: '/about-diving.jpg',    alt: 'Diving with Hammerhead sharks' },
  { src: '/about-skiing.jpg',    alt: 'High-altitude adventure' },
];

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me — Ray Kearney</title>
        <meta name="description" content="Ray Kearney — full-time adventurer, world traveler, and lifelong learner." />
        <link rel="canonical" href="https://www.raymondckearney.com/about-me" />
      </Head>

      <main className="py-20">
        <div className="text-center max-w-3xl mx-auto px-6 mb-16">
          <h1 className="text-5xl sm:text-6xl font-black uppercase mb-8 tracking-tight">
            Full-Time Adventurer
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Outside of work I have an unquenchable desire to find new, exciting, and interesting
            experiences. I love to travel and have visited over 40 countries. I&apos;m fascinated by culture,
            language, people, and food. I have hiked and hang glided some of the worlds highest peaks,
            gone diving with Hammerhead sharks, cultivated a spreadsheet of over 500 restaurants, and
            studied 3 foreign languages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {photos.map(({ src, alt }) => (
            <div key={src} className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
