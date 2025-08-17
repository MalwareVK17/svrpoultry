import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: number;
  era: string;
  title: string;
  description: string;
  eraNumber: number;
}

const SVRTimelineInnovation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const timelineData: TimelineEvent[] = [
    // ERA 1 – Foundations & Early Innovation (1984–2010)
    {
      year: 1984,
      era: "Foundations & Early Innovation",
      title: "Established as Sri Venkata Ramana Engineering Works",
      description: "Focused on general engineering solutions, laying the foundation for future poultry innovations.",
      eraNumber: 1
    },
    {
      year: 1990,
      era: "Foundations & Early Innovation", 
      title: "Entered Poultry Equipment Industry",
      description: "Began manufacturing small-scale feeders and drinkers, marking the company's first step into poultry.",
      eraNumber: 1
    },
    {
      year: 1995,
      era: "Foundations & Early Innovation",
      title: "Expanded Manufacturing Capabilities", 
      description: "Introduced manual and semi-automated feeding systems, moving closer to poultry automation.",
      eraNumber: 1
    },
    {
      year: 2000,
      era: "Foundations & Early Innovation",
      title: "Transitioned to SVR Poultry Equipment Manufacturing",
      description: "Specialized fully in poultry automation under the new identity.",
      eraNumber: 1
    },
    {
      year: 2005,
      era: "Foundations & Early Innovation",
      title: "Launched Fully Automated Systems",
      description: "Introduced fully automated feeding and watering systems, transforming poultry farm operations.",
      eraNumber: 1
    },
    {
      year: 2010,
      era: "Foundations & Early Innovation",
      title: "Developed Auger-Based Feeding Systems",
      description: "Boosted efficiency for poultry farmers with automatic auger-based feeding technology.",
      eraNumber: 1
    },
    // ERA 2 – Expansion & Market Leadership (2011–2019)
    {
      year: 2011,
      era: "Expansion & Market Leadership",
      title: "Official Incorporation",
      description: "SVR Poultry Equipments officially incorporated on January 24th.",
      eraNumber: 2
    },
    {
      year: 2014,
      era: "Expansion & Market Leadership",
      title: "Expanded Product Line",
      description: "Added Auto Feeding Machines, Auger Systems, and Bulk Feeders to the portfolio.",
      eraNumber: 2
    },
    {
      year: 2016,
      era: "Expansion & Market Leadership",
      title: "Nationwide Client Base",
      description: "Achieved the milestone of serving clients across India, solidifying market presence.",
      eraNumber: 2
    },
    {
      year: 2017,
      era: "Expansion & Market Leadership",
      title: "Global Export Beginnings",
      description: "Began exporting equipment to Angola and Ghana, marking an international presence.",
      eraNumber: 2
    },
    {
      year: 2018,
      era: "Expansion & Market Leadership",
      title: "Upgraded Manufacturing Facility",
      description: "Installed a modern CAD-equipped design office for precision and innovation.",
      eraNumber: 2
    },
    {
      year: 2019,
      era: "Expansion & Market Leadership",
      title: "Workforce & Process Expansion",
      description: "Expanded workforce and automated production processes for enhanced efficiency.",
      eraNumber: 2
    },
    // ERA 3 – Global Expansion & Next-Gen Solutions (2020–2025)
    {
      year: 2020,
      era: "Global Expansion & Next-Gen Solutions",
      title: "Adapted During Global Challenges",
      description: "Ensured business continuity with resilient operations during global disruptions.",
      eraNumber: 3
    },
    {
      year: 2021,
      era: "Global Expansion & Next-Gen Solutions",
      title: "MSME Recognition",
      description: "Classified as a Micro Enterprise under MSME, ensuring growth with recognition.",
      eraNumber: 3
    },
    {
      year: 2022,
      era: "Global Expansion & Next-Gen Solutions",
      title: "Workforce Expansion",
      description: "Grew to 150+ employees (direct and indirect), strengthening capacity.",
      eraNumber: 3
    },
    {
      year: 2023,
      era: "Global Expansion & Next-Gen Solutions",
      title: "35+ Years of Excellence",
      description: "Celebrated over 35 years of industry experience, reinforcing leadership in poultry automation.",
      eraNumber: 3
    },
    {
      year: 2024,
      era: "Global Expansion & Next-Gen Solutions",
      title: "Global Market Expansion",
      description: "Expanded exports and established a new fabrication unit to meet growing demand.",
      eraNumber: 3
    },
    {
      year: 2025,
      era: "Global Expansion & Next-Gen Solutions",
      title: "Next-Generation Automation Launch",
      description: "Expected launch of next-gen poultry automation systems and smart farm integration.",
      eraNumber: 3
    }
  ];

  const getEraColors = (eraNumber: number) => {
    switch (eraNumber) {
      case 1:
        return {
          gradient: "from-emerald-500 to-blue-600",
          glow: "shadow-emerald-500/50",
          dot: "bg-emerald-500"
        };
      case 2:
        return {
          gradient: "from-orange-500 to-red-600", 
          glow: "shadow-orange-500/50",
          dot: "bg-orange-500"
        };
      case 3:
        return {
          gradient: "from-purple-500 to-blue-600",
          glow: "shadow-purple-500/50", 
          dot: "bg-purple-500"
        };
      default:
        return {
          gradient: "from-primary to-secondary",
          glow: "shadow-primary/50",
          dot: "bg-primary"
        };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Show card
      setShowCard(true);
      
      // Hide card after 4 seconds and move to next
      setTimeout(() => {
        setShowCard(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % timelineData.length);
        }, 300); // Wait for fade out
      }, 4000);
    }, 5000); // Total cycle time: 4s display + 1s transition

    return () => clearInterval(interval);
  }, [timelineData.length]);

  const currentEvent = timelineData[currentIndex];
  const colors = getEraColors(currentEvent.eraNumber);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SVR Timeline <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of pioneering excellence in poultry automation
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-orange-200 to-purple-200 rounded-full shadow-lg"></div>
          
          {/* Timeline Dots Container */}
          <div className="relative flex justify-between items-center px-8">
            <motion.div
              className="flex justify-between w-full"
              animate={{
                x: [0, -20, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {timelineData.map((event, index) => {
                const isActive = index === currentIndex;
                const eventColors = getEraColors(event.eraNumber);
                
                return (
                  <motion.div
                    key={event.year}
                    className="relative flex flex-col items-center"
                    animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Year Label */}
                    <motion.div
                      className="mb-4 text-sm font-bold text-gray-700 bg-white px-3 py-1 rounded-full shadow-md"
                      animate={isActive ? { y: [0, -5, 0] } : { y: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {event.year}
                    </motion.div>
                    
                    {/* Timeline Dot */}
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${eventColors.dot} ${
                        isActive ? `${eventColors.glow} animate-pulse` : ''
                      }`}
                      animate={isActive ? {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 10px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0)"
                        ]
                      } : { scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Popup Card */}
          <AnimatePresence>
            {showCard && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className={`bg-gradient-to-br ${colors.gradient} p-8 rounded-3xl shadow-2xl ${colors.glow} max-w-md text-white`}>
                  {/* ERA Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4"
                  >
                    ERA {currentEvent.eraNumber} – {currentEvent.era}
                  </motion.div>
                  
                  {/* Year */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {currentEvent.year}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-bold mb-3 leading-tight"
                  >
                    {currentEvent.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 leading-relaxed"
                  >
                    {currentEvent.description}
                  </motion.p>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex space-x-2">
            {timelineData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                animate={index === currentIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SVRTimelineInnovation;