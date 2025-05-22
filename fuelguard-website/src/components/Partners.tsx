import { motion } from 'framer-motion';
import Link from 'next/link';

const partners = [
  { id: 1, name: 'ASIS', image: '/images/partners/asis.png' },
  { id: 2, name: 'TURPAK', image: '/images/partners/turpak.png' },
  { id: 3, name: 'UND', image: '/images/partners/und.png' },
  { id: 4, name: 'OTOKAR', image: '/images/partners/otokar.png' },
  { id: 5, name: 'FORD OTOSAN', image: '/images/partners/ford-otosan.png' }
];

const Partners = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="section-title">
          <h2>Çözüm Ortaklarımız</h2>
          <p>Sektörün önde gelen firmaları ile işbirliği içindeyiz</p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-32 md:w-40 lg:w-48 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/referanslar" className="btn btn-primary">
            Referansları Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
