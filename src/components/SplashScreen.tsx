
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <img 
              src="https://image2url.com/images/1755429269509-6d219173-f524-4ed4-a2cf-ce85cf2b17e3.png" 
              alt="SVR Poultry Equipments Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-2"
          >
            <span className="text-yellow-300 font-extrabold">SVR</span> Poultry Equipments
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-green-100 text-lg"
          >
            Leading provider of innovative poultry equipment solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto flex justify-center"
        >
          <div className="folding-cube">
            <div className="cube1 cube"></div>
            <div className="cube2 cube"></div>
            <div className="cube4 cube"></div>
            <div className="cube3 cube"></div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/80 mt-8"
        >
          Loading...
        </motion.p>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            .folding-cube {
              width: 40px;
              height: 40px;
              position: relative;
              transform: rotateZ(45deg);
            }
            
            .folding-cube .cube {
              float: left;
              width: 50%;
              height: 50%;
              position: relative;
              transform: scale(1.1);
            }
            
            .folding-cube .cube:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: white;
              animation: sk-foldCubeAngle 2.4s infinite linear both;
              transform-origin: 100% 100%;
            }
            
            .folding-cube .cube2 {
              transform: scale(1.1) rotateZ(90deg);
            }
            
            .folding-cube .cube3 {
              transform: scale(1.1) rotateZ(180deg);
            }
            
            .folding-cube .cube4 {
              transform: scale(1.1) rotateZ(270deg);
            }
            
            .folding-cube .cube2:before {
              animation-delay: 0.3s;
            }
            
            .folding-cube .cube3:before {
              animation-delay: 0.6s;
            }
            
            .folding-cube .cube4:before {
              animation-delay: 0.9s;
            }
            
            @keyframes sk-foldCubeAngle {
              0%, 10% {
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
              }
              25%, 75% {
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
              }
              90%, 100% {
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
              }
            }
          `
        }} />
      </div>
    </div>
  );
};

export default SplashScreen;
