import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import VehicleGroups from '../components/VehicleGroups';
import WhyChooseUs from '../components/WhyChooseUs';
import Partners from '../components/Partners';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <VehicleGroups />
      <Partners />
      <ContactCTA />
      <Footer />
    </main>
  );
}
