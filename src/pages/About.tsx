import { ShieldCheck, MapPin, Heart, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 z-10"
          >
            <span className="inline-block py-1 px-3 bg-primary-container/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">ESTABLISHED 2010</span>
            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 text-on-background">
              A DECADE OF <span className="text-primary italic">DEDICATION</span> TO LEE COUNTY.
            </h1>
            <p className="text-xl text-secondary max-w-xl mb-10 leading-relaxed">
              At AB Tires, we don't just sell rubber; we build relationships. Since 2010, our family has been keeping the wheels turning for the Opelika and Auburn community with honest work and fair prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg">
                <ShieldCheck className="text-primary" size={20} />
                <span className="font-bold text-sm">Family Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg">
                <MapPin className="text-primary" size={20} />
                <span className="font-bold text-sm">Opelika Native</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl relative hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Shop Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFAWtuOndaLcdCTbWvWddvZStOPlJKe4EJCsT5yaQwhCaymyinuizyNOUIFbGLBOljiAEeqzUMUlg5TnpCYr1Nz1FGLNaCPb62NWbQftBJ4puSQw-POeA9nhmdEoN3cMa_PATdN_cdXsNFdJ7d3sP6CiF2nGxPN3jS10yL7_O7oxYQXs4cf9ZCKf1IK3SEV4U5ZfQvbsCLLklepj1WPW8FSgoyodokOj_C-lAxiX5XY1Z3gn_-wnFtadTOi_P7awdUqIhhQzITO54"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-headline text-2xl font-bold tracking-tight">The Original Shop</p>
                <p className="text-sm opacity-80 font-medium">Est. 2010 in Opelika, AL</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 hidden lg:block w-64 h-64 bg-primary-container rotate-12 -z-10 rounded-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 uppercase">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-primary-container"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm"
            >
              <Heart size={40} className="text-primary mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-4">Customer Care</h3>
              <p className="text-secondary leading-relaxed">We treat every vehicle as if our own family were behind the wheel. Your safety is our primary mission, not our secondary goal.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-inverse-surface p-8 rounded-xl shadow-lg md:scale-105 z-10"
            >
              <Handshake size={40} className="text-primary-container mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Honest Pricing</h3>
              <p className="text-zinc-400 leading-relaxed">No hidden fees, no unnecessary upsells. We provide clear, transparent quotes that respect your hard-earned dollar.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm"
            >
              <ShieldCheck size={40} className="text-primary mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-secondary leading-relaxed">From routine rotations to emergency replacements, the Auburn-Opelika community knows they can count on the AB Tires name.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    alt="Friendly Mechanic" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhtVPI0DEfOVfhYFhIlhn46jxUOkyfNGbxAM6wbDnz2H3Q7eXl_RNS1i1YF4Hx6g817SmmLt7gAKQymgKV7OtSzAozBGDbiN_BKgfi5tLKpI2AwS94pTG7fTwxhmqd8mjejsfKzqIPxb6Wy6-02VTrGsY7JjUs9tBRHNZyYMKlyS3iF1978I5ukLePbP0Kwt0wTfBkNgYe1ibZTrF-Ft__PJgQiGRFAgplVZ8bY0EWpuhZl5ZB09h1sdS4AMQzJjUZX1lV0h3XRIE"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-48 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container p-6">
                  <p className="font-headline text-xl font-bold text-center italic">"Quality Service is our Family Tradition."</p>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="h-48 bg-surface-container rounded-xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-4xl font-headline font-black text-primary">14+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Years in Lee County</p>
                  </div>
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    alt="Service Area" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASMBNtmp-J236VAlaGn0_6_shoZuIIomAleQHaSIZyKMca-8KjtJN6l38_swSHOzLVLKEatavtXa773TkURlTN3tUFixYOvEQOtOLs6iCSyQMRGxUrU8aZqwiTxJojfA13gZmJRKx6xnUtvs8VW35gj0HVMuI1bhNEPwAKIzsCKdTCQeELpIIZnTL1pKYKcrwObm1fWbUdttVX1bK3C8Pg_HPBd9KYO0NRSteGH3A-01TJrImJSV0amuaeCpALsaLm1Exdo6MFh_g"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-8 leading-tight uppercase">ROOTED IN THE <br/><span className="text-primary italic">HEART OF ALABAMA.</span></h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                Founded in 2010, AB Tires began as a small two-bay shop with a single goal: to provide the Lee County area with a tire service center that prioritized honesty over volume. 
              </p>
              <p>
                As a family-owned business, we understand the importance of a reliable vehicle. Whether you're commuting between Auburn and Opelika or heading out on a cross-country trip, your tires are the only thing between you and the road.
              </p>
              <p>
                Today, while we've grown in size and technology, our approach remains the same as it was on day one. We greet our neighbors by name, we offer fair pricing without the hassle, and we stand behind every bolt we torque.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-surface-container-highest"></div>
              <div className="font-headline text-xl font-bold italic text-primary">The AB Family</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-2xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-4xl lg:text-5xl font-black text-on-primary-container tracking-tighter mb-6 uppercase">READY FOR THE ROAD AHEAD?</h2>
              <p className="text-white/80 text-xl max-w-md">Stop by our shop today and experience the difference of local, family-owned service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-black text-lg hover:bg-surface-container-lowest transition-colors shadow-xl">BOOK SERVICE</button>
              <a
                className="border-2 border-white/40 text-white px-10 py-4 rounded-lg font-black text-lg hover:bg-white/10 transition-colors inline-block text-center"
                href="https://maps.google.com/?q=3509+Pepperell+Pkwy+Opelika+AL+36801"
                target="_blank"
                rel="noopener noreferrer"
              >VISIT US</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
