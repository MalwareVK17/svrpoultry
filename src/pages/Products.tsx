import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductPopup from '@/components/ProductPopup';

const Products = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

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

  const productCategories = {
    cages: [
      {
        id: 101,
        title: 'Cage Systems',
        description: 'Modern, comfortable housing solutions for different poultry types with advanced design.',
        image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        subProducts: [
          { id: 1001, title: 'Chicks', description: 'Specially designed cage systems for young chicks with optimal spacing and comfort.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' },
          { id: 1002, title: 'Layer', description: 'Professional layer cages designed for maximum egg production and bird welfare.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' },
          { id: 1003, title: 'Grower', description: 'Robust grower cages that provide ample space for developing birds.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' }
        ]
      },
      {
        id: 102,
        title: 'Cage Accessories',
        description: 'Essential accessories and components to enhance your cage systems performance.',
        image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        subProducts: [
          { id: 1004, title: 'Water Nipples', description: 'High-quality water nipples ensuring clean and efficient water supply for birds.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' },
          { id: 1005, title: 'PVC/Giffers', description: 'Durable PVC components and giffers for reliable cage system operation.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' },
          { id: 1006, title: 'Pipes', description: 'Professional-grade pipes for water and feed distribution systems.', image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png' }
        ]
      },
      {
        id: 103,
        title: 'Weld Mesh',
        description: 'High-quality welded mesh panels for poultry housing and security applications.',
        image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
        subProducts: [
          { id: 1007, title: 'Weld Mesh', description: 'Strong welded mesh panels with corrosion resistance and multiple size options.', image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg' },
          { id: 1008, title: 'Chain Link', description: 'Durable chain link fencing solutions for secure poultry enclosures.', image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg' }
        ]
      }
    ],
    feedManufacturing: [
      {
        id: 201,
        title: 'Feed Trolley',
        description: 'Mobile feed delivery systems for efficient and convenient farm operations.',
        image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
        subProducts: [
          { id: 2001, title: 'Rooter Feed', description: 'Specialized rooter feed trolley systems for precise feed distribution.', image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png' },
          { id: 2002, title: 'Garata Feed', description: 'Advanced Garata feed trolley with enhanced mobility and capacity.', image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png' }
        ]
      },
      {
        id: 202,
        title: 'Feed Plants',
        description: 'Complete feed manufacturing plants for large-scale production operations.',
        image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
        subProducts: [
          { id: 2003, title: 'Feed Plants', description: 'Comprehensive feed manufacturing plants with automated systems.', image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png' },
          { id: 2004, title: 'Full Screen Grinder', description: 'High-efficiency full screen grinder for optimal feed processing.', image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png' },
          { id: 2005, title: 'Weighing Bins', description: 'Precision weighing bins for accurate feed measurement and batching.', image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png' },
          { id: 2006, title: 'Mixers', description: 'Industrial mixers ensuring uniform feed composition and quality.', image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png' }
        ]
      },
      {
        id: 203,
        title: 'Auto Batching Systems',
        description: 'Advanced automated batching systems for optimal poultry nutrition processing.',
        image: '/lovable-uploads/819b4d78-1fce-4557-90af-e1526d3a60e2.png',
        isDirect: true
      }
    ],
    feedStorage: [
      {
        id: 301,
        title: 'Flat Bottom Silos',
        description: 'Large capacity storage solutions for bulk feed materials with flat bottom design.',
        image: '/lovable-uploads/4cd6c42b-8fd9-4a6d-bb0a-b2db84876889.png',
        features: ['Large storage capacity', 'Weather resistant', 'Easy maintenance'],
        isDirect: true
      },
      {
        id: 302,
        title: 'Hopper Bottom Silos',
        description: 'Efficient feed storage with hopper bottom design for easy discharge.',
        image: 'https://www.annapurnaagronics.com/wp-content/uploads/2023/07/hopper-silo-estonia.jpg',
        features: ['Gravity discharge', 'Cone bottom design', 'Complete feed flow'],
        isDirect: true
      }
    ],
    feedTransportation: [
      {
        id: 401,
        title: 'Tractor Tanker',
        description: 'Mobile feed cleaning and processing unit for on-site feed quality enhancement.',
        image: 'https://i.ytimg.com/vi/I6ZCAasnQ3A/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGE4gYChlMA8=&rs=AOn4CLDSnY4mj_AktXChzML6w637bMiucg',
        features: ['Mobile operation', 'Feed cleaning', 'Quality enhancement'],
        isDirect: true
      },
      {
        id: 402,
        title: 'Bulk Feeding Tanker',
        description: 'Industrial bulk feeding system with automated delivery for large-scale operations.',
        image: "https://svrpoultryequipments.com/static/images/Bulk%20feed%20Tanker.jpg",
        features: ['Bulk delivery', 'Automated systems', 'Industrial capacity'],
        isDirect: true
      }
    ]
  };

  const handleProductClick = (product: any) => {
    if (product.isDirect) {
      // Navigate directly to product detail page for single products
      if (product.id === 203) {
        // Auto Batching Systems - direct to detail page
        window.location.href = `/products/203`;
      }
    } else {
      // Open popup with sub-products
      setActivePopup(product.title);
    }
  };

  const getSubProducts = (title: string) => {
    const allProducts = [...productCategories.cages, ...productCategories.feedManufacturing];
    const product = allProducts.find(p => p.title === title);
    return product?.subProducts || [];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-4"
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 shadow-xl mb-8"
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

      {/* Product Categories */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Cages Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Cages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                      >
                        Click Here
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Feed Manufacturing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300"
                      >
                        Click Here
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
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Feed Storage</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <Link to="/products/storage/301">
                    <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] h-full group cursor-pointer">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                          <img 
                            src="/lovable-uploads/4cd6c42b-8fd9-4a6d-bb0a-b2db84876889.png" 
                            alt="Flat Bottom Silos"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Flat Bottom Silos</h3>
                          <ul className="text-gray-600 space-y-2 mb-6">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Large capacity storage solutions
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Weather resistant construction
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Easy maintenance access
                            </li>
                          </ul>
                          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                            View Details
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <Link to="/products/storage/302">
                    <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] h-full group cursor-pointer">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                          <img 
                            src="/lovable-uploads/71326db0-42f7-42d8-9c50-165c3f17b739.png" 
                            alt="Hopper Bottom Silos"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Hopper Bottom Silos</h3>
                          <ul className="text-gray-600 space-y-2 mb-6">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Gravity discharge system
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Complete material flow
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              Automated operation integration
                            </li>
                          </ul>
                          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                            View Details
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feed Transportation Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Feed Transportation</h2>
            <div className="flex justify-center space-x-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-72"
              >
                <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                  onClick={() => window.location.href = '/products/401'}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png" 
                        alt="Tractor Tanker"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Tractor Tanker</h3>
                      <ul className="text-gray-600 space-y-1 mb-4 text-sm">
                        <li>• Mobile feed transportation</li>
                        <li>• High capacity storage</li>
                        <li>• Efficient distribution system</li>
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-72"
              >
                <Card className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                  onClick={() => window.location.href = '/products/402'}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/8bcac9fe-592a-4bc5-9982-daa9c848d1c0.png" 
                        alt="Bulk Feeding Tanker"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Bulk Feeding Tanker</h3>
                      <ul className="text-gray-600 space-y-1 mb-4 text-sm">
                        <li>• Large volume transportation</li>
                        <li>• Pneumatic discharge system</li>
                        <li>• Weather sealed compartments</li>
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with industry leaders to deliver the best poultry equipment solutions
            </p>
          </motion.div>

          {/* Sleek Scrolling Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex">
              <motion.div
                className="flex gap-12 items-center"
                animate={{
                  x: [0, -100 * partners.length]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 w-24 h-16 opacity-70 hover:opacity-100 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      filter: "brightness(1.2)"
                    }}
                  >
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="h-16 object-contain hover:scale-110 hover:brightness-110 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Popups */}
      <ProductPopup
        isOpen={activePopup === 'Cage Systems'}
        onClose={() => setActivePopup(null)}
        title="Cage Systems"
        subProducts={getSubProducts('Cage Systems')}
      />
      <ProductPopup
        isOpen={activePopup === 'Cage Accessories'}
        onClose={() => setActivePopup(null)}
        title="Cage Accessories"
        subProducts={getSubProducts('Cage Accessories')}
      />
      <ProductPopup
        isOpen={activePopup === 'Weld Mesh'}
        onClose={() => setActivePopup(null)}
        title="Weld Mesh"
        subProducts={getSubProducts('Weld Mesh')}
      />
      <ProductPopup
        isOpen={activePopup === 'Feed Trolley'}
        onClose={() => setActivePopup(null)}
        title="Feed Trolley"
        subProducts={getSubProducts('Feed Trolley')}
      />
      <ProductPopup
        isOpen={activePopup === 'Feed Plants'}
        onClose={() => setActivePopup(null)}
        title="Feed Plants"
        subProducts={getSubProducts('Feed Plants')}
      />
    </div>
  );
};

export default Products;
