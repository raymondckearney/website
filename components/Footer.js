import Link from 'next/link';

const links = [
  { href: '/',          label: 'Home'      },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about-me',  label: 'About Me'  },
  { href: '/resume',    label: 'Resume'    },
  { href: '/contact',   label: 'Contact'   },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c3054] text-white">
      <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div>
          <p className="font-bold text-xl mb-2">Ray Kearney</p>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Innovative &amp; Strategic Executive Leader
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/raymondckearney/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:RaymondCKearney@gmail.com"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">Navigation</p>
          <ul className="space-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">Get in Touch</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="mailto:RaymondCKearney@gmail.com" className="hover:text-white transition-colors">
                RaymondCKearney@gmail.com
              </a>
            </li>
            <li>(202) 578-3695</li>
            <li>New York, NY</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-5xl mx-auto flex justify-between items-center text-white/30 text-xs">
        <span>© {new Date().getFullYear()} Raymond C. Kearney. All rights reserved.</span>
      </div>
    </footer>
  );
}
