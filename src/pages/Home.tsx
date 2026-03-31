import { Phone, Zap, DollarSign, Package, CheckCircle, User, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-inverse-surface">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Automotive Shop" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW0FLNhMmnCfZ3Q_UfqAFxG0ErugkEDejxQzKnCZzXb64yTfyaPGJiK9yeByjCNw-Ev0IVURFIMorzHe6oe5JQUIUSBKjlmThxlbpTrl27ttuFZ-Y3kK71wFa07vtNkSOT93be5rC2e7rlvDrR90guEYBByTzUHMcdWr-B_av0LYDapMLz2xFHadgdfBfREn-QWYEKIoXb-We5UWVxpe9NG4ttAjoy1bV1E1GQoG569LQUK0JPF7K3GS5fzi24uwM_7KlmMno35Bs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 z-10"
          >
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6 uppercase italic">
              Fast, Affordable <br/>
              <span className="text-primary-container">Tire Service</span> <br/>
              in Opelika
            </h1>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim max-w-2xl mb-10 font-light leading-relaxed">
              Quality tires at unbeatable prices. In and out in <span className="text-white font-bold border-b-2 border-primary-container">under an hour.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:3343192417"
              >
                <Phone size={24} className="mr-2" />
                <a href="tel:3343192417" className="inline-flex items-center space-x-2 text-primary-container font-bold italic bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                <span>Call</span>
              </a>
              </a>
              <a 
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-highest text-on-surface font-black rounded-lg text-lg uppercase tracking-widest hover:bg-white transition-all" 
                href="https://maps.google.com/?q=3509+Pepperell+Pkwy+Opelika+AL+36801"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-secondary-fixed-dim">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-primary border-2 border-inverse-surface flex items-center justify-center text-[10px] text-white font-bold">5.0</span>
              </div>
              <span className="text-sm font-medium tracking-widest uppercase">Trusted by 500+ local drivers</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="relative z-20 transform translate-x-12 translate-y-12">
              <img 
                alt="Performance Tire" 
                className="w-full h-auto drop-shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC-1nDI0yIgh9nWuTbblcHr_IuwYEf0H0XsO1rfsTlimKa19gI6ootw26HAYzNsiSoNVY8CeEXm0DFquEq42MH6UKmmHccIGIt3SxCX6YcikR9NcEUIn-Oy-vgCU93mXhQmYvx0a-OCksoKuTpL9d0evrVf6L_cb1Ylyck1yVLQ2U1FGSpZD2bc_TyvnGjJNf0Shlh4P7RJoTatfnxslXpDOoUhdrA6bGw5u6PV552f6K8VKJpC7L0Q4xWNlFvi2u3fRqwvS69mts"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* SEO Banner */}
      <div className="bg-surface-container py-4 overflow-hidden border-y border-outline-variant/10">
        <div className="flex whitespace-nowrap animate-pulse items-center gap-12 text-on-surface-variant font-headline font-bold uppercase tracking-[0.3em] text-xs px-6">
          <span>Tire shop Opelika AL</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span>Used tires Opelika</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span>Wheel Alignment</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span>Brake Service</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span>Flat Tire Repair</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          <span>Opelika's Best Tire Shop</span>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-10 bg-surface-container-lowest rounded-xl shadow-sm border-b-4 border-transparent hover:border-primary-container transition-all"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-lg text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <Zap size={32} />
              </div>
              <h3 className="font-headline text-2xl font-black uppercase mb-4">Fast Service</h3>
              <p className="text-secondary leading-relaxed">Time is money. Our pit-crew inspired team gets you in, serviced, and back on the road in under 60 minutes. Guaranteed.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-10 bg-surface-container-lowest rounded-xl shadow-sm border-b-4 border-transparent hover:border-primary-container transition-all"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-lg text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <DollarSign size={32} />
              </div>
              <h3 className="font-headline text-2xl font-black uppercase mb-4">Affordable Pricing</h3>
              <p className="text-secondary leading-relaxed">No hidden fees. Just honest, transparent pricing on the best new and used tires in the Opelika-Auburn area.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-10 bg-surface-container-lowest rounded-xl shadow-sm border-b-4 border-transparent hover:border-primary-container transition-all"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-lg text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <Package size={32} />
              </div>
              <h3 className="font-headline text-2xl font-black uppercase mb-4">Wide Selection</h3>
              <p className="text-secondary leading-relaxed">From economy to high-performance. We stock all major brands and a huge inventory of certified used tires for any budget.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-inverse-surface overflow-hidden">
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <img 
            alt="Tire Inventory" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Nmfue8-YVllWDldk2yQ9vHjU50jf0Jm4h1nu21RybOH5nl-OYj9fCJspvSo2cKDq4P7hDV8GDtqIa_sj_hfy5uvGNyfSxNSzJkQgM7vp8-mLsDTzsBWRpoDFFBM9Iicfn_80jozk_UAdy970a-_RIpqPagFRlHrmVvOd7QyARaFXCwSWklEV17x3bAjetJlgbxw_7nwyTCbY5rF3HGZ0dzCE4arIcLDB-1ub6-u9kH1_dptv4iIi5LIp16YCca-l8jIL1tE5E6w"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="p-12 lg:p-24 flex flex-col justify-center">
          <span className="text-primary-container font-headline font-bold tracking-[0.2em] uppercase mb-4">Our Commitment</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">Expert Hands. <br/>Quality Rubber.</h2>
          <div className="space-y-6 text-secondary-fixed-dim text-lg">
            <p>AB Tires has been serving the Opelika community for years. We aren't just another tire shop; we're your local pit crew. We specialize in providing the highest quality new and used tires that ensure your safety without breaking the bank.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary-container" size={24} />
                <span>Certified Safety Inspections</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary-container" size={24} />
                <span>Modern Alignment Technology</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary-container" size={24} />
                <span>Expert Technicians</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <span className="text-6xl text-primary-container opacity-50">"</span>
          </div>
          <blockquote className="font-headline text-3xl md:text-5xl font-bold text-on-surface leading-tight mb-8 italic">
            "Quick, affordable, and got me back on the road fast."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
              <User className="text-primary" size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-on-surface uppercase tracking-wider">Local Customer</p>
              <p className="text-secondary text-sm">Verified Resident, Opelika AL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 px-6 bg-surface" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-4xl font-black uppercase mb-12 flex items-center gap-4">
                Visit Our <span className="text-primary">Shop</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start p-8 bg-surface-container-lowest rounded-xl shadow-sm">
                  <MapPin className="text-primary" size={32} />
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm text-secondary mb-2">Location</p>
                    <p className="text-xl font-headline font-bold">Opelika, AL 36801</p>
                    <a className="text-primary font-bold mt-2 inline-block border-b border-primary/20 hover:border-primary transition-all" href="#">Open in Google Maps</a>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-8 bg-surface-container-lowest rounded-xl shadow-sm">
                  <Clock className="text-primary" size={32} />
                  <div className="w-full">
                    <p className="font-bold uppercase tracking-widest text-sm text-secondary mb-2">Service Hours</p>
                    <div className="grid grid-cols-2 gap-y-2 text-on-surface font-medium">
                      <span>Mon - Fri</span> <span className="text-right">8:00 AM - 6:00 PM</span>
                      <span>Saturday</span> <span className="text-right">8:00 AM - 4:00 PM</span>
                      <span className="text-error">Sunday</span> <span className="text-right text-error font-bold">CLOSED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-high h-[500px] relative shadow-lg">
              <div className="absolute inset-0 grayscale opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  alt="Map location" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJalTacMqUFMDi0A9titfJhwV2tV2_X2c3reGo30TpMAL6OhHhy-8J2uaaUXGdGSMiLXFMMLLTz8uAl1j9spyo7oRoLi3Q1_eZoFEHkHd7dBbmFAjbm2v-LngHhXFwtWiu69vG3I1JKqMgp9H32TeIt-dQ1fElqusJNScZQ9hvkfzJ5if5mJy-hPHJVAUC_sujW9Mohzkz1hp3D1oHLE5pTGcXS1Y8Vm33DQ0q5fHIZjo0veDNh2heix-IsOhfRnHAGVbUqQAjOY"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border-l-4 border-primary">
                <p className="font-black font-headline uppercase text-zinc-900 mb-1">AB Tires Opelika</p>
                <p className="text-zinc-600 text-sm">The shop with the red roof. Look for our sign on the main strip!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase mb-8">Ready to Roll?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Get the best deal in Lee County. Walk-ins always welcome, or call to check inventory.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a className="px-10 py-5 bg-white text-primary font-black text-xl rounded-lg uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl" href="tel:3343192417">
              Call (334) 319-2417
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
