
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const partners = [
    { name: 'SVR Poultry Equipments', image: '/lovable-uploads/14c420aa-68fa-4a3b-8536-49a777adb9cb.png' },
    { name: 'Urja Foods', image: '/lovable-uploads/3a42b103-573c-43ea-a266-060717114838.png' },
    { name: 'SNEHA', image: '/lovable-uploads/26d0269c-c0a1-49f5-a5de-320f745dd9e5.png' },
    { name: 'Jayshree Group', image: '/lovable-uploads/320b0afa-a43a-4bfd-9f02-a0b6ab233c2e.png' },
    { name: "Venky's", image: '/lovable-uploads/2674e87b-944a-4d24-b30d-1d12c30c4ee4.png' },
    { name: 'Noveltech', image: '/lovable-uploads/c22339be-6655-4fff-b67b-5b24f92160bf.png' },
    { name: 'MARS', image: '/lovable-uploads/27bbcfcc-cb27-4d72-9943-49419c904262.png' },
    { name: 'Suppa Chicken', image: '/lovable-uploads/ef3e7d0f-2ef4-402e-8070-977d9859a75c.png' },
    { name: 'Tata Coffee', image: '/lovable-uploads/6edd9b0e-1e6a-44ea-ad4f-378059a491c4.png' },
    { name: 'Ovo Farm Fresh', image: '/lovable-uploads/ce70d724-ff38-40bd-a99f-9f7d289b8d78.png' },
    { name: 'Agricultural Innovations', image: '/lovable-uploads/c682e269-7fd3-4922-854b-2ca7dc8de272.png' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/c0e0a7d9-ede8-493b-af47-80c74c7c7e91.png" 
            alt="SVR Poultry Equipments" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-white px-4 max-w-7xl mx-auto"
        >
          <div className="text-left max-w-3xl">
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

      {/* Our Equipment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Premium Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art machinery and fabrication solutions engineered for excellence and precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Laser Machine",
                description: "High-precision fiber laser cutting machine with advanced control systems for superior cutting quality and efficiency.",
                image: "/lovable-uploads/43dcfa7e-4dde-48fd-a316-b89e5febc6e4.png"
              },
              {
                title: "Bending Machine",
                description: "Professional hydraulic press brake with precision tooling for accurate bending and forming operations.",
                image: "/lovable-uploads/05fe50de-992b-4cd7-bdd4-691f84847027.png"
              },
              {
                title: "CNC Lathe Machine",
                description: "Computer-controlled lathe machine delivering exceptional precision in turning and machining operations.",
                image: "https://www.focus-cnc.com/web/image/product.template/20/image_1024?unique=d4b959d"
              },
              {
                title: "Laser Machine HSG",
                description: "Advanced laser cutting system with high-speed processing capabilities for industrial applications.",
                image: "/lovable-uploads/96f80145-67f7-4ecf-9009-d039c9cccbf6.png"
              },
              {
                title: "Bending Machine AccurPress",
                description: "Heavy-duty press brake machine designed for high-volume production with consistent accuracy.",
                image: "/lovable-uploads/ddfd06fb-d157-42f0-86ae-f79a57a46334.png"
              },
              {
                title: "Automatic Weldmesh Machine",
                description: "Fully automated welding system for producing high-quality mesh products with exceptional consistency.",
                image: "/lovable-uploads/13e2ede7-e2d9-4e79-9598-071ccf2a9a91.png"
              }
            ].map((equipment, index) => (
              <motion.div
                key={equipment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl overflow-hidden">
                  <div className="aspect-video overflow-hidden rounded-t-3xl">
                    <img 
                      src={equipment.image} 
                      alt={equipment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{equipment.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{equipment.description}</p>
                    <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
                  x: [0, -1800, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    whileHover={{ y: -15, scale: 1.05 }}
                    className="group flex-shrink-0 w-80"
                  >
                    <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl overflow-hidden">
                      <CardContent className="p-8 text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                          <img 
                            src={partner.image} 
                            alt={partner.name}
                            className="w-full h-full object-contain bg-white p-3"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-xl leading-tight">{partner.name}</h3>
                        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </CardContent>
                    </Card>
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
