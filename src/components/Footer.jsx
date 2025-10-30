export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-white font-semibold">Justvy Global Innovations LLP</p>
            <p className="mt-2 text-gray-400">Powering innovation through infrastructure.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="#vps" className="hover:text-white">VPS Hosting</a></li>
              <li><a href="#cloud" className="hover:text-white">Custom Cloud</a></li>
              <li><a href="#software" className="hover:text-white">Software Development</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Legal</p>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>SLA & Security</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Justvy Global Innovations LLP. All rights reserved.</p>
          <p>Cloud. Code. Scale.</p>
        </div>
      </div>
    </footer>
  );
}
