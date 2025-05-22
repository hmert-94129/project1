import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobeAmericas, FaUsers, FaIndustry, FaAward, FaHandshake } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaShieldAlt className="text-4xl text-secondary" />,
    title: '%100 Koruma',
    description: 'Yakıt hırsızlıklarına karşı tam koruma sağlayan patentli ürünler'
  },
  {
    id: 2,
    icon: <FaGlobeAmericas className="text-4xl text-secondary" />,
    title: '53 Ülkede Hizmet',
    description: 'Dünya genelinde 53 ülkede profesyonel çözümler'
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-secondary" />,
    title: '10.000+ Müşteri',
    description: 'Bireysel ve kurumsal 10.000\'den fazla memnun müşteri'
  },
  {
    id: 4,
    icon: <FaIndustry className="text-4xl text-secondary" />,
    title: 'Yerli Üretim',
    description: 'Türkiye\'nin ilk ve tek yakıt güvenlik sistemleri üreticisi'
  },
  {
    id: 5,
    icon: <FaAward className="text-4xl text-secondary" />,
    title: 'Ödüllü Ürünler',
    description: 'Sektöründe birçok ödül kazanmış yenilikçi ürünler'
  },
  {
    id: 6,
    icon: <FaHandshake className="text-4xl text-secondary" />,
    title: 'Kurumsal Çözümler',
    description: '852 kurumsal firmaya özel çözümler ve kesintisiz hizmet'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">Neden FuelGuard?</h2>
          <p className="text-gray-300">Yakıt güvenliğinde lider olmamızın nedenleri</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark p-6 rounded-lg hover:bg-primary-light transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="text-4xl font-bold text-secondary mb-2">53</div>
            <div className="text-lg">Ülke</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="text-4xl font-bold text-secondary mb-2">852</div>
            <div className="text-lg">Kurumsal Firma</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="text-4xl font-bold text-secondary mb-2">10.000+</div>
            <div className="text-lg">Bireysel Müşteri</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="text-4xl font-bold text-secondary mb-2">40+</div>
            <div className="text-lg">İş Ortağı</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
