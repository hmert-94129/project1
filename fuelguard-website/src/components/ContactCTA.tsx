import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-0 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Yakıt Güvenliği İçin Hemen Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-white/80 max-w-2xl">
              Araçlarınız ve ekipmanlarınız için en uygun yakıt güvenlik çözümlerini sunalım.
              Uzman ekibimiz size özel çözümler için hazır.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="tel:4442762" 
              className="btn bg-white text-secondary hover:bg-gray-100 flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              <span>444 2 762</span>
            </a>
            <Link 
              href="/iletisim" 
              className="btn bg-primary text-white hover:bg-primary-dark"
            >
              Hemen Teklif Alın
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
