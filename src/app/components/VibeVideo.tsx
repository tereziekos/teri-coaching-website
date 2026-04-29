'use client';

interface VibeVideoProps {
  src: string;
}

export default function VibeVideo({ src }: VibeVideoProps) {
  return (
    <section className="vibe-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        loading="lazy"
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  );
}
