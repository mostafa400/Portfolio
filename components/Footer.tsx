export default function Footer() {
  return (
    <footer className="bg-text-main dark:bg-black py-12">
      <div className="mx-auto max-w-[960px] px-6 lg:px-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Logo */}
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-primary">smart_toy</span>
            <span className="font-bold text-lg">mostafa</span>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            
            <a href="https://www.linkedin.com/in/mostafa-gaber-g5/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/mostafa400" className="hover:text-white transition-colors">GitHub</a>
            
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Mostafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}