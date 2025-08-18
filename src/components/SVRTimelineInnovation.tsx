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
          glow: "shadow-xl shadow-emerald-500/25",
          dot: "bg-emerald-500"
        };
      case 2:
        return {
          gradient: "from-orange-500 to-red-600", 
          glow: "shadow-xl shadow-orange-500/25",
          dot: "bg-orange-500"
        };
      case 3:
        return {
          gradient: "from-purple-500 to-blue-600",
          glow: "shadow-xl shadow-purple-500/25",
          dot: "bg-purple-500"
        };
      default:
        return {
          gradient: "from-primary to-secondary",
          glow: "shadow-xl shadow-primary/25",
          dot: "bg-primary"
        };
    }
  };

  useEffect(() => {
    let cardTimeout: NodeJS.Timeout;
    
    const showNextCard = () => {
      setShowCard(true);
      
      // Hide card after 4 seconds and move to next
      cardTimeout = setTimeout(() => {
        setShowCard(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % timelineData.length);
        }, 500); // Wait for fade out
      }, 4000);
    };

    // Start with first card after initial delay
    const initialTimeout = setTimeout(showNextCard, 1000);
    
    // Continue with regular intervals
    const interval = setInterval(showNextCard, 6000); // 4s display + 2s transition

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(cardTimeout);
      clearInterval(interval);
    };
  }, [timelineData.length]);

  // Duplicate timeline data for seamless infinite scroll
  const duplicatedData = [...timelineData, ...timelineData, ...timelineData];
  const currentEvent = timelineData[currentIndex];
  const colors = getEraColors(currentEvent.eraNumber);
  
  // Calculate scroll position for smooth infinite scroll
  const scrollPosition = -(currentIndex * 200) % (timelineData.length * 200);

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SVR Timeline <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of pioneering excellence in poultry automation
          </p>
        </motion.div>

        {/* Scrolling Timeline Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-orange-300 to-purple-300 transform -translate-y-1/2"></div>
          
          {/* Scrolling Timeline Track */}
          <motion.div
            className="absolute top-1/2 left-1/2 flex items-center space-x-48 transform -translate-y-1/2"
            animate={{ x: scrollPosition }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ width: `${duplicatedData.length * 200}px` }}
          >
            {duplicatedData.map((event, index) => {
              const actualIndex = index % timelineData.length;
              const isActive = actualIndex === currentIndex && Math.floor(index / timelineData.length) === 1;
              const eventColors = getEraColors(event.eraNumber);
              
              return (
                 <motion.div
                   key={`${event.year}-${index}`}
                   className="relative flex flex-col items-center min-w-32"
                 >
                   {/* Timeline Dot */}
                   <motion.div
                     className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${eventColors.dot}`}
                     animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                     transition={{ duration: 0.3 }}
                   />
                   
                   {/* Year Below Dot */}
                   <div className="mt-4 text-center">
                     <p className="text-lg font-bold text-gray-800">
                       {event.year}
                     </p>
                   </div>
                 </motion.div>
              );
            })}
          </motion.div>

          {/* Popup Card */}
          <AnimatePresence>
            {showCard && (
               <motion.div
                 initial={{ opacity: 0, y: 40, scale: 0.9 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
                 transition={{ 
                   type: "spring",
                   stiffness: 400,
                   damping: 25
                 }}
                 className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
               >
                 <div className={`bg-gradient-to-br ${colors.gradient} p-5 rounded-xl ${colors.glow} max-w-xs text-white`}>
                   {/* Year */}
                   <motion.div
                     initial={{ opacity: 0, x: -15 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 }}
                     className="text-2xl font-bold mb-2"
                   >
                     {currentEvent.year}
                   </motion.div>
                   
                   {/* Title */}
                   <motion.h3
                     initial={{ opacity: 0, y: 15 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="text-lg font-bold mb-2 leading-tight"
                   >
                     {currentEvent.title}
                   </motion.h3>
                   
                   {/* Description */}
                   <motion.p
                     initial={{ opacity: 0, y: 15 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="text-white/90 text-sm leading-relaxed"
                   >
                     {currentEvent.description}
                   </motion.p>
                 </div>
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex space-x-2">
            {timelineData.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                }`}
                animate={index === currentIndex ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SVRTimelineInnovation;