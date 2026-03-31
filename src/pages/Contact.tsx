import { Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold uppercase tracking-tighter leading-none mb-6">
              Get Back <br/> <span className="text-primary italic">On The Road.</span>
            </h1>
            <p className="text-xl text-secondary max-w-xl mb-8 leading-relaxed">
              Precision service, performance rubber, and the speed your schedule demands. Visit our Opelika shop today.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square bg-surface-container-highest overflow-hidden transform skew-x-[-2deg] shadow-xl">
              <img 
                className="w-full h-full object-cover filter contrast-125 grayscale-[0.2]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6TPUQQTP0KhEnIRlwzgJRnN7vbm2gDF8XZdEXfjNB3MdspFeayHR-MplVwZShKXDGlnCutfbVbHHFCk5YJAv2YLigIQbemBQWPm94QmT9jCPo6gyVN4H-MoOfz0mXehBT_pAdHC32_BRkdDzyopOsBdsOuxQq5eMq0VObMoFGs37IQZFY5lKk9PNCe1Ong2n35PzOsvE1KSHK29og7e_lJpmwNpEutRpeMGsiwXpKJDKrRuvAv8teTcsg6j_NxPIi4i3sjqYPUHE"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-inverse-surface text-inverse-on-surface p-8 hidden md:block shadow-2xl">
              <span className="font-headline text-sm uppercase tracking-widest block mb-2 opacity-60">Instant Support</span>
              <div className="text-3xl font-black font-headline">(334) 319-2417</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-low overflow-hidden rounded-xl shadow-sm">
          {/* Phone */}
          <a className="group p-10 bg-surface-container-lowest hover:bg-primary transition-all duration-300" href="tel:3343192417">
            <Phone className="text-primary group-hover:text-white mb-6" size={40} />
            <h3 className="font-headline text-2xl font-bold uppercase mb-2 group-hover:text-white">Call Us</h3>
            <p className="text-xl font-headline font-medium group-hover:text-white">(334) 319-2417</p>
          </a>
          {/* Directions */}
          <a className="group p-10 hover:bg-primary transition-all duration-300" href="https://maps.google.com/?q=3509+Pepperell+Pkwy+Opelika+AL+36801" target="_blank" rel="noopener noreferrer">
            <MapPin className="text-primary group-hover:text-white mb-6" size={40} />
            <h3 className="font-headline text-2xl font-bold uppercase mb-2 group-hover:text-white">Visit Us</h3>
            <address className="not-italic text-lg leading-snug group-hover:text-white">
              3509 Pepperell Pkwy<br/>Opelika, AL 36801
            </address>
          </a>
          {/* Hours */}
          <div className="p-10 bg-surface-container">
            <Clock className="text-primary mb-6" size={40} />
            <h3 className="font-headline text-2xl font-bold uppercase mb-4">Shop Hours</h3>
            <ul className="space-y-2 font-headline font-medium">
              <li className="flex justify-between"><span>Mon-Fri</span> <span>8am - 6pm</span></li>
              <li className="flex justify-between"><span>Sat</span> <span>8am - 5pm</span></li>
              <li className="flex justify-between text-primary"><span>Sun</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact & Map Split */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm"
          >
            <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-8">Non-Urgent <span className="text-primary">Inquiries</span></h2>
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-headline font-black uppercase tracking-widest opacity-60">Your Name</label>
                  <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 font-headline px-4 rounded" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-black uppercase tracking-widest opacity-60">Phone Number</label>
                  <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 font-headline px-4 rounded" placeholder="(555) 000-0000" type="tel"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-black uppercase tracking-widest opacity-60">Email Address</label>
                <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 font-headline px-4 rounded" placeholder="john@example.com" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-black uppercase tracking-widest opacity-60">How can we help?</label>
                <textarea className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 font-headline px-4 rounded" placeholder="Describe your tire or service needs..." rows={4}></textarea>
              </div>
              <button className="w-full pit-crew-gradient text-white py-5 font-headline font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-lg flex items-center justify-center gap-2" type="submit">
                <Send size={20} />
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] relative overflow-hidden bg-surface-container-highest rounded-xl shadow-sm"
          >
            <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFiQW8BOquSQ8XpvwaSPhrlN6YKsanCNrWb84fDo2b-2oihFLa17-2cyoCGknFHzvBRa9-8HZMrZY8tul58RQJuf-ezU7rAs4A4M1Ehd_4m7Iye-yXU0XDI9qOqh8DeSpkLyiBB2rI58XBF718p47F8DV0lOtNdjGjXK5WZ8ydxhd4paBy33rpAgLvseDMGGdUpReeFB3ho21OMx2oqPqPlxth6mbYC_0RNlx-IxjifzVx0SCpP3dUX66R9v2C0e_-E8fOCmMw4sM"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 shadow-2xl relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <MapPin className="text-primary" size={64} fill="currentColor" />
                </div>
                <div className="text-center">
                  <h4 className="font-headline font-black uppercase tracking-tight text-xl mb-1">AB Tires Opelika</h4>
                  <p className="text-sm text-secondary font-medium mb-4">3509 Pepperell Pkwy</p>
                  <a className="inline-flex items-center gap-2 text-primary font-headline font-black uppercase tracking-widest text-xs" href="https://maps.google.com/?q=3509+Pepperell+Pkwy+Opelika+AL+36801" target="_blank" rel="noopener noreferrer">
                    Get Directions
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
