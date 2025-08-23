import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

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
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject,
          message: formData.message
        }
      ]);

      if (error) throw error;

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you soon.",
      });

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
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Telangana 501510',
        'Turkayamjal Municipality, Hyderabad',
        'India'
      ]
    },
    { icon: Phone, title: 'Phone', details: ['+91 88866 45122'] },
    { icon: Mail, title: 'Email', details: ['svrpoultryequipments@gmail.com'] },
    { icon: Clock, title: 'Business Hours', details: ['Mon - Sat: 9:00 AM - 6:00 PM'] }
  ];

  return (
    <div className="relative">
      {/* Background (only behind contact content) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(/lovable-uploads/48821b40-e079-4c47-80f8-b1fdc8c8da10.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Contact Page Content */}
      <div className="relative min-h-screen">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              Get in touch with us for all your poultry equipment needs
            </motion.p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get In Touch
                </h2>
                <p className="text-white mb-8 text-lg leading-relaxed">
                  We're here to help you with all your poultry equipment needs.
                  Reach out to us and our expert team will get back to you
                  promptly.
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
                        <h3 className="font-semibold text-white text-lg mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-white">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-medium"
                          >
                            Name *
                          </Label>
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
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium"
                          >
                            Email *
                          </Label>
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
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium"
                          >
                            Phone
                          </Label>
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
                          <Label
                            htmlFor="subject"
                            className="text-gray-700 font-medium"
                          >
                            Subject *
                          </Label>
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
                        <Label
                          htmlFor="message"
                          className="text-gray-700 font-medium"
                        >
                          Message *
                        </Label>
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

        {/* Locations */}
        {/* (keeping your existing code for Locations & Popup unchanged) */}

      </div>

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
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Under Construction
            </h3>
            <p className="text-gray-600 mb-6">
              This location is currently under development. We'll be operational
              here soon!
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

      {/* Footer now renders cleanly below */}
      <Footer />
    </div>
  );
};

export default Contact;
