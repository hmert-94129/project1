import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Yakıt Depo Koruma Bloğu',
    description: 'Yakıt deposu boğazına takılarak olabilecek tüm müdahaleleri engeller.',
    image: '/images/product-1.jpg',
    link: '/urun/yakit-depo-koruma-blogu'
  },
  {
    id: 2,
    title: 'Şamandıra Probu Koruma Aparatı',
    description: 'Şamandıra probunun üst kısmında mühürlü kutu görevi görerek yakıt bağlantılarına müdahale edilmesini engeller.',
    image: '/images/product-2.jpg',
    link: '/urun/samandira-probu-koruma-aparati'
  },
  {
    id: 3,
    title: 'Şifreli Alt Tapa',
    description: 'Yakıt deposunun alt tahliye tapasının şifreli alt tapa ile değiştirilmesiyle birlikte oluşabilecek müdahaleler engellenir.',
    image: '/images/product-3.jpg',
    link: '/urun/sifreli-alt-tapa'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="section-title">
          <h2>Öne Çıkan Ürünlerimiz</h2>
          <p>Yakıt güvenliğinde en çok tercih edilen ürünlerimiz</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={product.link} className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center">
                  Detaylı Bilgi
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/urunler" className="btn btn-primary">
            Tüm Ürünleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
