
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    { name: 'AgroTech Solutions' },
    { name: 'FarmEquip Pro' },
    { name: 'Modern Farming Co.' },
    { name: 'Poultry Innovations' },
    { name: 'AgriSupply' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
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
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600 rounded-full group-hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{partner.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{partner.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Become a Partner
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
