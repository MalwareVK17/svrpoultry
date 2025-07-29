
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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

      {/* The SVR Journey of Innovation */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">The SVR Journey of Innovation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Over Four Decades of Engineering Excellence in Poultry Automation
            </p>
          </motion.div>

          {/* Era 1: Foundations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ERA 1: FOUNDATIONS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "1984",
                  title: "Engineering Foundations",
                  description: "Established as Sri Venkata Ramana Engineering Works, focusing on general engineering solutions.",
                  gradient: "from-blue-500 to-teal-500"
                },
                {
                  year: "1990",
                  title: "Poultry Entry",
                  description: "Entered the poultry equipment industry, manufacturing small-scale feeders and drinkers.",
                  gradient: "from-teal-500 to-green-500"
                },
                {
                  year: "1995",
                  title: "Manufacturing Expansion",
                  description: "Expanded manufacturing capabilities to include manual and semi-automated feeding systems.",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`w-24 h-32 bg-gradient-to-b ${milestone.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Era 2: The Automation Revolution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ERA 2: THE AUTOMATION REVOLUTION
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2000",
                  title: "SVR Transformation",
                  description: "Officially transitioned into SVR Poultry Equipment Manufacturing, specializing in poultry automation.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  year: "2005",
                  title: "Full Automation",
                  description: "Launched fully automated feeding and watering systems for poultry farms.",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  year: "2010",
                  title: "Auger Systems",
                  description: "Developed auger-based automatic feeding systems, enhancing efficiency for poultry farmers.",
                  gradient: "from-rose-500 to-orange-500"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`w-24 h-32 bg-gradient-to-b ${milestone.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Era 3: Scaling New Horizons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ERA 3: SCALING NEW HORIZONS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2011",
                  title: "Official Incorporation",
                  description: "SVR Poultry Equipments officially incorporated on January 24th.",
                  gradient: "from-orange-500 to-amber-500"
                },
                {
                  year: "2016",
                  title: "National Presence",
                  description: "Achieved milestone of serving clients across India, solidifying market presence.",
                  gradient: "from-amber-500 to-yellow-500"
                },
                {
                  year: "2017",
                  title: "Global Expansion",
                  description: "Began exporting equipment to international markets, including Angola and Ghana.",
                  gradient: "from-yellow-500 to-lime-500"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`w-24 h-32 bg-gradient-to-b ${milestone.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Era 4: Global Leadership & The Future */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ERA 4: GLOBAL LEADERSHIP & THE FUTURE
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2021",
                  title: "MSME Recognition",
                  description: "Recognized as a Micro Enterprise under MSME classification.",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  year: "2024",
                  title: "Continued Growth",
                  description: "Further expansion into new global markets, strengthening exports and New Fabrication unit setup.",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  year: "2025",
                  title: "Future Innovation",
                  description: "Expected: Launch of next-generation poultry automation systems and smart farm integration.",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`w-24 h-32 bg-gradient-to-b ${milestone.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Presence Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
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
                  <motion.img
                    src="/lovable-uploads/218c46a4-5748-48bf-a3f2-a4effd131ea4.png"
                    alt="Global Market Presence - World Map"
                    className="w-full h-full object-contain p-8"
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
