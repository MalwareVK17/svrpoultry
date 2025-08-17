import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Users, Zap, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const SubProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sub-product data with detailed information
  const subProducts = {
    // Cages Category
    '1001': {
      title: 'Chicks Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Specially designed cage systems for young chicks with optimal spacing, temperature control, and comfort features to ensure healthy growth during the critical early stages.',
      features: [
        'Optimal spacing for young chicks',
        'Temperature control systems',
        'Easy cleaning mechanisms',
        'Ventilation integration',
        'Safety features for small birds',
        'Growth-adaptive design'
      ],
      usage: [
        'Suitable for 0-6 week old chicks',
        'Capacity: 30-50 chicks per tier',
        'Temperature monitoring',
        'Humidity control',
        'Easy access for care',
        'Reduces mortality rates'
      ],
      applications: [
        'Hatchery operations',
        'Brooding facilities',
        'Commercial chick rearing',
        'Breeding programs',
        'Research facilities',
        'Small-scale farming'
      ],
      specifications: {
        'Age Range': '0-6 weeks',
        'Capacity': '30-50 chicks/tier',
        'Material': 'Coated wire mesh',
        'Warranty': '8 years',
        'Installation': 'Complete setup included'
      }
    },
    '1002': {
      title: 'Layer Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Professional layer cages designed for maximum egg production and bird welfare with advanced nest boxes, feeding systems, and easy egg collection.',
      features: [
        'Nest box integration',
        'Automatic egg collection',
        'Feeding system optimization',
        'Water nipple placement',
        'Perching areas',
        'Manure management'
      ],
      usage: [
        'Houses 4-8 layers per cage',
        'Maximizes egg production',
        'Easy egg collection',
        'Reduces feed wastage',
        'Improves hygiene',
        'Labor-efficient operation'
      ],
      applications: [
        'Commercial egg production',
        'Layer farms',
        'Breeding operations',
        'Organic egg farms',
        'Free-range facilities',
        'Integrated poultry farms'
      ],
      specifications: {
        'Capacity': '4-8 layers/cage',
        'Material': 'Galvanized wire',
        'Nest Boxes': 'Integrated design',
        'Warranty': '10 years',
        'Egg Collection': 'Automated system'
      }
    },
    '1003': {
      title: 'Grower Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Robust grower cages that provide ample space for developing birds with adjustable features to accommodate growth from 6 weeks to maturity.',
      features: [
        'Expandable space design',
        'Growth-adaptive feeding',
        'Robust construction',
        'Easy bird handling',
        'Ventilation optimization',
        'Space efficiency'
      ],
      usage: [
        'Suitable for 6-20 week birds',
        'Adjustable cage height',
        'Growth monitoring',
        'Feed conversion tracking',
        'Weight management',
        'Health monitoring'
      ],
      applications: [
        'Grower operations',
        'Pullet rearing',
        'Broiler growing',
        'Replacement stock',
        'Commercial growing',
        'Integrated operations'
      ],
      specifications: {
        'Age Range': '6-20 weeks',
        'Capacity': '15-25 birds/cage',
        'Material': 'Heavy-duty galvanized',
        'Warranty': '12 years',
        'Adjustability': 'Growth-adaptive'
      }
    },
    '1004': {
      title: 'Water Nipples',
      category: 'Cage Accessories',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'High-quality water nipples ensuring clean and efficient water supply for birds with leak-proof design and easy maintenance features.',
      features: [
        'Leak-proof design',
        'Easy activation',
        'Corrosion resistant',
        'Multiple flow rates',
        'Easy installation',
        'Long-lasting durability'
      ],
      usage: [
        'Provides fresh water access',
        'Reduces water wastage',
        'Prevents contamination',
        'Easy bird activation',
        'Consistent flow rate',
        'Minimal maintenance'
      ],
      applications: [
        'Poultry cage systems',
        'Waterer installations',
        'Automated watering',
        'Hygiene systems',
        'All cage types',
        'Retrofit installations'
      ],
      specifications: {
        'Flow Rate': '40-60 ml/min',
        'Material': 'Stainless steel',
        'Thread': 'Standard fitting',
        'Warranty': '5 years',
        'Installation': 'Universal mount'
      }
    },
    '1005': {
      title: 'PVC/Giffers',
      category: 'Cage Accessories',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Durable PVC components and giffers for reliable cage system operation with weather resistance and easy installation features.',
      features: [
        'Weather resistant PVC',
        'UV stabilized material',
        'Easy installation',
        'Chemical resistance',
        'Lightweight design',
        'Cost-effective solution'
      ],
      usage: [
        'Pipe connections',
        'System integration',
        'Weather protection',
        'Chemical compatibility',
        'Easy maintenance',
        'Long-term reliability'
      ],
      applications: [
        'Watering systems',
        'Feed distribution',
        'Ventilation systems',
        'Cage connections',
        'Plumbing applications',
        'System retrofits'
      ],
      specifications: {
        'Material': 'High-grade PVC',
        'Pressure Rating': 'Up to 150 PSI',
        'Temperature': '-10°C to 60°C',
        'Warranty': '10 years',
        'Standards': 'ISO certified'
      }
    },
    '1006': {
      title: 'Distribution Pipes',
      category: 'Cage Accessories',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        '/lovable-uploads/b43eae74-224b-4b97-9c97-fee060bfbce1.png',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Professional-grade pipes for water and feed distribution systems with corrosion resistance and optimal flow characteristics.',
      features: [
        'Corrosion resistant coating',
        'Optimal flow design',
        'Easy joint connections',
        'Pressure tested',
        'Food-grade materials',
        'Multiple diameter options'
      ],
      usage: [
        'Water distribution',
        'Feed transportation',
        'System connectivity',
        'Pressure maintenance',
        'Flow optimization',
        'System reliability'
      ],
      applications: [
        'Poultry watering systems',
        'Feed distribution networks',
        'Pneumatic systems',
        'Cleaning systems',
        'Ventilation ducting',
        'System integration'
      ],
      specifications: {
        'Material': 'Galvanized steel/PVC',
        'Diameter': '25mm to 150mm',
        'Pressure': 'Up to 200 PSI',
        'Warranty': '15 years',
        'Standards': 'Food-grade certified'
      }
    },
    '1007': {
      title: 'Weld Mesh Panels',
      category: 'Weld Mesh',
      image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
      images: [
        'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
        '/lovable-uploads/77413970-4bb0-40b6-943d-ec5d851a92aa.png',
        '/lovable-uploads/e1fab63a-52b7-4282-86b5-75c0b4a79b15.png'
      ],
      description: 'Strong welded mesh panels with corrosion resistance and multiple size options for versatile poultry housing applications.',
      features: [
        'High-strength welded joints',
        'Corrosion resistant coating',
        'Multiple mesh sizes',
        'Easy installation',
        'Weather resistance',
        'Custom configurations'
      ],
      usage: [
        'Poultry enclosures',
        'Security applications',
        'Cage construction',
        'Partition systems',
        'Boundary fencing',
        'Ventilation panels'
      ],
      applications: [
        'Poultry housing construction',
        'Farm security fencing',
        'Cage system components',
        'Boundary protection',
        'Industrial facilities',
        'Agricultural operations'
      ],
      specifications: {
        'Wire Gauge': '2.5-6mm',
        'Mesh Size': '25x25mm to 100x100mm',
        'Material': 'Galvanized steel',
        'Warranty': '8 years',
        'Coating': 'Hot-dip galvanized'
      }
    },
    '1008': {
      title: 'Chain Link Fencing',
      category: 'Weld Mesh',
      image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
      images: [
        'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
        '/lovable-uploads/77413970-4bb0-40b6-943d-ec5d851a92aa.png',
        '/lovable-uploads/e1fab63a-52b7-4282-86b5-75c0b4a79b15.png'
      ],
      description: 'Durable chain link fencing solutions for secure poultry enclosures with flexible installation and high security features.',
      features: [
        'Interlocked wire design',
        'Flexible installation',
        'High security rating',
        'Weather resistant',
        'Multiple heights available',
        'Easy maintenance'
      ],
      usage: [
        'Perimeter security',
        'Poultry enclosures',
        'Access control',
        'Predator protection',
        'Boundary marking',
        'Temporary fencing'
      ],
      applications: [
        'Poultry farm security',
        'Free-range enclosures',
        'Perimeter fencing',
        'Access control systems',
        'Predator protection',
        'Temporary installations'
      ],
      specifications: {
        'Wire Gauge': '2.5-4mm',
        'Mesh Size': '50x50mm diamond',
        'Height': '1m to 3m',
        'Warranty': '10 years',
        'Installation': 'Professional setup'
      }
    },
    // Feed Manufacturing Category
    '2001': {
      title: 'Rooter Feed Trolley',
      category: 'Feed Trolley',
      image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
      images: [
        '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
        '/lovable-uploads/37b19977-d765-4669-b6bc-c7d59a28d39f.png',
        '/lovable-uploads/4cd6c42b-8fd9-4a6d-bb0a-b2db84876889.png'
      ],
      description: 'Specialized rooter feed trolley systems for precise feed distribution with advanced mobility and capacity features.',
      features: [
        'Precision feed distribution',
        'Advanced mobility system',
        'Large capacity storage',
        'Easy maneuverability',
        'Dust-free operation',
        'Automated controls'
      ],
      usage: [
        'Mobile feed distribution',
        'Precise portion control',
        'Multi-location feeding',
        'Reduced labor requirements',
        'Consistent feed quality',
        'Time-efficient operation'
      ],
      applications: [
        'Large poultry farms',
        'Multi-building operations',
        'Commercial feeding',
        'Automated systems',
        'Feed distribution services',
        'Contract farming'
      ],
      specifications: {
        'Capacity': '500-2000 kg',
        'Mobility': 'Motorized system',
        'Control': 'Automated dispensing',
        'Warranty': '3 years',
        'Operation': 'Battery powered'
      }
    },
    '2002': {
      title: 'Garata Feed Trolley',
      category: 'Feed Trolley',
      image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
      images: [
        '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
        '/lovable-uploads/37b19977-d765-4669-b6bc-c7d59a28d39f.png',
        '/lovable-uploads/4cd6c42b-8fd9-4a6d-bb0a-b2db84876889.png'
      ],
      description: 'Advanced Garata feed trolley with enhanced mobility and capacity for efficient feed distribution in large-scale operations.',
      features: [
        'Enhanced mobility design',
        'High capacity storage',
        'Smart distribution system',
        'Remote operation capability',
        'Weather protection',
        'Easy maintenance access'
      ],
      usage: [
        'Large-scale feed distribution',
        'Remote operation control',
        'Weather-resistant operation',
        'High-volume capacity',
        'Precision feeding',
        'Automated scheduling'
      ],
      applications: [
        'Industrial poultry farms',
        'Large commercial operations',
        'Multi-site feeding',
        'Automated feeding systems',
        'Remote location feeding',
        'High-capacity operations'
      ],
      specifications: {
        'Capacity': '1000-3000 kg',
        'Mobility': 'Advanced drive system',
        'Control': 'Remote operation',
        'Warranty': '5 years',
        'Features': 'GPS tracking'
      }
    },
    '2003': {
      title: 'Feed Manufacturing Plants',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
        '/lovable-uploads/e6c1c0a4-2f52-437f-84d7-2104e8b0cc91.png',
        '/lovable-uploads/f2c1441c-8630-47f7-a4cc-284e064d2ee3.png'
      ],
      description: 'Comprehensive feed manufacturing plants with automated systems for large-scale feed production and quality control.',
      features: [
        'Complete manufacturing line',
        'Automated control systems',
        'Quality assurance integration',
        'Scalable production capacity',
        'Energy-efficient operation',
        'Real-time monitoring'
      ],
      usage: [
        'Large-scale feed production',
        'Multi-formula manufacturing',
        'Quality-controlled output',
        'Automated operations',
        'Continuous production',
        'Inventory management'
      ],
      applications: [
        'Commercial feed mills',
        'Industrial production',
        'Large-scale operations',
        'Multi-product facilities',
        'Export-oriented units',
        'Contract manufacturing'
      ],
      specifications: {
        'Capacity': '5-50 tons/hour',
        'Automation': 'Full PLC control',
        'Quality': 'ISO certified',
        'Warranty': '7 years',
        'Monitoring': 'Real-time systems'
      }
    },
    '2004': {
      title: 'Full Screen Grinder',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
        '/lovable-uploads/e6c1c0a4-2f52-437f-84d7-2104e8b0cc91.png',
        '/lovable-uploads/f2c1441c-8630-47f7-a4cc-284e064d2ee3.png'
      ],
      description: 'High-efficiency full screen grinder for optimal feed processing with advanced grinding technology and particle size control.',
      features: [
        'Full screen grinding technology',
        'Particle size control',
        'High efficiency operation',
        'Low energy consumption',
        'Easy screen replacement',
        'Dust collection system'
      ],
      usage: [
        'Fine particle grinding',
        'Uniform feed texture',
        'Energy-efficient processing',
        'Consistent output quality',
        'Reduced processing time',
        'Minimal maintenance'
      ],
      applications: [
        'Feed processing plants',
        'Grain processing',
        'Ingredient preparation',
        'Custom feed production',
        'Quality enhancement',
        'Industrial grinding'
      ],
      specifications: {
        'Capacity': '2-15 tons/hour',
        'Screen Size': '1-10mm',
        'Power': '22-132 kW',
        'Warranty': '3 years',
        'Efficiency': '95%+ grinding'
      }
    },
    '2005': {
      title: 'Precision Weighing Bins',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
        '/lovable-uploads/e6c1c0a4-2f52-437f-84d7-2104e8b0cc91.png',
        '/lovable-uploads/f2c1441c-8630-47f7-a4cc-284e064d2ee3.png'
      ],
      description: 'Precision weighing bins for accurate feed measurement and batching with advanced load cell technology and data logging.',
      features: [
        'High-precision load cells',
        'Data logging capability',
        'Automated batching',
        'Recipe management',
        'Quality control integration',
        'Remote monitoring'
      ],
      usage: [
        'Accurate ingredient weighing',
        'Batch composition control',
        'Recipe consistency',
        'Quality assurance',
        'Inventory tracking',
        'Production monitoring'
      ],
      applications: [
        'Feed manufacturing',
        'Batch production systems',
        'Quality control applications',
        'Recipe-based production',
        'Automated systems',
        'Commercial operations'
      ],
      specifications: {
        'Accuracy': '±0.1%',
        'Capacity': '50-2000 kg',
        'Control': 'Digital display',
        'Warranty': '5 years',
        'Certification': 'Trade approved'
      }
    },
    '2006': {
      title: 'Industrial Feed Mixers',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
        '/lovable-uploads/e6c1c0a4-2f52-437f-84d7-2104e8b0cc91.png',
        '/lovable-uploads/f2c1441c-8630-47f7-a4cc-284e064d2ee3.png'
      ],
      description: 'Industrial mixers ensuring uniform feed composition and quality with advanced mixing technology and consistent output.',
      features: [
        'Uniform mixing technology',
        'Variable speed control',
        'Large capacity operation',
        'Easy discharge system',
        'Minimal mixing time',
        'Consistent output quality'
      ],
      usage: [
        'Ingredient blending',
        'Uniform composition',
        'Batch mixing operations',
        'Quality consistency',
        'High-volume processing',
        'Automated operation'
      ],
      applications: [
        'Feed manufacturing plants',
        'Large-scale mixing',
        'Commercial production',
        'Quality-controlled mixing',
        'Industrial applications',
        'Automated systems'
      ],
      specifications: {
        'Capacity': '500-5000 kg/batch',
        'Mixing Time': '3-8 minutes',
        'Power': '15-75 kW',
        'Warranty': '5 years',
        'Output': 'Uniform composition'
      }
    }
  };

  const product = subProducts[id as keyof typeof subProducts];

  // Auto-slide effect for images
  useEffect(() => {
    if (product?.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={() => navigate('/products')}
            className="mb-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden">
                  <motion.img
                    key={currentImageIndex}
                    src={product.images ? product.images[currentImageIndex] : product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </CardContent>
            </Card>
            
            {/* Image indicators */}
            {product.images && product.images.length > 1 && (
              <div className="flex justify-center space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="secondary" className="mb-3 text-sm">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                {product.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Key Features */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Key Features</h3>
              </div>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Usage Benefits */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Usage Benefits</h3>
              </div>
              <ul className="space-y-3">
                {product.usage.map((usage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{usage}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Applications</h3>
              </div>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-secondary/10 rounded-lg p-4 hover:bg-secondary/20 transition-colors duration-300"
                  >
                    <dt className="font-semibold text-primary mb-1">{key}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our team to learn more about this product and how it can benefit your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    View More Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SubProductDetail;