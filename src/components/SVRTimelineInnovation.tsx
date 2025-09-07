import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

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
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineEvent[] = [
    {
      year: 1984,
      era: 'Foundations & Early Innovation',
      title: 'Established as Sri Venkata Ramana Engineering Works',
      description: 'Focused on general engineering solutions, laying the foundation for future poultry innovations.',
      eraNumber: 1,
    },
    {
      year: 1990,
      era: 'Foundations & Early Innovation',
      title: 'Entered Poultry Equipment Industry',
      description: "Began manufacturing small-scale feeders and drinkers, marking the company's first step into poultry.",
      eraNumber: 1,
    },
    {
      year: 1995,
      era: 'Foundations & Early Innovation',
      title: 'Expanded Manufacturing Capabilities',
      description: 'Introduced manual and semi-automated feeding systems, moving closer to poultry automation.',
      eraNumber: 1,
    },
    {
      year: 2000,
      era: 'Foundations & Early Innovation',
      title: 'Transitioned to SVR Poultry Equipment Manufacturing',
      description: 'Specialized fully in poultry automation under the new identity.',
      eraNumber: 1,
    },
    {
      year: 2005,
      era: 'Foundations & Early Innovation',
      title: 'Launched Fully Automated Systems',
      description: 'Introduced fully automated feeding and watering systems, transforming poultry farm operations.',
      eraNumber: 1,
    },
    {
      year: 2010,
      era: 'Foundations & Early Innovation',
      title: 'Developed Auger-Based Feeding Systems',
      description: 'Boosted efficiency for poultry farmers with automatic auger-based feeding technology.',
      eraNumber: 1,
    },
    {
      year: 2015,
      era: 'Expansion & Market Leadership',
      title: 'Official Incorporation',
      description: 'SVR Poultry Equipments officially incorporated on January 24th.',
      eraNumber: 2,
    },
    {
      year: 2020,
      era: 'Expansion & Market Leadership',
      title: 'Expanded Product Line',
      description: 'Added Auto Feeding Machines, Auger Systems, and Bulk Feeders to the portfolio.',
      eraNumber: 2,
    },
    {
      year: 2025,
      era: 'Expansion & Market Leadership',
      title: 'Nationwide Client Base',
      description: 'Achieved the milestone of serving clients across India, solidifying market presence.',
      eraNumber: 2,
    },
  ];

  const getEraColors = (eraNumber: number) => {
    switch (eraNumber) {
      case 1:
        return {
          gradient: 'from-emerald-500 via-teal-400 to-blue-600',
          glow: 'shadow-xl shadow-emerald-500/25',
          dot: 'bg-emerald-500',
          particle: '#10b981',
        };
      case 2:
        return {
          gradient: 'from-orange-500 via-red-400 to-pink-600',
          glow: 'shadow-xl shadow-orange-500/25',
          dot: 'bg-orange-500',
          particle: '#f97316',
        };
      case 3:
        return {
          gradient: 'from-purple-500 via-violet-400 to-blue-600',
          glow: 'shadow-xl shadow-purple-500/25',
          dot: 'bg-purple-500',
          particle: '#9333ea',
        };
      default:
        return {
          gradient: 'from-primary to-secondary',
          glow: 'shadow-xl shadow-primary/25',
          dot: 'bg-primary',
          particle: '#6366f1',
        };
    }
  };

  // Generate floating particles
  const generateParticles = (centerX: number, centerY: number, color: string) => {
    const newParticles = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: centerX + (Math.random() - 0.5) * 200,
        y: centerY + (Math.random() - 0.5) * 100,
        color: color
      });
    }
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 3000);
  };

  // Get the visible dots (5 dots centered around current index)
  const getVisibleDots = () => {
    const visibleDots = [];
    const totalDots = timelineData.length;
    
    // Show 5 dots centered around current index
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalDots) % totalDots;
      visibleDots.push({
        ...timelineData[index],
        originalIndex: index,
        relativePosition: i, // -2, -1, 0, 1, 2
        isCenter: i === 0
      });
    }
    
    return visibleDots;
  };

  useEffect(() => {
    let cardTimeout: NodeJS.Timeout;

    const showNextCard = () => {
      setShowCard(true);
      
      // Generate particles when card appears
      const colors = getEraColors(timelineData[currentIndex].eraNumber);
      generateParticles(window.innerWidth * 0.4, 150, colors.particle);
      
      cardTimeout = setTimeout(() => {
        setShowCard(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % timelineData.length);
        }, 400);
      }, 3500);
    };

    const initialTimeout = setTimeout(showNextCard, 800);
    const interval = setInterval(showNextCard, 4500);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(cardTimeout);
      clearInterval(interval);
    };
  }, [timelineData.length, currentIndex]);

  const currentEvent = timelineData[currentIndex];
  const colors = getEraColors(currentEvent.eraNumber);
  const visibleDots = getVisibleDots();

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1.2, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>

        {/* Floating Particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full pointer-events-none z-10"
              style={{
                backgroundColor: particle.color,
                left: particle.x,
                top: particle.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100],
                x: [0, (Math.random() - 0.5) * 100],
                rotate: [0, 360]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 3,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-black bg-white/10 px-4 py-2 max-w-md mx-auto rounded-2xl shadow-lg border-b-4 border-primary backdrop-blur-sm"
            animate={{
              textShadow: [
                "0 0 10px rgba(99, 102, 241, 0.3)",
                "0 0 20px rgba(99, 102, 241, 0.5)",
                "0 0 10px rgba(99, 102, 241, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            SVR Timeline <motion.span 
              className="text-primary"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Innovation
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Four decades of pioneering excellence in poultry automation
          </motion.p>
        </motion.div>

        <div className="relative h-80 overflow-hidden" ref={timelineRef}>
          <AnimatePresence>
            {showCard && (
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, scale: 0.9, rotateX: 10 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8
                }}
                className="absolute top-3 z-30"
                style={{
                  left: '40%',
                  transform: 'translateX(-80%)',
                  perspective: '1000px'
                }}
                aria-label={`Timeline event: ${currentEvent.title} in ${currentEvent.year}`}
              >
                <motion.div
                  className={`bg-gradient-to-br ${colors.gradient} p-3 rounded-xl ${colors.glow} max-w-[280px] text-white relative backdrop-blur-sm border border-white/20`}
                  animate={{
                    boxShadow: [
                      `0 8px 32px ${colors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : colors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : 'rgba(147, 51, 234, 0.3)'}`,
                      `0 20px 60px ${colors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.5)' : colors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.5)' : 'rgba(147, 51, 234, 0.5)'}`,
                      `0 8px 32px ${colors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : colors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : 'rgba(147, 51, 234, 0.3)'}`
                    ],
                    y: [0, -2, 0]
                  }}
                  transition={{
                    boxShadow: { 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    transition={{ 
                      delay: 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-semibold mb-1.5"
                  >
                    {currentEvent.era}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.2, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="text-xl font-bold mb-1.5"
                  >
                    {currentEvent.year}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.3, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 250
                    }}
                    className="text-sm font-bold mb-1.5 leading-tight"
                  >
                    {currentEvent.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.4, 
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="text-white/90 text-xs leading-snug"
                  >
                    {currentEvent.description}
                  </motion.p>
                </motion.div>
                
                <motion.div
                >
                  <div className={`w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent ${colors.dot.replace('bg-', 'border-t-')} drop-shadow-lg`}></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Timeline line with animated gradient */}
          <motion.div 
            className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-orange-300 to-purple-300 transform -translate-y-1/3 rounded-full"
            animate={{
              background: [
                'linear-gradient(to right, rgb(110, 231, 183), rgb(251, 146, 60), rgb(196, 181, 253))',
                'linear-gradient(to right, rgb(52, 211, 153), rgb(249, 115, 22), rgb(147, 51, 234))',
                'linear-gradient(to right, rgb(110, 231, 183), rgb(251, 146, 60), rgb(196, 181, 253))'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-sm"
              style={{
                background: 'linear-gradient(to right, rgba(52, 211, 153, 0.5), rgba(249, 115, 22, 0.5), rgba(147, 51, 234, 0.5))'
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.div>

          {/* Timeline dots */}
          <div className="absolute top-2/3 left-1/2 transform -translate-y-1/3 -translate-x-1/2">
            <AnimatePresence mode="popLayout">
              <motion.div 
                className="flex items-center justify-center space-x-48"
                key={currentIndex}
                initial={{ x: 100, opacity: 0, rotateY: 20 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                exit={{ x: -100, opacity: 0, rotateY: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8
                }}
                style={{ perspective: '1000px' }}
              >
                {visibleDots.map((event, index) => {
                  const eventColors = getEraColors(event.eraNumber);
                  const isCenter = event.isCenter;

                  return (
                    <motion.div
                      key={`${event.year}-${event.originalIndex}`}
                      className="relative flex flex-col items-center min-w-0"
                      initial={{ 
                        opacity: 0, 
                        scale: 0.3,
                        y: 30,
                        rotateY: event.relativePosition > 0 ? 60 : event.relativePosition < 0 ? -60 : 0,
                        rotateX: 15
                      }}
                      animate={{ 
                        opacity: isCenter ? 1 : 0.6,
                        scale: isCenter ? 1.1 : 1,
                        y: isCenter ? -5 : 0,
                        rotateY: 0,
                        rotateX: 0
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.3,
                        y: -30,
                        rotateY: event.relativePosition > 0 ? -60 : event.relativePosition < 0 ? 60 : 0,
                        rotateX: -15
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: Math.abs(event.relativePosition) * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: isCenter ? 1.15 : 1.08,
                        y: isCenter ? -8 : -3,
                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                      }}
                      style={{ perspective: '1000px' }}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full border-4 border-white shadow-lg ${eventColors.dot} relative z-30`}
                        animate={
                          isCenter
                            ? { 
                                scale: 1.8, 
                                boxShadow: [
                                  `0 0 25px ${eventColors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.6)' : eventColors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.6)' : 'rgba(147, 51, 234, 0.6)'}`,
                                  `0 0 40px ${eventColors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.8)' : eventColors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.8)' : 'rgba(147, 51, 234, 0.8)'}`,
                                  `0 0 25px ${eventColors.dot.includes('emerald') ? 'rgba(16, 185, 129, 0.6)' : eventColors.dot.includes('orange') ? 'rgba(249, 115, 22, 0.6)' : 'rgba(147, 51, 234, 0.6)'}`
                                ],
                                y: -3,
                                rotate: [0, 360]
                              }
                            : { 
                                scale: 1, 
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
                                y: 0,
                                rotate: 0
                              }
                        }
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeOut",
                          boxShadow: {
                            duration: 2,
                            repeat: isCenter ? Infinity : 0,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                          },
                          rotate: {
                            duration: 8,
                            repeat: isCenter ? Infinity : 0,
                            ease: 'linear'
                          }
                        }}
                        whileHover={{
                          scale: isCenter ? 2.0 : 1.2,
                          rotate: 180,
                          transition: { duration: 0.3 }
                        }}
                      />
                      <motion.div
                        className="mt-4 text-center"
                        animate={
                          isCenter 
                            ? { y: -2, scale: 1.15 } 
                            : { y: 0, scale: 0.9 }
                        }
                        transition={{ 
                          duration: 0.5, 
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 400, 
                          damping: 15 
                        }}
                      >
                        <motion.p
                          className={`font-bold transition-all duration-500 ${
                            isCenter 
                              ? 'text-gray-900 text-xl' 
                              : 'text-gray-500 text-base'
                          }`}
                          animate={isCenter ? { 
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)" 
                          } : {
                            textShadow: "none"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {event.year}
                        </motion.p>
                        <motion.div
                          className={`h-0.5 mt-1 rounded mx-auto transition-all duration-500 ${
                            isCenter ? `w-12 ${eventColors.dot}` : 'w-0 bg-transparent'
                          }`}
                          animate={isCenter ? { 
                            width: 48, 
                            opacity: 1,
                            scaleX: [1, 1.1, 1]
                          } : { 
                            width: 0, 
                            opacity: 0,
                            scaleX: 1
                          }}
                          transition={{ 
                            duration: 0.4,
                            delay: 0.2,
                            scaleX: {
                              duration: 1,
                              repeat: isCenter ? Infinity : 0,
                              repeatType: 'reverse',
                              ease: 'easeInOut'
                            }
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .space-x-28 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(3rem * var(--tw-space-x-reverse));
            margin-left: calc(3rem * (1 - var(--tw-space-x-reverse)));
          }
        }
      `}</style>
    </section>
  );
};

export default SVRTimelineInnovation;