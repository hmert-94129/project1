import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">FUEL GUARD</div>
            <p className="text-gray-300">
              Fuel Guard şirketlerin filolarında kullanılan araç ve gereçlerin yakıt depolarından yaşanabilecek her türlü yakıt hırsızlıklarını önlemeye yönelik çözümler sunmaktadır.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Araç Grupları */}
          <div>
            <h3 className="text-xl font-bold mb-4">Araç Grupları</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmet-detay/cekici-tir-arac-grubu-yakit-depo-guvenlik-urunleri/33" className="text-gray-300 hover:text-white transition-colors">
                  Çekici / Tır Araç Grubu
                </Link>
              </li>
              <li>
                <Link href="/hizmet-detay/kamyon-kamyonet-arac-gurubu-yakit-guvenlik-urunleri/34" className="text-gray-300 hover:text-white transition-colors">
                  Kamyon / Kamyonet Araç Grubu
                </Link>
              </li>
              <li>
                <Link href="/hizmet-detay/otobus-mibidus-minibus-arac-grubu-yakit-guvenlik-urunleri/36" className="text-gray-300 hover:text-white transition-colors">
                  Otobüs / Midibüs / Minibüs Araç Grubu
                </Link>
              </li>
              <li>
                <Link href="/hizmet-detay/is-makineleri-endustriyel-arac-grubu-yakit-guvenlik-urunleri/42" className="text-gray-300 hover:text-white transition-colors">
                  İş Makineleri / Endüstriyel Araç Grubu
                </Link>
              </li>
              <li>
                <Link href="/hizmet-detay/forklift-istif-makinalari-yakit-guvenlik-urunleri/45" className="text-gray-300 hover:text-white transition-colors">
                  Forklift / İstif Makinaları
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ürünler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/cekici/1" className="text-gray-300 hover:text-white transition-colors">
                  Çekici
                </Link>
              </li>
              <li>
                <Link href="/kategori/kamyon/2" className="text-gray-300 hover:text-white transition-colors">
                  Kamyon
                </Link>
              </li>
              <li>
                <Link href="/kategori/otobus/3" className="text-gray-300 hover:text-white transition-colors">
                  Otobüs
                </Link>
              </li>
              <li>
                <Link href="/kategori/is-makinalari/10" className="text-gray-300 hover:text-white transition-colors">
                  İş Makinaları
                </Link>
              </li>
              <li>
                <Link href="/kategori/jenerator/9" className="text-gray-300 hover:text-white transition-colors">
                  Jeneratör
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgilerimiz</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span>İkitelli Organize Sanayi Bölgesi Demirciler Sanayi Sitesi Tekno Park Sokak No:257/B - 34306 Başakşehir - İSTANBUL-TÜRKİYE</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <a href="tel:4442762" className="hover:text-secondary transition-colors">444 2 762</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:info@fuelguard.com.tr" className="hover:text-secondary transition-colors">info@fuelguard.com.tr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} FUEL GUARD FUEL SECURİTY SYSTEMS | Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
