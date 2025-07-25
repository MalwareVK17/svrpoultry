
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Automatic Feeders',
      description: 'High-efficiency automated feeding systems for optimal poultry nutrition.',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      features: ['Automated scheduling', 'Portion control', 'Easy maintenance']
    },
    {
      id: 2,
      title: 'Water Systems',
      description: 'Advanced water delivery systems ensuring clean, fresh water supply.',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      features: ['Pressure regulation', 'Leak detection', 'Easy cleaning']
    },
    {
      id: 3,
      title: 'Ventilation Units',
      description: 'Climate control systems for optimal poultry house environment.',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      features: ['Temperature control', 'Air quality monitoring', 'Energy efficient']
    },
    {
      id: 4,
      title: 'Cage Systems',
      description: 'Modern, comfortable housing solutions for different poultry types.',
      image: '/lovable-uploads/0998edbb-791f-48a3-b2da-2f8557834e77.png',
      features: ['Modular design', 'Easy access', 'Durability tested']
    },
    {
      id: 5,
      title: 'Egg Collection',
      description: 'Automated egg collection systems for maximum efficiency.',
      image: '/lovable-uploads/0998edbb-791f-48a3-b2da-2f8557834e77.png',
      features: ['Gentle handling', 'Automated sorting', 'Reduced breakage']
    },
    {
      id: 6,
      title: 'Lighting Systems',
      description: 'LED lighting solutions optimized for poultry productivity.',
      image: '/lovable-uploads/0998edbb-791f-48a3-b2da-2f8557834e77.png',
      features: ['Energy saving', 'Programmable cycles', 'Long lifespan']
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
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {product.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with industry leaders to deliver the best poultry equipment solutions
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 w-max">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group flex-shrink-0 w-72"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-contain bg-white p-2"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">{partner.name}</h3>
                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-8">
              Interested in becoming a partner? Let's work together to revolutionize poultry farming.
            </p>
            <Link to="/become-partner">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Become a Partner
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
