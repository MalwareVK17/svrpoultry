
import { motion } from 'framer-motion';
import { Award, Users, Package, Headphones, Building, Target, Heart, Lightbulb, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, value: '40+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Package, value: '50+', label: 'Product Range' },
    { icon: Headphones, value: '24/7', label: 'Support Available' },
  ];

  const values = [
    { 
      icon: Award, 
      title: 'Quality First', 
      description: 'We never compromise on the quality of our products and services' 
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation', 
      description: 'Constantly evolving with the latest technology and farming practices' 
    },
    { 
      icon: Heart, 
      title: 'Customer Focus', 
      description: 'Your success is our success - we put customers at the heart of everything' 
    },
    { 
      icon: Sprout, 
      title: 'Sustainability', 
      description: 'Committed to environmentally responsible farming solutions' 
    },
  ];

  const team = [
    { 
      name: 'Mr.D. Venkateshwar Reddy', 
      experience: '',
      icon: Users
    },
    { 
      name: 'Mr.D. Jagadeshwar Reddy', 
      experience: '',
      icon: Users
    },
    { 
      name: 'Mr.A. Srinivas Reddy', 
      experience: '',
      icon: Users
    },
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
            About SVR Poultry Equipments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your trusted partner in modern poultry farming solutions since the early '80s
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="max-w-5xl mx-auto text-left">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Sri Venkata Ramana Engineering Works was established in the early '80s. In the early 2000's SVR Poultry Equipment Manufacturing was set up separately in Hyderabad. We have a fully pledged manufacturing facility and a modern CAD-equipped design office, a well-equipped machine and fabrication shop, and a complete team of engineers, technocrats, and professionals, capable of designing, manufacturing, and fully automated feed milling plants, up to 200 tons per day capacity. we have employees of about 150 members, directly and indirectly. Overall, we have 40+ years of experience in the field of manufacturing different machines utilized in the poultry industry. We have an extensive product range with technology in line with the latest. The product range includes R&D products, apart from a wide capacity spectrum feed, Auto Feeding Machines, Auger systems, Feed storage bins, Feed transportation, silos, Auto batching, and Feed plants. We have clients all over India and also, we export our equipment to other foreign countries like Angola, Ghana, etc.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-white text-center mb-16 relative overflow-hidden shadow-2xl ring-1 ring-primary/30"
          >
            <h2 className="text-4xl font-bold mb-6">Transforming Poultry Farming</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              With over a  40+ years of experience, we've helped thousands of farmers 
              achieve success through innovative equipment solutions
            </p>
            
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white/10 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Building,
                title: 'Who We Are',
                content: 'SVR Poultry Equipments is a leading manufacturer and supplier of high-quality poultry equipment, serving farmers across the region with innovative solutions that enhance productivity and profitability.'
              },
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To revolutionize poultry farming through cutting-edge technology and sustainable practices, making modern farming accessible and profitable for farmers of all scales.'
              },
              {
                icon: Award,
                title: 'Why Choose SVR',
                content: 'With years of experience, quality products, competitive pricing, and excellent customer service, we\'re your ideal partner for all poultry equipment needs and ongoing support.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl">
                  <CardContent className="p-8 text-left">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Our Premium Equipment Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Premium Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              State-of-the-art machinery and fabrication solutions engineered for excellence and precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {[
              {
                title: "Laser Machine",
                description: "High-precision fiber laser cutting machine with advanced control systems for superior cutting quality and efficiency.",
                image: "https://sc04.alicdn.com/kf/H25cdc5609cc74becad785a4d8445f6deC.jpg"
              },
              {
                title: "Bending Machine",
                description: "Professional hydraulic press brake with precision tooling for accurate bending and forming operations.",
                image: "https://www.hindustanhydraulics.com/images/hindustan-hydraulics_india_cnc-hydraulic-press-brake_falcon-griffon_series.jpg"
              },
              {
                title: "CNC Lathe Machine",
                description: "Computer-controlled lathe machine delivering exceptional precision in turning and machining operations.",
                image: "https://www.focus-cnc.com/web/image/product.template/20/image_1024?unique=d4b959d"
              },
              {
                title: "Laser Machine HSG",
                description: "Advanced laser cutting system with high-speed processing capabilities for industrial applications.",
                image: "https://cdn.prod.website-files.com/5fcbb3ec902179357be44b2d/660506e77e2dde4390212180_202306-G4020V%20V1.png"
              },
              {
                title: "Bending Machine AccurPress",
                description: "Heavy-duty press brake machine designed for high-volume production with consistent accuracy.",
                image: "https://northsouthmachinery.com/wp-content/uploads/2019/01/ACCEL-U.jpg"
              },
              {
                title: "Automatic Weldmesh Machine",
                description: "Fully automated welding system for producing high-quality mesh products with exceptional consistency.",
                image: "https://5.imimg.com/data5/SELLER/Default/2023/11/358449488/TV/NG/AJ/6690679/wire-mesh-welding-machine-500x500.jpg"
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

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl">
                  <CardContent className="p-8 text-left">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Visionary Owners</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
