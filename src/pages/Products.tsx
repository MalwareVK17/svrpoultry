
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Auto Batching System',
      description: 'Advanced feed mill equipment for optimal poultry nutrition processing.',
      image: '/lovable-uploads/819b4d78-1fce-4557-90af-e1526d3a60e2.png',
      features: ['Automated processing', 'Quality control', 'High efficiency']
    },
    {
      id: 2,
      title: 'Cage Systems',
      description: 'Modern, comfortable housing solutions for different poultry types.',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      features: ['Modular design', 'Easy access', 'Durability tested']
    },
    {
      id: 3,
      title: 'Feed Storage',
      description: 'Industrial feed storage and mixing systems for large-scale operations.',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      features: ['Temperature control', 'Moisture management', 'Easy loading']
    },
    {
      id: 4,
      title: 'Feed Transportation',
      description: 'Mobile feed delivery systems for efficient farm operations.',
      image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
      features: ['Large capacity', 'Precision delivery', 'Easy operation']
    },
    {
      id: 5,
      title: 'Flat Bottom Silos',
      description: 'Large capacity storage solutions for bulk feed materials with flat bottom design.',
      image: '/lovable-uploads/4cd6c42b-8fd9-4a6d-bb0a-b2db84876889.png',
      features: ['Large storage capacity', 'Weather resistant', 'Easy maintenance']
    },
    {
      id: 6,
      title: 'Hopper Bottom Silos',
      description: 'Efficient feed storage with hopper bottom design for easy discharge.',
      image: 'https://www.annapurnaagronics.com/wp-content/uploads/2023/07/hopper-silo-estonia.jpg',
      features: ['Gravity discharge', 'Cone bottom design', 'Complete feed flow']
    },
    {
      id: 7,
      title: 'Weld Mesh',
      description: 'High-quality welded mesh panels for poultry housing and security fencing.',
      image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
      features: ['Corrosion resistant', 'Strong construction', 'Multiple sizes']
    },
    {
      id: 8,
      title: 'Tractor Tanker',
      description: 'Mobile feed cleaning and processing unit for on-site feed quality enhancement.',
      image: '/lovable-uploads/5d104031-b293-4f56-a4db-550853a91376.png',
      features: ['Mobile operation', 'Feed cleaning', 'Quality enhancement']
    },
    {
      id: 9,
      title: 'Bulk Feeding Tanker',
      description: 'Industrial bulk feeding system with automated delivery for large-scale operations.',
      image: '/lovable-uploads/b38e8ccd-bb1b-40f2-bc05-12579bc3472f.png',
      features: ['Bulk delivery', 'Automated systems', 'Industrial capacity']
    },
  ];

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
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive range of poultry equipment for modern farming operations
          </motion.p>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="text-primary text-6xl font-extrabold">50 ACRE</span>
                    <br />
                    <span className="text-2xl md:text-3xl">POULTRY FARM AT</span>
                    <br />
                    <span className="text-primary text-3xl md:text-4xl font-bold">CHINTHPALLY</span>
                  </h2>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                      ENTIRELY EXECUTED BY
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      SVR POULTRY EQUIPMENTS
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/lovable-uploads/ff822bca-19e0-449e-bd03-9eed1ecfb013.png" 
                      alt="50 Acre Poultry Farm at Chinthpally"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg">
                    50 Acres
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/product/${product.id}`}>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with industry leaders to deliver the best poultry equipment solutions
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

export default Products;
