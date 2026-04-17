export default function Footer() {
  return (
    <footer className="bg-[#1c3054] py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/raymondckearney/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a
          href="mailto:RaymondCKearney@gmail.com"
          className="text-white hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
          </svg>
        </a>
      </div>
      <p className="text-white/40 text-xs">© {new Date().getFullYear()} Raymond C. Kearney</p>
    </footer>
  );
}
