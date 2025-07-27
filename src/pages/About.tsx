
import { motion } from 'framer-motion';
import { Award, Users, Package, Headphones, Building, Target, Heart, Lightbulb, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
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
      experience: '15+ years in poultry industry',
      icon: Building
    },
    { 
      name: 'Mr.D. Jagadeshwar Reddy', 
      experience: 'Expert in equipment design',
      icon: Target
    },
    { 
      name: 'Mr.A. Srinivas Reddy', 
      experience: 'Dedicated to customer success',
      icon: Users
    },
    { 
      name: 'Mr.D. Mahesh Reddy', 
      experience: 'Quality assurance specialist',
      icon: Award
    },
    { 
      name: 'Mr.D. Aditya Reddy', 
      experience: 'Innovation and R&D expert',
      icon: Lightbulb
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
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sri Venkata Ramana Engineering Works was established in the early '80s. In the early 2000's SVR Poultry Equipment Manufacturing was set up separately in Hyderabad. We have a fully pledged manufacturing facility and a modern CAD-equipped design office, a well-equipped machine and fabrication shop, and a complete team of engineers, technocrats, and professionals, capable of designing, manufacturing, and fully automated feed milling plants, up to 200 tons per day capacity. we have employees of about 150 members, directly and indirectly. Overall, we have 35+ years of experience in the field of manufacturing different machines utilized in the poultry industry. We have an extensive product range with technology in line with the latest. The product range includes R&D products, apart from a wide capacity spectrum feed, Auto Feeding Machines, Auger systems, Feed storage bins, Feed transportation, silos, Auto batching, and Feed plants. We have clients all over India and also, we export our equipment to other foreign countries like Angola, Ghana, etc.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-16 text-white text-center mb-20 relative overflow-hidden"
          >
            <h2 className="text-4xl font-bold mb-6">Transforming Poultry Farming</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience, we've helped thousands of farmers 
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
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
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* SVR Evolution Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Evolution Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Witness our journey of growth and innovation in the poultry industry over the decades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {[
              '/lovable-uploads/0a299014-5973-4617-8af4-f66e11206e96.png',
              '/lovable-uploads/c30b9428-9ea1-4621-b144-d4aec32f6f05.png',
              '/lovable-uploads/8bcac9fe-592a-4bc5-9982-daa9c848d1c0.png'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group"
              >
                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image} 
                        alt={`SVR Evolution Timeline ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Expert Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            {team.slice(0, 3).map((member, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.slice(3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
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
