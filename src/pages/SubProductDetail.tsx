import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Users, Zap, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  
  const passedProduct = location.state?.product;  

  console.log('Passed product from navigation:', passedProduct);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sub-product data with detailed information
  const subProducts = {
    // Cages Category
    '1001': {
      id: '1001',
      title: 'Chicks Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        'https://image2url.com/images/1756412931467-33af9eee-62be-4afe-a8ea-81c003d2e073.jpeg',
        'https://image2url.com/images/1756719762432-0f25b2cf-5814-4b91-b2fe-5808d2a0a5bb.webp',
        'https://image2url.com/images/1756718975836-faae6350-88e0-4f01-af22-ac0075826d92.webp'
      ],
      description: 'Specially designed cage systems for young chicks with optimal spacing, temperature control, and comfort features to ensure healthy growth during the critical early stages.',
      features: [
        'Optimal spacing for young chicks',
        'Temperature control systems',
        'Easy cleaning mechanisms',
        'Ventilation integration',
        'Safety features for small birds',
        'Growth-adaptive design'
      ],
      usage: [
        'Suitable for 0-6 week old chicks',
        'Capacity: 30-50 chicks per tier',
        'Temperature monitoring',
        'Humidity control',
        'Easy access for care',
        'Reduces mortality rates'
      ],
      applications: [
        'Hatchery operations',
        'Brooding facilities',
        'Commercial chick rearing',
        'Breeding programs',
        'Research facilities',
        'Small-scale farming'
      ],
      specifications: {
        'Age Range': '0-6 weeks',
        'Capacity': '30-50 chicks/tier',
        'Material': 'Coated wire mesh',
        'Warranty': '8 years',
        'Installation': 'Complete setup included'
      }
    },
    '1002': {
      id: '1002',
      title: 'Layer Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        'https://image2url.com/images/1756413215475-7cee7a07-7def-4a26-8bed-11ed135c7a3b.jpg',
        'https://image2url.com/images/1756718854195-76abc330-bfe1-4762-bbb2-735813e2cf8e.jpg',
        'https://image2url.com/images/1756413268975-112a83b5-8f8b-40ad-ace6-51b494881558.jpg'
      ],
      description: 'Professional layer cages designed for maximum egg production and bird welfare with advanced nest boxes, feeding systems, and easy egg collection.',
      features: [
        'Nest box integration',
        'Automatic egg collection',
        'Feeding system optimization',
        'Water nipple placement',
        'Perching areas',
        'Manure management'
      ],
      usage: [
        'Houses 4-8 layers per cage',
        'Maximizes egg production',
        'Easy egg collection',
        'Reduces feed wastage',
        'Improves hygiene',
        'Labor-efficient operation'
      ],
      applications: [
        'Commercial egg production',
        'Layer farms',
        'Breeding operations',
        'Organic egg farms',
        'Free-range facilities',
        'Integrated poultry farms'
      ],
      specifications: {
        'Capacity': '4-8 layers/cage',
        'Material': 'Galvanized wire',
        'Nest Boxes': 'Integrated design',
        'Warranty': '10 years',
        'Egg Collection': 'Automated system'
      }
    },
    '1003': {
      id: '1003',
      title: 'Grower Cage Systems',
      category: 'Cages',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
        'https://image2url.com/images/1756413398125-1ed78a63-a196-47be-b9c9-ede219203e8b.webp',
        '/lovable-uploads/8ae29c95-16e1-4c4b-995b-1e6ee604111d.png'
      ],
      description: 'Robust grower cages that provide ample space for developing birds with adjustable features to accommodate growth from 6 weeks to maturity.',
      features: [
        'Expandable space design',
        'Growth-adaptive feeding',
        'Robust construction',
        'Easy bird handling',
        'Ventilation optimization',
        'Space efficiency'
      ],
      usage: [
        'Suitable for 6-20 week birds',
        'Adjustable cage height',
        'Growth monitoring',
        'Feed conversion tracking',
        'Weight management',
        'Health monitoring'
      ],
      applications: [
        'Grower operations',
        'Pullet rearing',
        'Broiler growing',
        'Replacement stock',
        'Commercial growing',
        'Integrated operations'
      ],
      specifications: {
        'Age Range': '6-20 weeks',
        'Capacity': '15-25 birds/cage',
        'Material': 'Heavy-duty galvanized',
        'Warranty': '12 years',
        'Adjustability': 'Growth-adaptive'
      }
    },
    '1004': {
      id: '1004',
      title: 'Water Nipples',
      category: 'Cage Accessories',
      image: 'https://image2url.com/images/1756412000861-b97511ad-9904-4186-a473-a1c41fddfabc.webp',
      images: [
        'https://image2url.com/images/1756412000861-b97511ad-9904-4186-a473-a1c41fddfabc.webp',
        'https://image2url.com/images/1756411779318-d7506b54-000b-4816-ab2c-2b34d21cdc49.jpeg',
        'https://image2url.com/images/1756718175527-f6305db6-05a5-4ece-9234-c15e62e25f2f.jpg'
      ],
      description: 'Our advanced water nipples feature a 360-degree swivel design, manufactured with precision laser-cut stainless steel and food-grade plastic components. The parts are assembled using high-speed automated assembly lines that ensure a leak-proof seal, capable of handling pressures up to 100 PSI. The design minimizes water waste by up to 40%, and each unit is rigorously pressure-tested to guarantee reliability, making it perfect for high-volume poultry operations.',
      features: [
        'Leak-proof design',
        'Easy activation',
        'Corrosion resistant',
        'Multiple flow rates',
        'Easy installation',
        'Long-lasting durability'
      ],
      usage: [
        'Provides fresh water access',
        'Reduces water wastage',
        'Prevents contamination',
        'Easy bird activation',
        'Consistent flow rate',
        'Minimal maintenance'
      ],
      applications: [
        'Poultry cage systems',
        'Waterer installations',
        'Automated watering',
        'Hygiene systems',
        'All cage types',
        'Retrofit installations'
      ],
      specifications: {
        'Flow Rate': '40-60 ml/min',
        'Material': 'Stainless steel',
        'Thread': 'Standard fitting',
        'Warranty': '5 years',
        'Installation': 'Universal mount'
      }
    },
    '1005': {
      id: '1005',
      title: 'PVC/GI-Feeders',
      category: 'Cage Accessories',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        'https://image2url.com/images/1756411393949-ab90bef3-fed9-48de-b27a-2ce7b6e8bf8e.jpeg',
        'https://image2url.com/images/1756719320272-79c48274-7236-49d9-966b-d61738edded7.avif',
        'https://image2url.com/images/1756719411267-591d213a-ec80-4f59-b99c-95c9bb564d7a.webp'
      ],
      description: 'Our feeders are crafted using injection molding techniques with UV-stabilized PVC for outstanding durability, even in extreme outdoor conditions. Each feeder undergoes automated extrusion and cutting processes, ensuring precision and uniformity in every piece. The materials are anti-scratch coated and treated with anti-clogging technology. Available in sizes from 10 to 15 feet, they are customizable for various feeding systems, ensuring efficient and effective feed disbursement.',
      features: [
        'Weather resistant PVC',
        'UV stabilized material',
        'Easy installation',
        'Chemical resistance',
        'Lightweight design',
        'Cost-effective solution'
      ],
      usage: [
        'Pipe connections',
        'System integration',
        'Weather protection',
        'Chemical compatibility',
        'Easy maintenance',
        'Long-term reliability'
      ],
      applications: [
        'Watering systems',
        'Feed distribution',
        'Ventilation systems',
        'Cage connections',
        'Plumbing applications',
        'System retrofits'
      ],
      specifications: {
        'Material': 'High-grade PVC',
        'Pressure Rating': 'Up to 150 PSI',
        'Temperature': '-10°C to 60°C',
        'Warranty': '10 years',
        'Standards': 'ISO certified'
      }
    },
    '1006': {
      id: '1006',
      title: 'Distribution Pipes',
      category: 'Cage Accessories',
      image: '/lovable-uploads/8afb721d-0c4b-4523-aa58-c2997a491b54.png',
      images: [
        'https://image2url.com/images/1756411631696-d31ff49e-7b0d-437a-ac27-7d8f637723ea.webp',
        'https://image2url.com/images/1756411570206-4b032d6c-c72e-4c30-8d2a-9d3979edac8a.jpg',
        'https://image2url.com/images/1756411603207-8edcae55-41ab-4332-8e4f-119193d1c927.webp'
      ],
      description: 'Our PVC pipes are engineered with extrusion moulding, using a unique polymer blend for increased flexibility and durability. They are reinforced with UV-resistant additives to handle a wide temperature range from -20°C to 60°C. Each pipe undergoes ultrasonic welding for secure joints, and is tested under high-pressure environments to ensure resistance to bursts. Available in diameters from 20mm to 50mm, our pipes are built for easy integration with various coupling systems.',
      features: [
        'Corrosion resistant coating',
        'Optimal flow design',
        'Easy joint connections',
        'Pressure tested',
        'Food-grade materials',
        'Multiple diameter options'
      ],
      usage: [
        'Water distribution',
        'Feed transportation',
        'System connectivity',
        'Pressure maintenance',
        'Flow optimization',
        'System reliability'
      ],
      applications: [
        'Poultry watering systems',
        'Feed distribution networks',
        'Pneumatic systems',
        'Cleaning systems',
        'Ventilation ducting',
        'System integration'
      ],
      specifications: {
        'Material': 'Galvanized steel/PVC',
        'Diameter': '25mm to 150mm',
        'Pressure': 'Up to 200 PSI',
        'Warranty': '15 years',
        'Standards': 'Food-grade certified'
      }
    },
    '1007': {
      id: '1007',
      title: 'Weld Mesh Panels',
      category: 'Weld Mesh',
      image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
      images: [
        'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
        'https://image2url.com/images/1756718603006-2148b235-fcbd-417f-995d-500e6ea63c61.jpg',
        '/lovable-uploads/e1fab63a-52b7-4282-86b5-75c0b4a79b15.png'
      ],
      description: 'SVR is a leader in poultry equipment, delivering precision-engineered cage mesh made from high-grade galvanized steel with a zinc coating from 90 GSM to 275 GSM, ensuring superior corrosion resistance. Our mesh is produced using state-of-the-art automated welding techniques, providing consistent spacing and strength with a tensile strength of up to 500 N/mm². Utilizing CNC-cutting & controlled bending machines, we achieve flawless angles and shapes, ensuring easy installation and long-lasting stability in a variety of climates.',
      features: [
        'High-strength welded joints',
        'Corrosion resistant coating',
        'Multiple mesh sizes',
        'Easy installation',
        'Weather resistance',
        'Custom configurations'
      ],
      usage: [
        'Poultry enclosures',
        'Security applications',
        'Cage construction',
        'Partition systems',
        'Boundary fencing',
        'Ventilation panels'
      ],
      applications: [
        'Poultry housing construction',
        'Farm security fencing',
        'Cage system components',
        'Boundary protection',
        'Industrial facilities',
        'Agricultural operations'
      ],
      specifications: {
        'Wire Gauge': '2.5-6mm',
        'Mesh Size': '25x25mm to 100x100mm',
        'Material': 'Galvanized steel',
        'Warranty': '8 years',
        'Coating': 'Hot-dip galvanized'
      }
    },
    '1008': {
      id: '1008',
      title: 'Chain Link Fencing',
      category: 'Weld Mesh',
      image: 'https://www.cadischprecisionmeshes.co.uk/images/guides/211.jpg',
      images: [
        'https://image2url.com/images/1756718674672-18b61b8a-b355-431d-b29d-a51df0ad2070.jpg',
        'https://image2url.com/images/1756412398063-d7b892c6-b545-4cdf-bbb2-7d973198b7ce.webp',
        'https://image2url.com/images/1756412425318-d1635325-f750-4ebe-8928-4cc8c91ecba6.webp'
      ],
      description: 'Chain Link Fencing also popularly known as Galvanized Chain Link Fence are Rust Proof with Silver Finish, manufactured from Heavy Coated Hot Dip Galvanized GI Wires with minimum from 90 to max of 275 gsm Zinc Coating',
      features: [
        'Interlocked wire design',
        'Flexible installation',
        'High security rating',
        'Weather resistant',
        'Multiple heights available',
        'Easy maintenance'
      ],
      usage: [
        'Perimeter security',
        'Poultry enclosures',
        'Access control',
        'Predator protection',
        'Boundary marking',
        'Temporary fencing'
      ],
      applications: [
        'Poultry farm security',
        'Free-range enclosures',
        'Perimeter fencing',
        'Access control systems',
        'Predator protection',
        'Temporary installations'
      ],
      specifications: {
        'Wire Gauge': '2.5-4mm',
        'Mesh Size': '50x50mm diamond',
        'Height': '1m to 3m',
        'Warranty': '10 years',
        'Installation': 'Professional setup'
      }
    },
    // Feed Manufacturing Category
    '2001': {
      id: '2001',
      title: 'Rooter Feed Trolley',
      category: 'Feed Trolley',
      image: 'https://image2url.com/images/1756717371699-2be5326b-54f6-4012-b2be-81231d416a89.png',
      images: [
        'https://image2url.com/images/1756717317930-5d171128-870a-4554-9f15-3ed0877eda1f.jpg',
        'https://image2url.com/images/1756544678430-081e341a-1b57-42c2-b4ca-163738421601.jpg',
        'https://image2url.com/images/1756544819802-5bd1b828-8e95-4375-addb-65238519e35a.jpg'
      ],
      description: 'The system is very accurate and maintains a uniform flow fans (Aluminum rooter) in rooters are made of hard aluminum material and can be operated electrically & manually Auger system with silos are installed outside the shed by which feed wastage can be controlled less man power ,feeding can be done within 10 minutes.',
      features: [
        'Precision feed distribution',
        'Advanced mobility system',
        'Large capacity storage',
        'Easy maneuverability',
        'Dust-free operation',
        'Automated controls'
      ],
      usage: [
        'Mobile feed distribution',
        'Precise portion control',
        'Multi-location feeding',
        'Reduced labor requirements',
        'Consistent feed quality',
        'Time-efficient operation'
      ],
      applications: [
        'Large poultry farms',
        'Multi-building operations',
        'Commercial feeding',
        'Automated systems',
        'Feed distribution services',
        'Contract farming'
      ],
      specifications: {
        'Capacity': '500-2000 kg',
        'Mobility': 'Motorized system',
        'Control': 'Automated dispensing',
        'Warranty': '3 years',
        'Operation': 'Battery powered'
      }
    },
    '2002': {
      id: '2002',
      title: 'Garata Feed Trolley',
      category: 'Feed Trolley',
      image: '/lovable-uploads/d7703451-5a3e-42ab-8566-1c44f16fdeca.png',
      images: [
        'https://image2url.com/images/1756545203150-136b49aa-177d-4494-aeec-e40ab4238f29.jpg',
        'https://image2url.com/images/1756545233797-95433c30-3911-4eea-a9d3-4b196f1a7f7d.jpg',
      ],
      description: 'The system is very accurate and maintains feed in uniform level from starting to ending of shed and can be operated electrically & manually ,feed saving is very high compared to rooter trolley.',
      features: [
        'Enhanced mobility design',
        'High capacity storage',
        'Smart distribution system',
        'Remote operation capability',
        'Weather protection',
        'Easy maintenance access'
      ],
      usage: [
        'Large-scale feed distribution',
        'Remote operation control',
        'Weather-resistant operation',
        'High-volume capacity',
        'Precision feeding',
        'Automated scheduling'
      ],
      applications: [
        'Industrial poultry farms',
        'Large commercial operations',
        'Multi-site feeding',
        'Automated feeding systems',
        'Remote location feeding',
        'High-capacity operations'
      ],
      specifications: {
        'Capacity': '1000-3000 kg',
        'Mobility': 'Advanced drive system',
        'Control': 'Remote operation',
        'Warranty': '5 years',
        'Features': 'GPS tracking'
      }
    },
    '2003': {
      id: '2003',
      title: 'Feed Manufacturing Plants',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        'https://image2url.com/images/1756727297611-60225ba7-e51b-4ef3-a961-919595537a4c.jpg',
        '/lovable-uploads/e6c1c0a4-2f52-437f-84d7-2104e8b0cc91.png',
        '/lovable-uploads/f2c1441c-8630-47f7-a4cc-284e064d2ee3.png'
      ],
      description: 'This feed plant is designed to produce feed efficiently and economically for small-scale poultry farming operations Capacity of this plant Ranges from 500 kg/hr to 2 tons/hr, suitable for small to medium poultry terms As it occupies minimal space while ensuring optimal performance. This plant uses-energy-efficient motors and equipment to reduce operational costs.\n This plant consists of full-screen grinder which is used to crush raw materials like com, wheat soybeans, and other grains into fine particles Ensures uniform particle Size for better feed digestibility.\n Weighing System uses electronic for accurate measurement of ingredients Ensures precise feed formulation for balanced poultry nutrition.',
      features: [
        'Complete manufacturing line',
        'Automated control systems',
        'Quality assurance integration',
        'Scalable production capacity',
        'Energy-efficient operation',
        'Real-time monitoring'
      ],
      usage: [
        'Large-scale feed production',
        'Multi-formula manufacturing',
        'Quality-controlled output',
        'Automated operations',
        'Continuous production',
        'Inventory management'
      ],
      applications: [
        'Commercial feed mills',
        'Industrial production',
        'Large-scale operations',
        'Multi-product facilities',
        'Export-oriented units',
        'Contract manufacturing'
      ],
      specifications: {
        'Capacity': '5-50 tons/hour',
        'Automation': 'Full PLC control',
        'Quality': 'ISO certified',
        'Warranty': '7 years',
        'Monitoring': 'Real-time systems'
      },
      tableData: [
        { model: 'SVRDG10', power: '23 hp', capacity: '2-3 TPH' },
        { model: 'SVRDG20', power: '36 hp', capacity: '4-5 TPH' },
        { model: 'SVRDG30', power: '46 hp', capacity: '6-7 TPH' },
        { model: 'SVRDG40', power: '61 hp', capacity: '7-8 TPH' },
        { model: 'SVRDG50', power: '71 hp', capacity: '10-12 TPH' },
      ]
    },
    '2004': {
      id: '2004',
      title: 'Full Screen Grinder',
      category: 'Feed Plants',
      image: 'https://image2url.com/images/1756052616063-ef8f22ca-a041-46d5-8cc3-e1f3523bf34f.jpg',
      images: [
        'https://image2url.com/images/1756543454084-439558c9-2955-43ff-a369-3fb9ab166487.jpg',
        'https://image2url.com/images/1756543419745-dc9d6ab2-01bc-4bb6-a202-d78e43ecd9f5.jpg',
        'https://image2url.com/images/1756543498678-097ad69b-9869-413e-9713-ead18083fd1a.jpg'
      ],
      description: 'A full-screen grinder features an 85% screening area, significantly larger than the 50% found in half-screen grinders This design effectively addresses various fine and coarse grinding challenges Additionally, it is widely used in cattle feed production. Our full-screen grinders, with capacities ranging from 1 ton hour to 12 tons/hour and beyond, come with several advanced features that make them a preferred choice in the industry',
      features: [
        'Full screen grinding technology',
        'Particle size control',
        'High efficiency operation',
        'Low energy consumption',
        'Easy screen replacement',
        'Dust collection system'
      ],
      usage: [
        'Fine particle grinding',
        'Uniform feed texture',
        'Energy-efficient processing',
        'Consistent output quality',
        'Reduced processing time',
        'Minimal maintenance'
      ],
      applications: [
        'Feed processing plants',
        'Grain processing',
        'Ingredient preparation',
        'Custom feed production',
        'Quality enhancement',
        'Industrial grinding'
      ],
      specifications: {
        'Capacity': '2-15 tons/hour',
        'Screen Size': '1-10mm',
        'Power': '22-132 kW',
        'Warranty': '3 years',
        'Efficiency': '95%+ grinding'
      }
    },
    '2005': {
      id: '2005',
      title: 'Precision Weighing Bins',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        'https://image2url.com/images/1756545513458-1ac748f3-a057-43b2-a83d-e9add2d3ee8b.jpg',
        'https://image2url.com/images/1756545574764-4463bb38-613c-43e3-8ef6-e2159edf7fa8.jpg',
        'https://image2url.com/images/1756545605169-88e0c93d-fdd0-400b-9554-e207dc5b0999.jpg'
      ],
      description: 'Weighing bins operate either electronically or mechanically, with electronic systems being on the more modern and preferred option. Electronic Weigh Bins Featuring electronic scales suspended by load cells, these bins convert force into measurable electrical signals for accurate and reliable weight measurements They are low maintenance and highly precise Electronic weighing bins are available in various configurations, depending the type of batch plant/feed plant.',
      features: [
        'High-precision load cells',
        'Data logging capability',
        'Automated batching',
        'Recipe management',
        'Quality control integration',
        'Remote monitoring'
      ],
      usage: [
        'Accurate ingredient weighing',
        'Batch composition control',
        'Recipe consistency',
        'Quality assurance',
        'Inventory tracking',
        'Production monitoring'
      ],
      applications: [
        'Feed manufacturing',
        'Batch production systems',
        'Quality control applications',
        'Recipe-based production',
        'Automated systems',
        'Commercial operations'
      ],
      specifications: {
        'Accuracy': '±0.1%',
        'Capacity': '50-2000 kg',
        'Control': 'Digital display',
        'Warranty': '5 years',
        'Certification': 'Trade approved'
      }
    },
    '2006': {
      id: '2006',
      title: 'Feed Mixers',
      category: 'Feed Plants',
      image: '/lovable-uploads/8da81a5b-ee76-447b-bcda-9e3ae3c66350.png',
      images: [
        'https://image2url.com/images/1756545685590-96ee8a53-cc84-4ec6-aaca-124b5663e0cf.jpg',
        'https://image2url.com/images/1756545725732-885f8889-4759-4591-9a26-5c34f3090422.jpg',
        'https://image2url.com/images/1756545766560-c33027f0-7cfe-4dce-8ea5-03fe4806e2bb.jpg'
      ],
      description: 'Ribbon Mixers A U-shaped horizontal trough with helical ribbons on a central shaft Ribbons move materials in opposing directions to achieve a uniform mix, A uniform blend. Paddle Mixers A horizontal cylindrical shell with paddles mounted on a central shaft Paddles lift and drop materials to create a uniform mix Both mixers are available in various sizes and capacities, ranging from 500 kg/batch to 5000 kg/batch and beyond, to suit different production needs',
      features: [
        'Uniform mixing technology',
        'Variable speed control',
        'Large capacity operation',
        'Easy discharge system',
        'Minimal mixing time',
        'Consistent output quality'
      ],
      usage: [
        'Ingredient blending',
        'Uniform composition',
        'Batch mixing operations',
        'Quality consistency',
        'High-volume processing',
        'Automated operation'
      ],
      applications: [
        'Feed manufacturing plants',
        'Large-scale mixing',
        'Commercial production',
        'Quality-controlled mixing',
        'Industrial applications',
        'Automated systems'
      ],
      specifications: {
        'Capacity': '500-5000 kg/batch',
        'Mixing Time': '3-8 minutes',
        'Power': '15-75 kW',
        'Warranty': '5 years',
        'Output': 'Uniform composition'
      }
    }
  };

  const product = subProducts[id as keyof typeof subProducts];

  // Auto-slide effect for images
  useEffect(() => {
    if (product?.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [id, product]);

  // Enhanced function to handle navigation to contact page with product data
  const handleNavigateToContact = () => {
    console.log("Navigating to contact page with product ID:", id);
    
    if (!product) {
      console.error("No product found for navigation");
      return;
    }

    // Create a minimal product data object to avoid circular references
    const productData = {
      id: id,
      title: product.title || 'Product',
      category: product.category || 'General Inquiry',
      image: product.image || '',
      description: product.description || ''
    };

    console.log("Product data being passed:", productData);
    
    try {
      // Navigate to contact page with minimal required data
      navigate('/contact', { 
        state: { 
          selectedProduct: productData.title,
          selectedCategory: productData.category,
          fromProductPage: true
        },
        replace: false
      });
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to simple navigation without state
      navigate('/contact');
    }
  };

  // Function to handle back navigation
  const handleBackNavigation = () => {
    try {
      // Check if we came from a specific route or use default
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate('/products');
      }
    } catch (error) {
      console.error("Back navigation error:", error);
      navigate('/products');
    }
  };

  // Enhanced function for Get Quote button with error handling
  const handleGetQuote = () => {
    console.log("Get Quote button clicked for product:", product?.title);
    handleNavigateToContact();
  };
  navigate('/contact', { 
    state: { 
      product: product
    },
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The product you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={handleBackNavigation}
            className="mb-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card className="overflow-hidden shadow-2xl" style={{ maxHeight: '500px' }}>
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden">
                  <motion.img
                    key={currentImageIndex}
                    src={product.images ? product.images[currentImageIndex] : product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    onError={(e) => {
                      console.error('Image failed to load:', e.currentTarget.src);
                      // Fallback to default image if current image fails
                      e.currentTarget.src = product.image;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </CardContent>
            </Card>

            {/* Image indicators */}
            {product.images && product.images.length > 1 && (
              <div className="flex justify-center space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Show image ${index + 1}`}
                    title={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="secondary" className="mb-3 text-sm">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                {product.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleGetQuote}
                type="button"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                type="button"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Key Features */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Key Features</h3>
              </div>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-justify">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Usage Benefits */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Usage Benefits</h3>
              </div>
              <ul className="space-y-3">
                {product.usage.map((usage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-justify">{usage}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Applications</h3>
              </div>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-justify">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-background/50' : 'bg-background/30'}
                  >
                    <td className="border px-4 py-2 font-medium text-foreground w-1/3">{key}</td>
                    <td className="border px-4 py-2 text-muted-foreground text-justify">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Table for Feed Manufacturing Plants */}
          {product.id === '2003' && product.tableData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Model</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Power</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.tableData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-background/50' : 'bg-background/30'}>
                        <td className="border border-gray-300 px-4 py-2">{row.model}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.power}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our team to learn more about this product and how it can benefit your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleGetQuote}
                  type="button"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="lg" type="button">
                    View More Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SubProductDetail;