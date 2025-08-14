import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  conclusion: string;
}

const events: TimelineEvent[] = [
  { year: "1984", title: "Establishment", description: "Established as Sri Venkata Ramana Engineering Works, focusing on general engineering solutions.", conclusion: "Foundation laid for future innovation." },
  { year: "1990", title: "Entry into Poultry Industry", description: "Entered the poultry equipment industry, manufacturing small-scale feeders and drinkers.", conclusion: "Marked the beginning of poultry automation journey." },
  { year: "1995", title: "Manufacturing Expansion", description: "Expanded manufacturing capabilities to include manual and semi-automated feeding systems.", conclusion: "Broadened product range." },
  { year: "2000", title: "SVR Poultry Equipment Manufacturing", description: "Officially transitioned into SVR Poultry Equipment Manufacturing, specializing in poultry automation.", conclusion: "Became a dedicated poultry automation brand." },
  { year: "2005", title: "Automation Launch", description: "Launched fully automated feeding and watering systems for poultry farms.", conclusion: "Set new standards in poultry automation." },
  { year: "2010", title: "Auger-Based Systems", description: "Developed auger-based automatic feeding systems, enhancing efficiency for poultry farmers.", conclusion: "Improved productivity for clients." },
  { year: "2011", title: "Official Incorporation", description: "SVR Poultry Equipments officially incorporated on January 24th.", conclusion: "Became a registered entity." },
  { year: "2012-2015", title: "Product Line Expansion", description: "Expanded product line to include Auto Feeding Machines, Auger Systems, and Bulk Feeders.", conclusion: "Diversified product offerings." },
  { year: "2016", title: "Nationwide Service", description: "Achieved milestone of serving clients across India, solidifying market presence.", conclusion: "Became a trusted brand in India." },
  { year: "2017", title: "Export Launch", description: "Began exporting equipment to international markets, including Angola and Ghana.", conclusion: "Expanded reach beyond India." },
  { year: "2018", title: "Facility Upgrade", description: "Upgraded manufacturing facility with a modern CAD-equipped design office.", conclusion: "Enhanced design and production capabilities." },
  { year: "2019", title: "Process Automation", description: "Expanded workforce and automated production processes for better efficiency.", conclusion: "Boosted manufacturing productivity." },
  { year: "2020", title: "Adaptation During Challenges", description: "Adapted operations to ensure business continuity during global challenges.", conclusion: "Maintained stability during tough times." },
  { year: "2021", title: "MSME Recognition", description: "Recognized as a Micro Enterprise under MSME classification.", conclusion: "Received government recognition." },
  { year: "2022", title: "Workforce Growth", description: "Expanded workforce to 150+ employees (direct and indirect).", conclusion: "Strengthened manpower capacity." },
  { year: "2023", title: "35 Years Celebration", description: "Celebrated over 35 years of industry experience, reinforcing leadership in poultry automation.", conclusion: "A legacy of innovation." },
  { year: "2024", title: "Global Expansion", description: "Further expansion into new global markets, strengthening exports and new fabrication unit setup.", conclusion: "Stepping into a larger global presence." },
  { year: "2025", title: "Next-Generation Launch", description: "Expected launch of next-generation poultry automation systems and smart farm integration.", conclusion: "A new era of smart poultry farming." }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 4000); // 4s pause at each marker
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to active marker
  useEffect(() => {
    const marker = document.getElementById(`marker-${activeIndex}`);
    marker?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIndex]);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-sans text-gray-800">
      <h2 className="text-center text-4xl font-bold mb-12">The SVR Journey of Innovation</h2>

      <div ref={containerRef} className="relative flex overflow-x-hidden px-8 space-x-32">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Marker */}
            <motion.div
              id={`marker-${idx}`}
              className={`w-6 h-6 rounded-full border-4 cursor-pointer shadow-lg ${activeIndex === idx ? "border-[#FF4444]" : "border-gray-500"}`}
              animate={activeIndex === idx ? { scale: [1, 1.3, 1], boxShadow: ["0 0 0px #FF4444", "0 0 20px #FF4444", "0 0 0px #FF4444"] } : {}}
              transition={{ duration: 0.6, repeat: activeIndex === idx ? Infinity : 0, ease: "easeInOut" }}
              onClick={() => setSelectedEvent(event)}
            />

            {/* Year label */}
            <span className="mt-2 text-sm font-bold">{event.year}</span>
          </div>
        ))}
      </div>

      {/* Card popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-[300px] max-w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: "easeOutBack" }}
            >
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
              <h3 className="text-lg font-bold mb-2">{selectedEvent.title}</h3>
              <p className="text-sm mb-3">{selectedEvent.description}</p>
              <div className="text-xs text-gray-600">{selectedEvent.conclusion}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
