export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Raymond C. Kearney. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/raymondckearney/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@raymondckearney.com" className="hover:text-gray-700 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
