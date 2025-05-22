import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheck, FaInfoCircle } from 'react-icons/fa';

interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    images: string[];
    vehicleTypes: string[];
  };
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg mb-4"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition-all ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} - Görsel ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <FaShieldAlt className="text-primary mr-2" />
                  Ürün Özellikleri
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <FaInfoCircle className="text-primary mr-2" />
                  Faydaları
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Uyumlu Araç Tipleri</h3>
                <div className="flex flex-wrap gap-2">
                  {product.vehicleTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-neutral rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4442762" className="btn btn-primary">
                  Hemen Ara: 444 2 762
                </a>
                <a href="mailto:info@fuelguard.com.tr" className="btn btn-outline">
                  E-posta Gönder
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
