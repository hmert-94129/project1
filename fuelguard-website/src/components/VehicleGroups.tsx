import Link from 'next/link';
import { motion } from 'framer-motion';

const vehicleGroups = [
  {
    id: 1,
    title: 'Çekici / Tır Araç Grubu',
    image: '/images/vehicle-1.jpg',
    link: '/hizmet-detay/cekici-tir-arac-grubu-yakit-depo-guvenlik-urunleri/33'
  },
  {
    id: 2,
    title: 'Kamyon / Kamyonet Araç Grubu',
    image: '/images/vehicle-2.jpg',
    link: '/hizmet-detay/kamyon-kamyonet-arac-gurubu-yakit-guvenlik-urunleri/34'
  },
  {
    id: 3,
    title: 'Otobüs / Midibüs / Minibüs Araç Grubu',
    image: '/images/vehicle-3.jpg',
    link: '/hizmet-detay/otobus-mibidus-minibus-arac-grubu-yakit-guvenlik-urunleri/36'
  },
  {
    id: 4,
    title: 'İş Makineleri / Endüstriyel Araç Grubu',
    image: '/images/vehicle-4.jpg',
    link: '/hizmet-detay/is-makineleri-endustriyel-arac-grubu-yakit-guvenlik-urunleri/42'
  },
  {
    id: 5,
    title: 'Frigofirik / Soğutucu Araç Grubu',
    image: '/images/vehicle-5.jpg',
    link: '/hizmet-detay/frigofirik-sogutucu-arac-grubu-yakit-guvenlik-urunleri/43'
  },
  {
    id: 6,
    title: 'Forklift / İstif Makinaları',
    image: '/images/vehicle-6.jpg',
    link: '/hizmet-detay/forklift-istif-makinalari-yakit-guvenlik-urunleri/45'
  },
  {
    id: 7,
    title: 'Jeneratör / Sabit Tanklar',
    image: '/images/vehicle-7.jpg',
    link: '/hizmet-detay/jenerator-sabit-tanklarin-yakit-guvenlik-urunleri/48'
  },
  {
    id: 8,
    title: 'Tarım / Zirai Araç Grubu',
    image: '/images/vehicle-8.jpg',
    link: '/hizmet-detay/tarim-zirai-arac-grubu-yakit-depo-guvenlik-urunleri/50'
  }
];

const VehicleGroups = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Araç Grupları</h2>
          <p>Her türlü araç için özel tasarlanmış yakıt güvenlik çözümleri</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleGroups.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={vehicle.link} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div 
                    className="aspect-[4/3] bg-cover bg-center bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-bold p-4 w-full text-center transition-transform duration-300 group-hover:translate-y-[-8px]">
                      {vehicle.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/arac-gruplari" className="btn btn-outline">
            Tüm Araç Gruplarını Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VehicleGroups;
