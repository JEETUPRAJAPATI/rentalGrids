import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Star, Sparkles, Zap, Building, Key, Clock, Shield } from "lucide-react";

const AnimatedFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const cardVariants: Variants = {
    default: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Interactive card hover state
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Building className="w-10 h-10 text-white" />,
      gradient: "from-purple-600 to-blue-500",
      title: "Smart Property Matching",
      description: "Our AI analyzes thousands of properties and matches you with the perfect home based on your lifestyle and preferences."
    },
    {
      icon: <Key className="w-10 h-10 text-white" />,
      gradient: "from-pink-500 to-red-500",
      title: "One-Click Leasing",
      description: "Sign digital lease agreements, pay security deposits, and get your keys - all from your smartphone, no paperwork needed."
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      gradient: "from-amber-500 to-orange-500",
      title: "24/7 AI Assistant",
      description: "Have questions at 3AM? Our AI assistant handles maintenance requests, answers questions, and resolves issues instantly."
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      gradient: "from-green-500 to-emerald-500",
      title: "Secure Transactions",
      description: "Bank-grade security protocols protect your personal and financial information throughout the rental process."
    }
  ];

  const particlesCount = 30; // Number of particles
  
  return (
    <section 
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(particlesCount)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [Math.random() * 0.2 + 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/3 w-full h-full bg-gradient-to-b from-purple-600/10 to-transparent rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-full h-full bg-gradient-to-b from-pink-600/10 to-transparent rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <div className="inline-block relative mb-3">
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative bg-[#0a0a0a] rounded-full p-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Revolutionary AI Features</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our cutting-edge technology simplifies every aspect of renting
          </motion.p>

          {/* Animated highlight badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Zero Brokerage", 
              "AI-Powered", 
              "24/7 Support", 
              "Instant Matching"
            ].map((item, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20 inline-flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-purple-500" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card relative overflow-hidden group"
              variants={itemVariants}
              initial="default"
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <motion.div 
                className={`absolute inset-0 opacity-0 bg-gradient-to-br ${feature.gradient} z-0`}
                animate={{ opacity: hoveredCard === index ? 0.15 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content */}
              <div className="p-8 relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 10px 25px -5px ${
                      feature.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.4)' :
                      feature.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.4)' :
                      feature.gradient.includes('amber') ? 'rgba(245, 158, 11, 0.4)' :
                      'rgba(16, 185, 129, 0.4)'
                    }`
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                {/* Interactive particle effect on hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <>
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${feature.gradient}`}
                          initial={{
                            opacity: 1,
                            scale: 0,
                            x: "50%",
                            y: "50%",
                          }}
                          animate={{
                            opacity: 0,
                            scale: Math.random() * 3 + 1,
                            x: `${Math.random() * 100 - 50}%`,
                            y: `${Math.random() * 100 - 50}%`,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating badges */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="glass-card px-5 py-3 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FACC15" />
              ))}
            </div>
            <div>
              <div className="font-bold text-sm">4.9/5 Rating</div>
              <div className="text-xs text-gray-400">Based on 2,400+ reviews</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card px-5 py-3 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="font-bold text-sm">98% Faster</div>
              <div className="text-xs text-gray-400">Than traditional renting</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card px-5 py-3 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="gradient-bg px-3 py-1 rounded-full text-white text-xs font-bold">
              NEW
            </div>
            <div>
              <div className="font-bold text-sm">AI Match Technology</div>
              <div className="text-xs text-gray-400">Launching Q3 2023</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedFeatures;