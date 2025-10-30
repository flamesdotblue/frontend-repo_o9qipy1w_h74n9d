import { Rocket, Cpu, Server, Shield, Cloud, Boxes, Network, GitBranch, Monitor, Check, Code, Smartphone, BrainCircuit, Trophy, Users, Star, Quote, Mail, Phone, MapPin } from 'lucide-react';

export default function Sections() {
  return (
    <div className="relative">
      {/* Quick Links to Verticals */}
      <section className="bg-gradient-to-b from-black to-black/95 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white">Three ways we power your growth</h2>
          <p className="mt-3 text-center text-gray-300 max-w-3xl mx-auto">Choose a fast VPS, architect your private cloud, or partner with our senior engineers to build your next product.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#vps" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/40 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-purple-400" />
                  <h3 className="text-white font-semibold">VPS Hosting</h3>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-purple-300">Starting $6/mo</span>
              </div>
              <p className="mt-3 text-gray-300 text-sm">SSD storage, full root access, 99.9% uptime, and instant scaling.</p>
            </a>

            <a href="#cloud" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/40 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Cloud className="h-5 w-5 text-blue-400" />
                <h3 className="text-white font-semibold">Custom Cloud</h3>
              </div>
              <p className="mt-3 text-gray-300 text-sm">Private clouds, load balancing, Kubernetes, and 24/7 monitoring.</p>
            </a>

            <a href="#software" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/40 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-teal-300" />
                <h3 className="text-white font-semibold">Software Development</h3>
              </div>
              <p className="mt-3 text-gray-300 text-sm">Web, mobile, API, DevOps, and AI integration from idea to launch.</p>
            </a>
          </div>
        </div>
      </section>

      {/* VPS Plans */}
      <section id="vps" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">VPS Hosting</h2>
            <p className="mt-3 text-gray-300">High-performance virtual servers backed by SSD storage and global availability. Scale on-demand with full root access and enterprise-grade uptime.</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> SSD NVMe storage</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Full root access</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 99.9% uptime SLA</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> DDoS protection</li>
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', cpu: '1 vCPU', ram: '2 GB', ssd: '40 GB NVMe', bw: '2 TB', price: '$6/mo' },
              { name: 'Growth', cpu: '2 vCPU', ram: '4 GB', ssd: '80 GB NVMe', bw: '4 TB', price: '$12/mo', popular: true },
              { name: 'Pro', cpu: '4 vCPU', ram: '8 GB', ssd: '160 GB NVMe', bw: '6 TB', price: '$24/mo' },
            ].map((p) => (
              <div key={p.name} className={`relative rounded-2xl border ${p.popular ? 'border-purple-500/50' : 'border-white/10'} bg-white/5 p-6 shadow-lg`}>
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs text-white shadow">Most Popular</span>
                )}
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-3xl font-bold text-white">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-purple-300" /> {p.cpu}</li>
                  <li className="flex items-center gap-2"><Server className="h-4 w-4 text-purple-300" /> {p.ram}</li>
                  <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-purple-300" /> {p.ssd}</li>
                  <li className="flex items-center gap-2"><Network className="h-4 w-4 text-purple-300" /> {p.bw}</li>
                </ul>
                <button className="mt-6 w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white hover:opacity-90 transition">Deploy</button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Includes 1 dedicated IPv4, 1 Gbps uplink, and instant OS re-installs. Custom configurations available on request.</p>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section id="cloud" className="border-t border-white/10 bg-gradient-to-b from-black to-black/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Custom Cloud Infrastructure</h2>
              <p className="mt-3 text-gray-300">We design and operate private clouds tailored to your compliance, security, and performance needs: from Kubernetes clusters to multi-region failover and GitOps automation.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-start gap-3"><Boxes className="h-5 w-5 text-blue-300" /> Container orchestration (Kubernetes)</div>
                <div className="flex items-start gap-3"><Network className="h-5 w-5 text-blue-300" /> Global load balancing & anycast</div>
                <div className="flex items-start gap-3"><GitBranch className="h-5 w-5 text-blue-300" /> CI/CD pipelines & GitOps</div>
                <div className="flex items-start gap-3"><Monitor className="h-5 w-5 text-blue-300" /> Observability & SRE monitoring</div>
              </div>

              <a href="#contact" className="mt-8 inline-flex rounded-md border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">Schedule a Cloud Architecture Call</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Use cases</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-purple-300" /> Fintech-grade security with network segmentation and HSM-backed secrets.</li>
                <li className="flex items-start gap-3"><BrainCircuit className="h-5 w-5 text-purple-300" /> AI startups running GPU workloads with auto-scaling and MLOps.</li>
                <li className="flex items-start gap-3"><Trophy className="h-5 w-5 text-purple-300" /> SaaS platforms with multi-tenant isolation and cost-optimized storage.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Dev */}
      <section id="software" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Software Development Services</h2>
              <p className="mt-3 text-gray-300">From idea to production: our teams ship web, mobile, and cloud-native software that scales. We integrate deeply with your workflow and deliver on outcomes.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2"><Code className="h-5 w-5 text-teal-300" /> Web Apps (React, Next.js)</div>
                <div className="flex items-center gap-2"><Smartphone className="h-5 w-5 text-teal-300" /> Mobile (Flutter, React Native)</div>
                <div className="flex items-center gap-2"><Server className="h-5 w-5 text-teal-300" /> APIs (Node.js, Python)</div>
                <div className="flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-teal-300" /> AI Integration (LLMs, CV, NLP)</div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Dedicated squads</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1"><GitBranch className="h-4 w-4" /> DevOps built-in</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1"><Trophy className="h-4 w-4" /> Delivery SLAs</span>
              </div>

              <a href="#contact" className="mt-8 inline-flex rounded-md border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">Build Your Software with Us</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Workflow</h3>
              <ol className="mt-4 space-y-3 text-gray-300 text-sm list-decimal list-inside">
                <li>Ideation and solution mapping</li>
                <li>Experience design and prototyping</li>
                <li>Agile development and QA</li>
                <li>Cloud-native deployment and monitoring</li>
              </ol>
              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold">Tech stack</h4>
                <p className="mt-2 text-sm text-gray-300">React, Next.js, Flutter, Node.js, Python, FastAPI, Postgres, MongoDB, Kubernetes, Terraform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-black/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-3xl font-bold text-white">Trusted by builders</h2>
          <p className="mt-2 text-center text-gray-300">Startups, SMBs, and enterprises across fintech, SaaS, and AI.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Justvy delivered a rock-solid Kubernetes platform with observability baked in. Our deploys went from hours to minutes.',
                name: 'CTO, Series-A SaaS',
              },
              {
                quote: 'Their VPS performance is phenomenal and support is instant. We migrated 40+ services with zero downtime.',
                name: 'Head of DevOps, Fintech',
              },
              {
                quote: 'Outstanding engineering culture — they feel like an extension of our team.',
                name: 'Founder, AI Startup',
              },
            ].map((t, i) => (
              <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <Star className="h-5 w-5 text-yellow-300" />
                <blockquote className="mt-3 text-gray-200">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-400">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white">About Justvy Global Innovations LLP</h2>
              <p className="mt-3 text-gray-300">Our mission is simple: empower innovators with world-class infrastructure and engineering. We combine deep cloud expertise with product thinking to help you ship faster and scale smarter.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-gray-400">Proactive Support</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">50+ </p>
                  <p className="text-sm text-gray-400">Successful Launches</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold">Why choose us</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2"><Shield className="h-5 w-5 text-purple-300" /> Security-first engineering</li>
                <li className="flex items-start gap-2"><Cpu className="h-5 w-5 text-purple-300" /> Performance at scale</li>
                <li className="flex items-start gap-2"><Users className="h-5 w-5 text-purple-300" /> Partner, not vendor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black to-black/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Talk to an expert</h2>
              <p className="mt-2 text-gray-300">Tell us about your needs and we’ll craft the best path forward.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Name" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  <input required type="email" placeholder="Email" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <select className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option className="bg-black">VPS Hosting</option>
                  <option className="bg-black">Custom Cloud</option>
                  <option className="bg-black">Software Development</option>
                </select>
                <textarea rows={4} placeholder="Tell us more about your requirements" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button className="w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium hover:opacity-90 transition">Send Message</button>
              </form>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@justvy.global</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru, IN</div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold">FAQ</h3>
              <div className="mt-4 space-y-4">
                {[
                  { q: 'Do you offer managed VPS?', a: 'Yes. We provide fully managed plans with 24/7 support, backups, and monitoring.' },
                  { q: 'Can you migrate our infrastructure?', a: 'Absolutely. We specialize in zero-downtime migrations with rollback plans.' },
                  { q: 'What industries do you work with?', a: 'Fintech, SaaS, eCommerce, and AI/ML startups are our core focus.' },
                ].map((f, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-white font-medium">{f.q}</p>
                    <p className="mt-2 text-sm text-gray-300">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
