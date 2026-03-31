import { Wrench, Settings, Hammer, Scale, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-inverse-surface text-white py-24 mb-16 px-6">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfQee0Az6M9ivyexpPHU2NNHRwFufcgtnuaEDo7-sQwyAB1GVAlj1ouSXw6KhNDm2G7OkIkX6AbNh7U7vSP2tHjYAPO61cDA3EaLRXn039kQ0aJIVUB4PX2x4aqGxxXa3hdnfhbACC7Qx4hQG-4frszjJrVshtwNca8uPSQPTvm5y7eXLmzDstP8YF5ddE9tKHAieGOGakY28n1Adw0QxKj6vG1KoIQF75p-NlQUUKuI9bAx4OJGTcxXHgm83KboqtX6QuEbTqt00')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6"
          >
            PRECISION<br/><span className="text-primary-container">SERVICES.</span>
          </motion.h1>
          <p className="max-w-2xl text-lg text-zinc-300 font-light border-l-4 border-primary px-6">
            Our pit crew is ready. From performance tires to essential auto repair, we provide the industrial speed and mechanical precision your vehicle demands.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Service: New & Used Tires */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="p-12 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-primary font-black tracking-widest uppercase text-xs">Premium Inventory</span>
                  <h2 className="font-headline text-4xl font-bold mt-2">New & Used Tires</h2>
                </div>
                <Wrench size={48} className="text-zinc-200 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-zinc-600 mb-8 max-w-md">Access an elite selection of top-tier brands and sizes. Whether you need performance rubber or budget-friendly used options, we stock it all.</p>
              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded border-l-2 border-primary">
                  <p className="text-[10px] uppercase font-bold text-zinc-500">Service Speed</p>
                  <p className="font-headline font-bold">Quick Turnaround</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded border-l-2 border-primary">
                  <p className="text-[10px] uppercase font-bold text-zinc-500">Pricing Model</p>
                  <p className="font-headline font-bold">Affordable Rates</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <img 
                alt="Tire" 
                className="rotate-12 transform" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXVET2wnylMpCfwywtqwKAL_T1fm2b23G9oRmuDNbiB9S-yOlfGvWaFjsB7OKp036J8ZuFRb0CF-rXsNwc3J6RnDh9WDD81WKbxTN_2d8_jBR8AtPjv1uJIaZfmvqa9eBS8nY--58kv2FvQ1tCgQ5nZjmz110oHjDAzQCR3s4ekRsN9uIkVLQ9lLVgcN_-6XMcc_TQVZ0i_rMUSxrmyaTKGmuuofAChThYDN1TfCRTm34tKpKY6G_0TbTa600iLmqmJKzOxnONKPc"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Secondary Service: Wheel Alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-inverse-surface text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <span className="text-primary-container font-black tracking-widest uppercase text-xs">Precision Tooling</span>
              <h2 className="font-headline text-3xl font-bold mt-2">Wheel Alignment</h2>
              <p className="text-zinc-400 mt-4 text-sm">Extend your tire life and improve fuel efficiency with our laser-guided precision alignment systems.</p>
            </div>
            <div className="relative z-10 mt-8">
              <a href="tel:3343192417" className="inline-flex items-center space-x-2 text-primary-container font-bold italic bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                <span>Call</span>
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-30 text-8xl">
              <Settings size={96} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Basic Auto Repair */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col border-b-4 border-zinc-300 group hover:border-primary transition-colors"
          >
            <Hammer size={40} className="text-primary mb-6" />
            <h3 className="font-headline text-2xl font-bold mb-4">Basic Auto Repair</h3>
            <p className="text-sm text-zinc-600 mb-6">Expert maintenance including brakes, oil changes, and fluid checks. Keeping your machine running at peak performance.</p>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter pt-4 border-t border-zinc-200">
              <span className="text-zinc-500">Quick Turnaround</span>
              <span className="text-zinc-500">Affordable Pricing</span>
            </div>
          </motion.div>

          {/* Mounting & Balancing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col border-b-4 border-zinc-300 group hover:border-primary transition-colors"
          >
            <Scale size={40} className="text-primary mb-6" />
            <h3 className="font-headline text-2xl font-bold mb-4">Mounting & Balancing</h3>
            <p className="text-sm text-zinc-600 mb-6">Precision equipment ensures a smooth ride. We eliminate vibrations and protect your suspension from premature wear.</p>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter pt-4 border-t border-zinc-200">
              <span className="text-zinc-500">Quick Turnaround</span>
              <span className="text-zinc-500">Affordable Pricing</span>
            </div>
          </motion.div>

          {/* Flat Tire Repair */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col border-b-4 border-zinc-300 group hover:border-primary transition-colors"
          >
            <Wrench size={40} className="text-primary mb-6" />
            <h3 className="font-headline text-2xl font-bold mb-4">Flat Tire Repair</h3>
            <p className="text-sm text-zinc-600 mb-6">Fast and reliable repairs to get you back on the road safely. We inspect every puncture to ensure a permanent fix.</p>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter pt-4 border-t border-zinc-200">
              <span className="text-zinc-500">Quick Turnaround</span>
              <span className="text-zinc-500">Affordable Pricing</span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Banner */}
        <section className="pit-crew-gradient rounded-xl p-1">
          <div className="bg-inverse-surface rounded-[0.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-12 gap-2 h-full w-full rotate-12 scale-150">
                <div className="col-span-1 bg-white/20 h-full"></div>
                <div className="col-span-1 bg-transparent h-full"></div>
                <div className="col-span-1 bg-white/20 h-full"></div>
                <div className="col-span-1 bg-transparent h-full"></div>
                <div className="col-span-1 bg-white/20 h-full"></div>
              </div>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-black italic text-white mb-6 uppercase">Ready for the Pit Stop?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">Don't wait for a breakdown. Experience the AB Tires difference today. Fast, professional, and built for performance.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="tel:3343192417" className="w-full md:w-auto inline-flex justify-center px-10 py-4 pit-crew-gradient text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:brightness-110 transition-all">
                Call
              </a>
              <button className="w-full md:w-auto px-10 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-zinc-800 transition-all">
                View Specials
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
