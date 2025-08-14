
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Timeline from '@/components/Timeline';
import TextCarousel from '@/components/TextCarousel';

const Home = () => {
  const partners = [
    
    { name: 'Urja Foods', image: '/lovable-uploads/3a42b103-573c-43ea-a266-060717114838.png' },
    { name: 'SNEHA', image: '/lovable-uploads/26d0269c-c0a1-49f5-a5de-320f745dd9e5.png' },
    { name: 'Jayshree Group', image: '/lovable-uploads/320b0afa-a43a-4bfd-9f02-a0b6ab233c2e.png' },
    { name: "Venky's", image: '/lovable-uploads/2674e87b-944a-4d24-b30d-1d12c30c4ee4.png' },
    { name: 'Noveltech', image: '/lovable-uploads/c22339be-6655-4fff-b67b-5b24f92160bf.png' },
    { name: 'MARS', image: '/lovable-uploads/27bbcfcc-cb27-4d72-9943-49419c904262.png' },
    { name: 'Suppa Chicken', image: '/lovable-uploads/ef3e7d0f-2ef4-402e-8070-977d9859a75c.png' },
    { name: 'Tata Coffee', image: '/lovable-uploads/6edd9b0e-1e6a-44ea-ad4f-378059a491c4.png' },
    { name: 'Ovo Farm Fresh', image: '/lovable-uploads/ce70d724-ff38-40bd-a99f-9f7d289b8d78.png' },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="https://cvukkqrjfrzvnytpcfjj.supabase.co/storage/v1/object/public/videos//SVR%20vid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-white px-8 w-full"
        >
          <div className="text-left max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Leading in Poultry Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
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
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </section>

      {/* Text Carousel */}
      <TextCarousel />

      {/* Market Presence Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[500px]">
              {/* Content Side */}
              <div className="p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Global Reach
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Our <span className="text-primary">MARKET PRESENCE</span>
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-lg text-gray-700 font-medium">EXPORTING TO MIDDLE EASTERN COUNTRIES</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">Trusted by 500+ global clients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">Premium quality equipment worldwide</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
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
  className="relative h-full"
>
  <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden rounded-r-3xl">
    <motion.video
      src="https://cvukkqrjfrzvnytpcfjj.supabase.co/storage/v1/object/public/videos/World_Map_Animation_With_Marked_Countries.mp4"
      alt="Global Market Presence Video"
      className="w-full h-full object-contain p-8"
      autoPlay
      loop
      muted
      playsInline
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
  </div>
</motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Enhanced Partners Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver excellence in poultry equipment and innovative farming solutions
            </p>
          </motion.div>

          {/* Auto-Scrolling Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -1500]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    whileHover={{ y: -10, scale: 1.1 }}
                    className="group flex-shrink-0 w-32 h-20"
                  >
                    <div className="h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-contain bg-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
