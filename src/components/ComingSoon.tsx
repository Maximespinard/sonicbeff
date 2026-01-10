export function ComingSoon() {
  return (
    <div className="bg-background fixed inset-0 overflow-hidden" style={{ height: '100dvh' }}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Diagonal speed lines pattern - stronger on light background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
          -75deg, transparent 0px, transparent 50px,
          oklch(0.7686 0.1647 70.0804 / 0.08) 50px,
          oklch(0.7686 0.1647 70.0804 / 0.08) 51px
        )`,
        }}
      />

      {/* Animated speed streaks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="speed-streak speed-streak-1" />
        <div className="speed-streak speed-streak-2" />
        <div className="speed-streak speed-streak-3" />
      </div>

      {/* Radial glow from center - stronger golden presence */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, oklch(0.7686 0.1647 70.0804 / 0.15) 0%, transparent 55%)`,
        }}
      />

      {/* Mountain silhouette at bottom */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[35vh]"
        style={{
          background:
            'linear-gradient(to top, oklch(0.7686 0.1647 70.0804 / 0.12) 0%, transparent 100%)',
          clipPath:
            'polygon(0 100%, 0 70%, 12% 55%, 25% 75%, 40% 45%, 55% 65%, 70% 35%, 85% 55%, 100% 40%, 100% 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Brand Logo */}
        <div className="hero-entrance opacity-0">
          <h1
            className="text-primary font-display"
            style={{
              fontSize: 'clamp(4rem, 12vw, 7rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textShadow: '0 0 60px oklch(0.7686 0.1647 70.0804 / 0.4)',
            }}
          >
            SonicBeff
          </h1>
        </div>

        {/* Tagline with accent lines */}
        <div className="hero-entrance stagger-1 relative mt-2 opacity-0">
          <div className="bg-primary absolute top-1/2 -left-8 hidden h-0.5 w-6 -translate-y-1/2 sm:block" />
          <h2
            className="text-foreground font-display text-center"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Something fast is coming
          </h2>
          <div className="bg-primary absolute top-1/2 -right-8 hidden h-0.5 w-6 -translate-y-1/2 sm:block" />
        </div>

        {/* Subtitle */}
        <p
          className="hero-entrance stagger-2 text-muted-foreground font-body mt-8 max-w-lg text-center tracking-wide opacity-0"
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
        >
          Downhill hardware. Built by riders.
          <br />
          We are preparing something special for you.
        </p>

        {/* Status Badge */}
        <div className="hero-entrance stagger-3 mt-12 opacity-0">
          <div className="border-primary/40 bg-primary/10 animate-pulse-glow flex items-center gap-3 border px-6 py-3">
            <span className="bg-primary h-2 w-2 animate-pulse" />
            <span className="font-display text-primary text-sm tracking-[0.3em] uppercase">
              Launching Soon
            </span>
          </div>
        </div>
      </div>

      {/* Corner accent lines */}
      <div className="bg-primary/40 hero-entrance absolute top-8 left-8 h-0.5 w-16 opacity-0" />
      <div className="bg-primary/40 hero-entrance absolute top-8 left-8 h-16 w-0.5 opacity-0" />
      <div className="bg-primary/40 hero-entrance absolute right-8 bottom-8 h-0.5 w-16 opacity-0" />
      <div className="bg-primary/40 hero-entrance absolute right-8 bottom-8 h-16 w-0.5 opacity-0" />
    </div>
  )
}
