import { motion } from 'framer-motion';
import Link from 'next/link';

const ConsultingHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[var(--bg-color)]">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 " />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Strategic Business Consulting for Digital Success
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 opacity-80"
          >
            Helping businesses make informed technology decisions and optimize their digital presence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/get-quote" 
              className="px-8 py-4 bg-[var(--logo-color)] text-white hover:opacity-90 transition-all font-medium"
            >
              Book a Free Consultation
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 border border-primary hover:bg-primary hover:text-secondary transition-all font-medium"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingHero;
