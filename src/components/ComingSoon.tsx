export function ComingSoon() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Speed lines background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              95deg,
              transparent 0px,
              transparent 40px,
              oklch(0.7686 0.1647 70.0804 / 0.03) 40px,
              oklch(0.7686 0.1647 70.0804 / 0.03) 41px
            )
          `,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-primary/10" />

      {/* Radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, oklch(0.7686 0.1647 70.0804 / 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo / Brand */}
        <div className="hero-entrance opacity-0 mb-8">
          <h1
            className="text-primary font-display"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            SonicBeff
          </h1>
        </div>

        {/* Main Title */}
        <h2
          className="hero-entrance opacity-0 stagger-1 text-foreground text-center font-display"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Something fast is coming
        </h2>

        {/* Subtitle */}
        <p
          className="hero-entrance opacity-0 stagger-2 text-muted-foreground text-center max-w-xl mt-6 font-body"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        >
          Downhill hardware. Built by riders.
          <br />
          We are preparing something special for you.
        </p>

        {/* Animated indicator */}
        <div className="hero-entrance opacity-0 stagger-3 mt-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary font-body">
              Launching Soon
            </span>
          </div>
        </div>

        {/* Scroll indicator style chevrons */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="animate-bounce-slow">
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-14 w-8 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary animate-float-chevron-1 absolute top-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <svg
                  className="w-7 h-7 text-primary animate-float-chevron-2 absolute top-3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <svg
                  className="w-7 h-7 text-primary animate-float-chevron-3 absolute top-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
