import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import worldMapImage from '@/assets/world-map.png';

const WorldMap = () => {
  const countries = [
    { name: 'Ghana', x: '46%', y: '52%', delay: 0.2 },
    { name: 'Tanzania', x: '58%', y: '66%', delay: 0.4 },
    { name: 'Angola', x: '52%', y: '72%', delay: 0.6 },
    { name: 'Nigeria', x: '48%', y: '48%', delay: 0.8 },
    { name: 'Zambia', x: '56%', y: '72%', delay: 1.0 },
    { name: 'Malawi', x: '58%', y: '74%', delay: 1.2 },
    { name: 'Uganda', x: '58%', y: '54%', delay: 1.4 },
    { name: 'Oman', x: '66%', y: '44%', delay: 1.6 }
  ];

  return (
    <div className="relative w-full h-full bg-white rounded-r-3xl overflow-hidden">
      <img 
        src={worldMapImage} 
        alt="World Map"
        className="w-full h-full object-cover"
      />
      
      {countries.map((country, index) => (
        <motion.div
          key={country.name}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: country.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          viewport={{ once: true }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: country.x, top: country.y }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-black mb-1 whitespace-nowrap bg-white/80 px-2 py-1 rounded shadow">
              {country.name}
            </span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: country.delay + 0.2, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            >
              <MapPin className="w-2 h-2 text-white" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorldMap;