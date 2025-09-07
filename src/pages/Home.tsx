import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Timeline from '@/components/Timeline';
import TextCarousel from '@/components/TextCarousel';
import SVRTimelineInnovation from '@/components/SVRTimelineInnovation';
import WorldMap from '@/components/WorldMap';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Partner logos data
  const partners = [
    { name: 'Urja Foods', image: 'https://image2url.com/images/1756551600684-7586cf1f-9283-4f2a-9cf9-25f307d17765.png' },
    { name: 'SNEHA', image: 'https://image2url.com/images/1756551669209-a4698236-c3d1-46e1-b204-80353267924e.png' },
    { name: 'Jayshree Group', image: 'https://image2url.com/images/1756551093188-c45488dd-b167-45b0-adef-c9a16c8ebe1c.png' },
    { name: "Venky's", image: 'https://image2url.com/images/1756551755468-d7fa2524-2843-4559-bc6d-1686344d81e3.png' },
    { name: 'Noveltech', image: 'https://image2url.com/images/1756551381242-3a7e73ad-4679-46c0-968c-5942a0c45500.png' },
    { name: 'MARS', image: 'https://image2url.com/images/1756551302605-1c42b978-e914-44fc-ae74-23a41fa9d03b.png' },
    { name: 'Suppa Chicken', image: 'https://image2url.com/images/1756551201535-8ed29530-40f1-4d7b-bff6-3e8837d2b494.png' },
    { name: 'Tata Coffee', image: 'https://image2url.com/images/1756551518521-554d901c-71b0-4575-b422-fd0aa88f55b7.png' },
    { name: 'Ovo Farm Fresh', image: 'https://image2url.com/images/1756720494029-d617758c-6a04-4765-b034-bfb07a047b44.png' },
    { name: 'Godrej Agrovet', image: 'https://image2url.com/images/1756551993060-6fb7d5c3-16cc-46d5-8a65-d3bbc81d3074.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://via.placeholder.com/1920x1080?text=Video+Placeholder"
          >
            <source src="https://cvukkqrjfrzvnytpcfjj.supabase.co/storage/v1/object/public/videos//SVR%20vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-white px-4 sm:px-8 w-full max-w-7xl mx-auto"
        >
          <div className="text-left max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Leading in Poultry Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed"
            >
              Providing innovative poultry equipment solutions for modern farming with cutting-edge technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg border-b-4 border-primary"
                  aria-label="Discover Our Story"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Text Carousel */}
      <section className="py-2 bg-white">
        <TextCarousel />
      </section>

      {/* Market Presence Section */}
      <section className="py-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
              {/* Content Side */}
              <div className="p-8 sm:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Global Reach
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Our <span className="text-primary">MARKET PRESENCE</span>
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-base sm:text-lg text-gray-700 font-medium">EXPORTING TO MIDDLE EASTERN COUNTRIES</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base sm:text-lg text-gray-700">Trusted by 500+ global clients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-base sm:text-lg text-gray-700">Premium quality equipment worldwide</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    SVR Poultry Equipments has established a strong international presence, delivering
                    cutting-edge poultry solutions across multiple continents with a focus on quality
                    and innovation.
                  </p>
                </motion.div>
              </div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="loop h-64 sm:h-80 lg:h-full"
              >
                <div className="h-full w-full loop overflow-hidden">
                  <WorldMap />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SVR Timeline Innovation */}
      <section className="py-8 bg-white">
        <SVRTimelineInnovation />
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-8 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-bold text-black bg-white/10 px-6 py-4 max-w-xl mx-auto rounded-2xl shadow-lg border-b-4 border-primary">
              Our Trusted Clients
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver excellence in poultry equipment and innovative farming solutions
            </p>
          </motion.div>

          {/* Sleek Scrolling Logo Carousel */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex gap-6 sm:gap-8 lg:gap-12 items-center"
              animate={{
                x: [0, -100 * partners.length],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-20 sm:w-24 lg:w-32 h-12 sm:h-14 lg:h-16 opacity-70 hover:opacity-100 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    filter: 'brightness(1.2)',
                  }}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;