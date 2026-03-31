import { Link } from 'react-router-dom';
import { Facebook, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-zinc-900 dark:bg-black font-body text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-black italic text-white font-headline uppercase mb-6">AB Tires</div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Opelika's premier choice for performance tires and affordable used options. Driven by safety, powered by precision.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
              <Share2 size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Quick Links</h4>
          <Link to="/services" className="text-zinc-400 hover:text-red-500 transition-colors">Services</Link>
          <Link to="/about" className="text-zinc-400 hover:text-red-500 transition-colors">About</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-red-500 transition-colors">Contact</Link>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Legal</h4>
          <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">Terms</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Contact Us</h4>
          <p className="text-zinc-400">Opelika, AL 36801</p>
          <p className="text-red-500 font-bold">(334) 319-2417</p>
          <p className="text-zinc-500 text-xs mt-4 italic uppercase">Used tires Opelika AL specialists</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500">
        <p>© 2024 AB Tires Opelika. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
