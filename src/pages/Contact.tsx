import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConstructionPopup, setShowConstructionPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubProduct, setSelectedSubProduct] = useState(''); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Product categories with their respective products
  const productCategories = {
    'Cage Systems': ['Chicks Cage Systems', 'Layers', 'Growers'],
    'Cage Accessories': ['Water Nipples', 'PVC/GI Feeders', 'Pipes'],
    'Weld Mesh': ['Welded Mesh', 'Chain Link'],
    'Feed Trolley': ['Rooter Feed', 'Garata Feed'],
    'Feed Plant': [
      'Feed Manufacturing Plants',
      'Full Screen Grinder',
      'Weighing Bins',
      'Feed Mixers',
      'Auto Batching System'
    ],
    'Feed Storage': ['Flat Bottom Silos', 'Hopper Bottom Silos'],
    'Feed Transportation': ['Tractor Tanker', 'Bulk Feed Tanker']
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    const handleNavigationState = () => {
      if (!location.state) {
        console.log('No navigation state found');
        return;
      }

      console.log('Received navigation state:', location.state);
      
      const { selectedProduct ,product, selectedCategory } = location.state;

      console.log(selectedProduct, product, selectedCategory);  
      
      // Handle case where product object is passed
      if (product) {
        console.log('Processing product from navigation state:', product);
        const category = product.category || selectedCategory || 'General Inquiry';
        const title = product.title || selectedProduct || 'Product';
        setSelectedSubProduct(location?.state?.selectedProduct) ;  
        setSelectedCategory(category);
        setSelectedProduct(title);
        
        setFormData(prev => ({
          ...prev,
          subject: `Enquiry about ${title}`,
          message: `I would like to know more about ${title}.`
        }));
      } 
      // Handle case where only selectedProduct/selectedCategory are passed
      else if (selectedProduct || selectedCategory) {
        console.log('Processing selected product/category from navigation state');
        setSelectedCategory(selectedCategory || '');
        setSelectedProduct(selectedProduct || '');
        
        if (selectedProduct) {
          setFormData(prev => ({
            ...prev,
            subject: `Enquiry about ${selectedProduct}`,
            message: `I would like to know more about ${selectedProduct}.`
          }));
        }
      }
      
      // Clear the state to prevent issues on refresh
      window.history.replaceState({}, document.title);
    };
    
    handleNavigationState();
  }, [location.state]);

  // console.log("se",location.state.selectedProduct)

  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth'});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSelectedCategory('');
      setSelectedProduct('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedProduct('');
    setFormData({
      ...formData,
      subject: ''
    });
  };

  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setFormData({
      ...formData,
      subject: product
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  const locations = [
    {
      id: 1,
      title: "Hyderabad - Head Office",
      address: "Turkayamjal, Telangana",
      phone: "+91 8886645122",
      email: "svrpoultryequipments@gmail.com",
      image: "https://ik.imagekit.io/xu7akp4g0/Screenshot%202025-07-27%20224725.png?updatedAt=1753638224876",
      mapUrl: "https://www.google.com/maps/place/Svr+Poultry+Equipments/@17.2808662,78.5893317,15z/data=!4m6!3m5!1s0x3bcba112c855de81:0x482d54417d723ba0!8m2!3d17.2809183!4d78.5893481!16s%2Fg%2F11gbfk433d?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      gradient: "from-green-400 to-blue-600"
    },
    {
      id: 2,
      title: "Hyderabad - (Unit-2)",
      address: "Maheswaram Industrial area, Telangana 501359",
      phone: "+91 8886645122",
      email: "svrpoultryequipments@gmail.com",
      image: "https://ik.imagekit.io/xu7akp4g0/WhatsApp%20Image%202025-07-27%20at%2022.57.52_b3255cad.jpg?updatedAt=1753637596413",
      mapUrl: "https://www.google.com/maps/place/SVR+Poultry+Equipments+(unit-2)/@17.1633926,78.4618567,16.5z/data=!4m6!3m5!1s0x3bcbbb003c02e303:0xa1faa9ba44030e3f!8m2!3d17.162705!4d78.4626264!16s%2Fg%2F11ww938fy2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
      gradient: "from-purple-400 to-orange-600"
    },
    {
      id: 3,
      title: "Hyderabad - (Unit-3)",
      address: "Gudoor, Telangana",
      phone: "+91 8886645123",
      email: "svrpoultryequipments@gmail.com",
      image: "https://ik.imagekit.io/xu7akp4g0/Screenshot%202025-07-27%20230857.png?updatedAt=1753638581135",
      mapUrl: null,
      gradient: "from-blue-400 to-purple-600"
    },
    {
      id: 4,
      title: "Bangalore",
      address: "Bangalore, Karnataka",
      phone: "+91 8886645122",
      email: "svrpoultryequipments@gmail.com",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      mapUrl: null,
      gradient: "from-red-400 to-pink-600"
    },
    {
      id: 5,
      title: "Andhra Pradesh",
      address: "Andhra Pradesh, India",
      phone: "+91 8886645122",
      email: "svrpoultryequipments@gmail.com",
      image: "https://image2url.com/images/1756796700667-a3ff70dd-5a6c-4e73-91d8-52ce4ec760a0.jpg",
      mapUrl: null,
      gradient: "from-teal-400 to-cyan-600"
    },
    {
      id: 6,
      title: "Mumbai - Maharashtra",
      address: "Mumbai, Maharashtra",
      phone: "+91 8886645122",
      email: "svrpoultryequipments@gmail.com",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      mapUrl: null,
      gradient: "from-indigo-400 to-purple-600"
    }
  ];

  console.log(productCategories[selectedCategory])

  const renderLocationCard = (loc, index) => (
    <div
      key={loc.id}
      className="relative bg-white/90 rounded-lg shadow-lg overflow-hidden w-full max-w-[350px] flex-shrink-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`relative h-48 bg-gradient-to-br ${loc.gradient}`}>
        <img
          src={loc.image}
          alt={loc.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-4 left-4 text-white">
          <h3 className="text-lg font-bold">{loc.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <MapPin className="w-4 h-4 text-green-800 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-600">{loc.address}</span>
        </div>
        <div className="flex items-center mb-3">
          <Phone className="w-4 h-4 text-green-800 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-600">{loc.phone}</span>
        </div>
        <div className="flex items-center mb-6">
          <Mail className="w-4 h-4 text-green-800 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-600 break-all">{loc.email}</span>
        </div>
        <Button
          onClick={() => {
            if (loc.mapUrl) {
              window.open(loc.mapUrl, '_blank');
            } else {
              setShowConstructionPopup(true);
            }
          }}
          className="w-full rounded-lg"
        >
          View on Map
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url("https://image2url.com/images/1756743164118-8bd22ac2-a02c-46f4-8a1e-e3ef40c7fcb2.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4 ">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Get in touch with us for all your poultry equipment needs
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center opacity-100 transform translate-y-0 transition-all duration-800">
              <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden w-full max-w-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in touch</h3>
                  <div onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary/90 focus:ring-primary/90"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary/90 focus:ring-primary/90"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary/90 focus:ring-primary/90"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="text-gray-700 font-medium">Product Category *</Label>
                        <div className="relative">
                          <select
                            id="category"
                            name="category"
                            required
                            aria-label="Product Category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-primary/90 focus:ring-2 focus:ring-primary/90 focus:ring-opacity-20 outline-none transition-all duration-200 appearance-none pr-8"
                          >
                            <option value="" disabled>Select a category</option>
                            {Object.keys(productCategories).map((category) => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none mt-1" />
                        </div>
                      </div>
                    </div>

                    {/* Product Selection - Only show when category is selected */}
                    {selectedCategory && (
                      <div className="animate-in slide-in-from-top duration-300">
                        <Label htmlFor="product" className="text-gray-700 font-medium">Select Product *</Label>
                        <div className="relative">
                          <select
                            id="product"
                            name="product"
                            required
                            aria-label="Product"
                            value={selectedSubProduct || selectedProduct || location?.state?.selectedProduct || 'Not found'}
                            onChange={handleProductChange}
                            className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/90 focus:ring-opacity-20 outline-none transition-all duration-200 appearance-none pr-8"
                          >
                            {console.log(selectedSubProduct,"satish nadipalli", location?.state?.selectedProduct)}
                            <option value="" disabled>Select a product</option>
                            {
                              location?.state?.selectedProduct ? 
                              <option key={location?.state?.selectedProduct} value={location?.state?.selectedProduct}>{location?.state?.selectedProduct}</option>
                              :
                              productCategories[selectedCategory]?.map(product => (
                              <option key={product} value={product}>{product}</option>
                            ))
                            }
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none mt-1" />
                        </div>
                      </div>
                    )}

                    {/* Subject field - auto-filled when product is selected, or manual entry if pre-filled */}
                    {(formData.subject && !selectedProduct) && (
                      <div>
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Your product *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary/90 focus:ring-primary/90"
                          placeholder="How can we help?"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-primary/90 focus:ring-2 focus:ring-primary/90 focus:ring-opacity-20 outline-none transition-all duration-200"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 rounded-lg py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Locations Carousel Section */}
        <section className="py-12 bg-white/10 backdrop-blur-sm mx-6 my-8 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 opacity-100 transform translate-y-0 transition-all duration-800">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-black mb-4 bg-white px-8 py-4 rounded-2xl shadow-lg border-b-4 border-transition-colors border-primary transition-colors duration-300">
                  Visit Our Locations
                </h2>
              </div>
              <p className="text-white/80 text-lg mt-6">
                Find us across multiple cities to serve you better
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <Button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-white/20 ${
                  currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl'
                }`}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </Button>
              
              <Button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border-2 border-white/20 ${
                  currentSlide === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl'
                }`}
                disabled={currentSlide === 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </Button>

              {/* Cards Container */}
              <div className="overflow-hidden mx-16">
                <div className="relative">
                  {/* Slide 1 - First 3 cards */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center transition-all duration-600 ${
                    currentSlide === 0 ? 'opacity-100 transform translate-x-0 scale-100' : 'opacity-0 transform -translate-x-12 scale-95 absolute inset-0 pointer-events-none'
                  }`}>
                    {locations.slice(0, 3).map((loc, index) => renderLocationCard(loc, index))}
                  </div>

                  {/* Slide 2 - Last 3 cards */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center transition-all duration-600 ${
                    currentSlide === 1 ? 'opacity-100 transform translate-x-0 scale-100' : 'opacity-0 transform translate-x-12 scale-95 absolute inset-0 pointer-events-none'
                  }`}>
                    {locations.slice(3, 6).map((loc, index) => renderLocationCard(loc, index))}
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {[0, 1].map((slide) => (
                  <Button
                    key={slide}
                    onClick={() => setCurrentSlide(slide)}
                    className={`w-4 h-4 rounded-full p-0 transition-all duration-300 hover:scale-125 ${
                      currentSlide === slide 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Contact Information Summary */}
            <div className="mt-12 text-center opacity-100 transform translate-y-0 transition-all duration-800 delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="inline-block mb-6">
                  <h3 className="text-2xl font-bold text-black bg-white/90 px-6 py-3 rounded-2xl shadow-lg border-b-4 border-transition-colors border-primary transition-colors duration-300">
                    Quick Contact
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a 
                    href="tel:+918886645122" 
                    className="flex flex-col items-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <Phone className="w-8 h-8 text-white mb-3 group-hover:text-primary/90 transition-colors duration-300" />
                    <h4 className="text-white font-semibold mb-2 group-hover:text-primary/90 transition-colors duration-300">Call Us</h4>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300 hover:underline">+91 8886645122</p>
                  </a>
                  <a 
                    href="mailto:svrpoultryequipments@gmail.com" 
                    className="flex flex-col items-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <Mail className="w-8 h-8 text-white mb-3 group-hover:text-red-500 transition-colors duration-300" />
                    <h4 className="text-white font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">Email Us</h4>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300 hover:underline break-all">svrpoultryequipments@gmail.com</p>
                  </a>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-white mb-3" />
                    <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                    <p className="text-white/80">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Under Construction Popup */}
      {showConstructionPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-100 transition-opacity duration-300"
          onClick={() => setShowConstructionPopup(false)}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform scale-100 transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Under Construction</h3>
            <p className="text-gray-600 mb-6">
              This location is currently under development. We'll be operational here soon!
            </p>
            <Button
              onClick={() => setShowConstructionPopup(false)}
              className="bg-primary hover:bg-primary/90"
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;