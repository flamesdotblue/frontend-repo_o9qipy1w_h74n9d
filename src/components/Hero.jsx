import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200">
            Justvy Global Innovations LLP
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Your Cloud. Your Power. Your Innovation.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Powering innovation through infrastructure. We deliver blazing-fast VPS hosting, bespoke cloud architectures, and elite software development teams — built for startups, SMBs, and enterprises.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#vps" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium shadow hover:opacity-90 transition">
              Deploy VPS Now <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:text-white backdrop-blur transition">
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
    </section>
  );
}
