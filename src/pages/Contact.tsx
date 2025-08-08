
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConstructionPopup, setShowConstructionPopup] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Telangana 501510', 'Turkayamjal Municipality,Hyderabad', 'India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 88866 45122']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['svrpoultryequipments@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM']
    }
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get in touch with us for all your poultry equipment needs
          </motion.p>
        </div>
      </section>

      {/* SVR Video Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <video 
              className="w-full h-72 md:h-96 object-cover object-center rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster="https://ik.imagekit.io/xu7akp4g0/WhatsApp%20Image%202025-07-28%20at%2011.45.52_8638ced5.jpg?updatedAt=1753683916589"
            >
              <source src="https://cvukkqrjfrzvnytpcfjj.supabase.co/storage/v1/object/public/videos//_project_title_svr_202508011557_iro4k.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're here to help you with all your poultry equipment needs. 
                Reach out to us and our expert team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
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
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
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
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-2 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-200"
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
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Locations</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hyderabad - Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-600">
                <img 
                  src="https://ik.imagekit.io/xu7akp4g0/Screenshot%202025-07-27%20224725.png?updatedAt=1753638224876" 
                  alt="Hyderabad Head Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Hyderabad - Head Office</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">7HJQ+9P Turkayamjal, Telangana</span>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">+91 9849397021</span>
                </div>
                <div className="flex items-center mb-6">
                  <Mail className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">svrpoultryequipments@gmail.com
</span>
                </div>
                <Button 
                  onClick={() => window.open('https://www.google.com/maps/place/Svr+Poultry+Equipments/@17.2808662,78.5893317,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNGDpEJjnNNrYqVRqAUOSWoocUq5uHqSYYzGP-E!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNGDpEJjnNNrYqVRqAUOSWoocUq5uHqSYYzGP-E%3Dw86-h114-k-no!7i3456!8i4608!4m7!3m6!1s0x3bcba112c855de81:0x482d54417d723ba0!8m2!3d17.2809183!4d78.5893481!10e5!16s%2Fg%2F11gbfk433d?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                  className="w-full bg-green-800 hover:bg-green-900 text-white rounded-lg"
                >
                  View on Map
                </Button>
              </div>
            </motion.div>

            {/* Bangalore - Branch Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-orange-600">
                <img 
                  src="https://ik.imagekit.io/xu7akp4g0/WhatsApp%20Image%202025-07-27%20at%2022.57.52_b3255cad.jpg?updatedAt=1753637596413" 
                  alt="Bangalore Branch Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Hyderabad - (Unit-2)</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">Maheswaram Industrial area ,Telangana 501359</span>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">+91 9849397021, 8886699995</span>
                </div>
                <div className="flex items-center mb-6">
                  <Mail className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">svrpoultryequipments@gmail.com
</span>
                </div>
                <Button 
                  onClick={() => window.open('https://www.google.com/maps/place/SVR+Poultry+Equipments+(unit-2)/@17.1633926,78.4618567,16.5z/data=!4m6!3m5!1s0x3bcbbb003c02e303:0xa1faa9ba44030e3f!8m2!3d17.162705!4d78.4626264!16s%2Fg%2F11ww938fy2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                  className="w-full bg-green-800 hover:bg-green-900 text-white rounded-lg"
                >
                  View on Map
                </Button>
              </div>
            </motion.div>

            {/* Chennai - Service Center */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600">
                <img 
                  src="https://ik.imagekit.io/xu7akp4g0/Screenshot%202025-07-27%20230857.png?updatedAt=1753638581135" 
                  alt="Chennai Service Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Hyderabad - (Unit-3)</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">4G87+WPV Gudoor, Telangana</span>
                </div>
                <div className="flex items-center mb-3">
                  <Phone className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">+91 8886645123</span>
                </div>
                <div className="flex items-center mb-6">
                  <Mail className="w-4 h-4 text-green-800 mr-2" />
                  <span className="text-sm text-gray-600">svrpoultryequipments@gmail.com</span>
                </div>
                <Button 
                  onClick={() => setShowConstructionPopup(true)}
                  className="w-full bg-green-800 hover:bg-green-900 text-white rounded-lg"
                >
                  View on Map
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Under Construction Popup */}
      {showConstructionPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowConstructionPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
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
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
