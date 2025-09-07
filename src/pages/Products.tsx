import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductPopup from '@/components/ProductPopup';

// Define TypeScript interfaces for better type safety
interface SubProduct {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  subProducts?: SubProduct[];
  features?: string[];
  isDirect?: boolean;
  category: string;
}

const Products = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const productCategories: { [key: string]: Product[] } = {
    cages: [
      {
        id: 101,
        title: 'Cage Systems',
        description: 'Modern, comfortable housing solutions for different poultry types with advanced design.',
        image: 'https://image2url.com/images/1756031205374-a7da394e-af2c-4050-b858-77cb08d32617.png',
        subProducts: [
          { id: 1001, title: 'Chicks', description: 'Specially designed cage systems for young chicks with optimal spacing and comfort.', image: 'https://image2url.com/images/1756100623159-30d00233-bf98-4276-bb6d-0d101eb9c36c.jpg' },
          { id: 1002, title: 'Layer', description: 'Professional layer cages designed for maximum egg production and bird welfare.', image: 'https://image2url.com/images/1756143125796-130fae98-700f-4e8e-9aea-635fcf1013d0.jpg' },
          { id: 1003, title: 'Grower', description: 'Robust grower cages that provide ample space for developing birds.', image: 'https://image2url.com/images/1756100474370-b34741a9-a1da-488b-a845-6da09f854c17.jpg' }
        ],
        category: 'cages'
      },
      {
        id: 102,
        title: 'Cage Accessories',
        description: 'Essential accessories and components to enhance your cage systems performance.',
        image: 'https://image2url.com/images/1756101102988-20c71097-3e7b-4079-9966-c417fbc6c1b3.jpg',
        subProducts: [
          { id: 1004, title: 'Water Nipples', description: 'High-quality water nipples ensuring clean and efficient water supply for birds.', image: 'https://image2url.com/images/1756237888492-bce90680-a29a-449e-b20b-6f178f27deb8.png' },
          { id: 1005, title: 'PVC/GI Feeders', description: 'Durable PVC components and feeders for reliable cage system operation.', image: 'https://image2url.com/images/1756144763652-9198876e-71e3-4ba2-a23b-8cd9f9f851c9.jpg' },
          { id: 1006, title: 'Pipes', description: 'Professional-grade pipes for water and feed distribution systems.', image: 'https://image2url.com/images/1756099219283-87f52260-84ad-4a68-b70c-55ff14381280.jpg' }
        ],
        category: 'cages'
      },
      {
        id: 103,
        title: 'Weld Mesh',
        description: 'High-quality welded mesh panels for poultry housing and security applications.',
        image: 'https://image2url.com/images/1756207156387-1a129325-0355-4241-95e8-bcc263750b1d.jpg',
        subProducts: [
          { id: 1007, title: 'Weld Mesh', description: 'Strong welded mesh panels with corrosion resistance and multiple size options.', image: 'https://image2url.com/images/1756207156387-1a129325-0355-4241-95e8-bcc263750b1d.jpg' },
          { id: 1008, title: 'Chain Link', description: 'Durable chain link fencing solutions for secure poultry enclosures.', image: 'https://image2url.com/images/1756140264731-1d9a3680-48b3-4e95-bbec-32ffd770827f.png' }
        ],
        category: 'cages'
      }
    ],
    feedManufacturing: [
      {
        id: 201,
        title: 'Feed Trolley',
        description: 'Mobile feed delivery systems for efficient and convenient farm operations.',
        image: 'https://image2url.com/images/1756724581315-4f454d6d-b2e5-4896-8bbf-34b7a7343e13.png',
        subProducts: [
          { id: 2001, title: 'Rooter Feed', description: 'Specialized rooter feed trolley systems for precise feed distribution.', image: 'https://image2url.com/images/1756717099435-10e787c2-09ae-4367-a4ea-20f7192a977c.png' },
          { id: 2002, title: 'Garata Feed', description: 'Advanced Garata feed trolley with enhanced mobility and capacity.', image: 'https://image2url.com/images/1756052900207-f3b34287-65ef-4e24-8144-148c42199720.png' }
        ],
        category: 'feedManufacturing'
      },
      {
        id: 202,
        title: 'Feed Plants',
        description: 'Complete feed manufacturing plants for large-scale production operations.',
        image: 'https://image2url.com/images/1756715609430-4463d9d5-d03e-4428-a918-adf3d2c3b0a2.jpg',
        subProducts: [
          { id: 2003, title: 'Feed Plants', description: 'Comprehensive feed manufacturing plants with automated systems.', image: 'https://image2url.com/images/1756715609430-4463d9d5-d03e-4428-a918-adf3d2c3b0a2.jpg' },
          { id: 2004, title: 'Full Screen Grinder', description: 'High-efficiency full screen grinder for optimal feed processing.', image: 'https://image2url.com/images/1756236953550-eac37a65-f1f2-4737-b051-c3fd2c80438f.png' },
          { id: 2005, title: 'Weighing Bins', description: 'Precision weighing bins for accurate feed measurement and batching.', image: 'https://image2url.com/images/1756098769491-1f5c5208-adef-42b2-beb3-f133788a4d4e.jpg' },
          { id: 2006, title: 'Mixers', description: 'Industrial mixers ensuring uniform feed composition and quality.', image: 'https://image2url.com/images/1756099010456-7da444c6-c8ea-4f92-9904-33e39b75c803.png' }
        ],
        category: 'feedManufacturing'
      },
      {
        id: 203,
        title: 'Auto Batching Systems',
        description: 'Advanced automated batching systems for optimal poultry nutrition processing.',
        image: 'https://image2url.com/images/1756237644429-47505962-cacc-4566-86e3-af40bc716f90.png',
        isDirect: true,
        category: 'feedManufacturing'
      }
    ],
    feedStorage: [
      {
        id: 301,
        title: 'Flat Bottom Silos',
        description: 'Large capacity storage solutions for bulk feed materials with flat bottom design.',
        image: 'https://image2url.com/images/1756547916239-efb31ea3-bdbf-4142-a274-cffe0466c6bd.jpg',
        features: ['Large storage capacity', 'Weather resistant', 'Easy maintenance'],
        isDirect: true,
        category: 'feedStorage'
      },
      {
        id: 302,
        title: 'Hopper Bottom Silos',
        description: 'Efficient feed storage with hopper bottom design for easy discharge.',
        image: 'https://image2url.com/images/1756547872669-122a3ddd-b363-4ad5-bf75-a7821d2ac094.png',
        features: ['Gravity discharge', 'Cone bottom design', 'Complete feed flow'],
        isDirect: true,
        category: 'feedStorage'
      }
    ],
    feedTransportation: [
      {
        id: 401,
        title: 'Tractor Tanker',
        description: 'Mobile feed cleaning and processing unit for on-site feed quality enhancement.',
        image: 'https://image2url.com/images/1756547782603-4eed0059-04dd-41b9-bff3-707ea31cb4db.jpg',
        features: ['Mobile operation', 'Feed cleaning', 'Quality enhancement'],
        isDirect: true,
        category: 'feedTransportation'
      },
      {
        id: 402,
        title: 'Bulk Feeding Tanker',
        description: 'Industrial bulk feeding system with automated delivery for large-scale operations.',
        image: 'https://image2url.com/images/1756547829703-f24a4edc-0949-4aa3-8061-da77eb65c582.jpg',
        features: ['Bulk delivery', 'Automated systems', 'Industrial capacity'],
        isDirect: true,
        category: 'feedTransportation'
      }
    ]
  };

  const handleProductClick = (product: Product) => {
    if (product.isDirect) {
      if (product.category === 'feedStorage') {
        navigate(`/products/storage/${product.id}`, { state: { product } });
      } else if (product.category === 'feedTransportation') {
        navigate(`/products/transportation/${product.id}`, { state: { product } });
      } else if (product.category === 'feedManufacturing' && product.id === 203) {
        navigate(`/products/manufacturing/${product.id}`, { state: { product } });
      } else {
        // fallback for other direct products
        navigate(`/products/${product.category}/${product.id}`, { state: { product } });
      }
    } else {
      setActivePopup(product.title);
    }
  };

  const getSubProducts = (title: string): SubProduct[] => {
    const allProducts = [...productCategories.cages, ...productCategories.feedManufacturing];
    const product = allProducts.find(p => p.title === title);
    return product?.subProducts || [];
  };
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth'});
  }, []);
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -100;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive range of poultry equipment for modern farming operations
          </motion.p>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-primary text-4xl sm:text-5xl font-extrabold">50 ACRE</span>
                  <br />
                  <span className="text-xl sm:text-2xl">POULTRY FARM AT</span>
                  <br />
                  <span className="text-primary text-2xl sm:text-3xl font-bold">CHINTHPALLY</span>
                </h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    ENTIRELY EXECUTED BY
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    SVR POULTRY EQUIPMENTS
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <img
                    src="/lovable-uploads/ff822bca-19e0-449e-bd03-9eed1ecfb013.png"
                    alt="50 Acre Poultry Farm at Chinthpally"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm sm:text-base">
                  50 Acres
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Cages Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-bold text-center text-black bg-white/10 px-6 py-4 max-w-sm mx-auto rounded-2xl shadow-lg border-b-4 border-primary">Cages</h2>
            <div id="cages" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.cages.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">{product.description}</p>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                        aria-label={`View details for ${product.title}`}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feed Manufacturing Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-bold text-center text-black bg-white/10 px-6 py-4 max-w-md mx-auto rounded-2xl shadow-lg border-b-4 border-primary">Feed Manufacturing</h2>
            <div id="feedmanufacturing" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.feedManufacturing.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">{product.description}</p>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                        aria-label={`View details for ${product.title}`}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feed Storage Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-bold text-center text-black bg-white/10 px-6 py-4 max-w-sm mx-auto rounded-2xl shadow-lg border-b-4 border-primary">Feed Storage</h2>
            <div id="feedstorage" className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {productCategories.feedStorage.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                  onClick={() => handleProductClick(product)}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">{product.description}</p>
                      <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                        {product.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                        aria-label={`View details for ${product.title}`}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feed Transportation Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-bold text-center text-black bg-white/10 px-6 py-4 max-w-md mx-auto rounded-2xl shadow-lg border-b-4 border-primary">Feed Transportation</h2>
            <div id="feedtransportation" className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {productCategories.feedTransportation.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                  onClick={() => handleProductClick(product)}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                    <div className="aspect-[5/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">{product.description}</p>
                      <ul className="text-gray-600 space-y-2 mb-6 text-sm sm:text-base">
                        {product.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                        aria-label={`View details for ${product.title}`}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-bold text-center text-black bg-white/10 px-6 py-4 max-w-md mx-auto rounded-2xl shadow-lg border-b-4 border-primary">Our Trusted Clients</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with industry leaders to deliver the best poultry equipment solutions
            </p>
          </motion.div>

          <div className="loop overflow-hidden py-4">
            <motion.div
              className="flex gap-8 sm:gap-12 items-center"
              animate={{
                x: [0, -100 * partners.length]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-24 sm:w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Popups */}
      {['Cage Systems', 'Cage Accessories', 'Weld Mesh', 'Feed Trolley', 'Feed Plants'].map((title) => (
        <ProductPopup
          key={title}
          isOpen={activePopup === title}
          onClose={() => setActivePopup(null)}
          title={title}
          subProducts={getSubProducts(title)}
        />
      ))}
    </div>
  );
};

export default Products;