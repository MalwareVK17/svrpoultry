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
      title: 'Feed Processing',
      image: '/lovable-uploads/819b4d78-1fce-4557-90af-e1526d3a60e2.png',
      description: 'Advanced feed mill equipment for optimal poultry nutrition processing. State-of-the-art technology ensures precise feed formulation and processing for maximum efficiency.',
      features: [
        'Automated processing',
        'Quality control systems',
        'High efficiency operation',
        'Precise mixing capabilities',
        'Temperature monitoring',
        'Batch tracking system'
      ],
      usage: [
        'Suitable for all poultry types',
        'Capacity: 1-10 tons per hour',
        'Automated feed formulation',
        'Reduces processing time by 60%',
        'Improves feed quality consistency',
        'Minimizes ingredient waste'
      ],
      applications: [
        'Commercial feed mills',
        'Large poultry farms',
        'Feed manufacturing plants',
        'Agricultural cooperatives',
        'Research facilities',
        'Custom feed production'
      ],
      specifications: {
        'Capacity': '1-10 tons/hour',
        'Power Consumption': '15-25 kW',
        'Material': 'Stainless steel',
        'Warranty': '5 years',
        'Installation': 'Complete setup included'
      }
    },
    '2': {
      title: 'Cage Systems',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      description: 'Modern, comfortable housing solutions for different poultry types. Designed with bird welfare and operational efficiency in mind.',
      features: [
        'Modular design',
        'Easy access for maintenance',
        'Durability tested',
        'Optimal space utilization',
        'Ventilation integration',
        'Easy cleaning system'
      ],
      usage: [
        'Houses 50-200 birds per tier',
        'Multi-tier configuration',
        'Easy bird management',
        'Reduces labor requirements',
        'Improves hygiene standards',
        'Maximizes space efficiency'
      ],
      applications: [
        'Layer hen operations',
        'Broiler production',
        'Breeder farms',
        'Commercial operations',
        'Small to medium farms',
        'Indoor farming systems'
      ],
      specifications: {
        'Capacity': '50-200 birds/tier',
        'Material': 'Galvanized wire',
        'Dimensions': 'Customizable',
        'Warranty': '10 years',
        'Installation': 'Technical support included'
      }
    },
    '3': {
      title: 'Feed Storage',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      description: 'Industrial feed storage and mixing systems for large-scale operations. Advanced preservation and distribution technology.',
      features: [
        'Temperature control',
        'Moisture management',
        'Easy loading system',
        'Automated mixing',
        'Quality preservation',
        'Contamination prevention'
      ],
      usage: [
        'Stores 10-500 tons capacity',
        'Maintains feed quality',
        'Automated dispensing',
        'Reduces storage losses',
        'Temperature monitoring',
        'Prevents pest infestation'
      ],
      applications: [
        'Large poultry farms',
        'Feed distribution centers',
        'Agricultural cooperatives',
        'Commercial operations',
        'Multi-farm facilities',
        'Industrial operations'
      ],
      specifications: {
        'Capacity': '10-500 tons',
        'Material': 'Galvanized steel',
        'Control': 'Automated systems',
        'Warranty': '7 years',
        'Monitoring': 'IoT-enabled'
      }
    },
    '4': {
      title: 'Feed Transportation',
      image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
      description: 'Mobile feed delivery systems for efficient farm operations. Advanced transportation solutions for feed distribution.',
      features: [
        'Large capacity storage',
        'Precision delivery',
        'Easy operation',
        'GPS tracking',
        'Load monitoring',
        'Weather protection'
      ],
      usage: [
        'Delivers 5-20 tons per trip',
        'Automated unloading',
        'Route optimization',
        'Reduces delivery time',
        'Prevents feed spillage',
        'Real-time tracking'
      ],
      applications: [
        'Multi-farm operations',
        'Feed distribution services',
        'Large commercial farms',
        'Regional feed supply',
        'Contract farming',
        'Agricultural logistics'
      ],
      specifications: {
        'Capacity': '5-20 tons',
        'Engine': 'Diesel powered',
        'Control': 'Digital systems',
        'Warranty': '3 years',
        'Tracking': 'GPS enabled'
      }
    },
    '5': {
      title: 'Industrial Setup',
      image: '/lovable-uploads/5741bd58-a88f-4110-9190-69ddea6d2670.png',
      description: 'Complete industrial poultry setup solutions. Comprehensive farm automation and management systems.',
      features: [
        'Scalable design',
        'Automated systems',
        'Quality assurance',
        'Integrated control',
        'Energy efficiency',
        'Remote monitoring'
      ],
      usage: [
        'Houses 10,000+ birds',
        'Fully automated operations',
        'Centralized control',
        'Reduces operational costs',
        'Improves productivity',
        'Ensures consistency'
      ],
      applications: [
        'Large commercial farms',
        'Industrial poultry operations',
        'Integrated facilities',
        'Export-oriented farms',
        'Corporate farming',
        'Research institutions'
      ],
      specifications: {
        'Capacity': '10,000+ birds',
        'Automation': 'Full integration',
        'Control': 'SCADA systems',
        'Warranty': '10 years',
        'Support': '24/7 technical'
      }
    },
    '6': {
      title: 'Lighting Systems',
      image: '/lovable-uploads/f3ef1077-50eb-4c98-9526-417e2431133c.png',
      description: 'LED lighting solutions optimized for poultry productivity. Advanced lighting technology for enhanced bird performance.',
      features: [
        'Energy saving technology',
        'Programmable cycles',
        'Long lifespan',
        'Spectrum optimization',
        'Dimming control',
        'Weather resistance'
      ],
      usage: [
        'Improves egg production',
        'Reduces energy costs by 70%',
        'Programmable lighting cycles',
        'Enhances bird behavior',
        'Reduces stress levels',
        'Optimizes growth rates'
      ],
      applications: [
        'Layer hen facilities',
        'Broiler houses',
        'Breeder operations',
        'All poultry types',
        'Indoor farming',
        'Climate-controlled facilities'
      ],
      specifications: {
        'Power': '20-100W per fixture',
        'Lifespan': '50,000+ hours',
        'Control': 'Smart dimming',
        'Warranty': '5 years',
        'Efficiency': '70% energy savings'
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