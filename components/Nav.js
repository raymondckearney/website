import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/',         label: 'Home'    },
    { href: '/about',    label: 'About'   },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gray-900 font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">
          Ray Kearney
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${
                  router.pathname === href ? 'text-gray-900 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/raymondckearney/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-base"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/raymondckearney/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 font-medium text-sm"
          >
            LinkedIn →
          </a>
        </div>
      )}
    </header>
  );
}
