import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Users, Zap } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Product data (in a real app, this would come from an API or database)
  const products = {
    '1': {
      title: 'Automated Feeding System',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      description: 'State-of-the-art automated feeding system designed for optimal poultry nutrition management. This advanced system ensures precise feed distribution, reducing waste and maximizing growth efficiency.',
      features: [
        'Programmable feeding schedules',
        'Precise portion control',
        'Weather-resistant construction',
        'Easy maintenance and cleaning',
        'Energy-efficient operation',
        'Real-time monitoring capabilities'
      ],
      usage: [
        'Suitable for broiler and layer farms',
        'Capacity: 500-5000 birds per unit',
        'Automated timer-based feeding',
        'Reduces labor costs by up to 70%',
        'Improves feed conversion ratio',
        'Minimizes feed contamination'
      ],
      applications: [
        'Commercial poultry farms',
        'Broiler production facilities',
        'Layer hen operations',
        'Breeding farms',
        'Research facilities',
        'Small to large-scale operations'
      ],
      specifications: {
        'Capacity': '500-5000 birds',
        'Power Consumption': '2-5 kW',
        'Material': 'Galvanized steel',
        'Warranty': '3 years',
        'Installation': 'Professional setup included'
      }
    },
    '2': {
      title: 'Climate Control Unit',
      image: '/lovable-uploads/0998edbb-791f-48a3-b2da-2f8557834e77.png',
      description: 'Advanced climate control system that maintains optimal environmental conditions for poultry health and productivity. Features intelligent temperature and humidity management.',
      features: [
        'Automatic temperature regulation',
        'Humidity control system',
        'Air circulation management',
        'Smart sensor technology',
        'Remote monitoring capability',
        'Energy-efficient design'
      ],
      usage: [
        'Maintains optimal temperature range',
        'Controls humidity levels (60-70%)',
        'Ensures proper ventilation',
        'Reduces mortality rates',
        'Improves feed conversion',
        'Creates stress-free environment'
      ],
      applications: [
        'Broiler houses',
        'Layer facilities',
        'Hatcheries',
        'Nursery operations',
        'Breeding farms',
        'All-season farming'
      ],
      specifications: {
        'Temperature Range': '18-35°C',
        'Humidity Control': '40-80% RH',
        'Coverage Area': '1000-10000 sq ft',
        'Power Rating': '5-15 kW',
        'Control System': 'Digital PLC'
      }
    },
    '3': {
      title: 'Water Management System',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      description: 'Comprehensive water management solution ensuring clean, fresh water supply to poultry with automatic monitoring and filtration systems.',
      features: [
        'Automatic water level control',
        'Multi-stage filtration',
        'Water quality monitoring',
        'Leak detection system',
        'Pressure regulation',
        'Self-cleaning mechanism'
      ],
      usage: [
        'Provides fresh water 24/7',
        'Monitors water consumption',
        'Prevents water contamination',
        'Reduces water wastage',
        'Maintains optimal water pressure',
        'Alerts for maintenance needs'
      ],
      applications: [
        'Drinking water systems',
        'Cooling systems',
        'Cleaning operations',
        'Medication delivery',
        'All poultry farm types',
        'Indoor and outdoor setups'
      ],
      specifications: {
        'Flow Rate': '1-50 L/min',
        'Filtration': '5-micron precision',
        'Pressure Range': '1-5 bar',
        'Material': 'Food-grade plastic',
        'Monitoring': 'IoT-enabled sensors'
      }
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Equipment
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us for Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600">
              Discover what makes this equipment exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage, Applications, and Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Usage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-xl border-0 rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 flex items-center justify-center">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Usage & Benefits</h3>
                  <div className="space-y-3">
                    {product.usage.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-xl border-0 rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
                  <div className="space-y-3">
                    {product.applications.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-xl border-0 rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="border-b border-gray-100 pb-3">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-gray-900 text-sm">{key}</span>
                          <span className="text-gray-700 text-sm text-right ml-4">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Interested in This Product?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Get in touch with our experts for detailed specifications, pricing, and installation support.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;