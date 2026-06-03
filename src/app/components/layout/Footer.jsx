export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black">
      {/* subtle gradient line */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Left: Identity */}
          <div className="max-w-sm">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Your<span className="text-primary">Name</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Designing and building fast, thoughtful web experiences with a focus on
              clarity, performance, and detail.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            {[
              ["Home", "#home"],
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#contact"],
              ["Experience", "#experience"],
              ["Blog", "#blog"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-white/60 transition hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: Social */}
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-white/40">Connect</p>

            {[
              ["GitHub", "https://github.com"],
              ["LinkedIn", "https://linkedin.com"],
              ["Twitter", "https://twitter.com"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-white/60 transition hover:text-primary"
              >
                <span className="h-[6px] w-[6px] rounded-full bg-white/30 group-hover:bg-primary transition" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with
            <span className="text-primary">Next.js</span>
            <span>•</span>
            <span className="text-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}