import { motion } from 'framer-motion';

const TextCarousel = () => {
  const texts = [
    "Welcome to SVR Poultry Equipment – Engineering Excellence for a Healthier Tomorrow",
    "From innovation to installation, we deliver world-class poultry automation solutions designed to improve efficiency, productivity, and bird well-being."
  ];

  return (
    <div className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10 py-4 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...texts, ...texts, ...texts].map((text, index) => (
            <span
              key={index}
              className="text-gray-800 text-lg font-medium px-16 flex-shrink-0"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextCarousel;