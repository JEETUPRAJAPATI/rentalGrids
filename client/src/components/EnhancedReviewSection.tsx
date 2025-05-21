import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, Quote, ThumbsUp } from "lucide-react";

interface Review {
  id: number;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  location: string;
  tags: string[];
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Priya Sharma",
    role: "Tenant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
    content: "Finding an apartment in Mumbai was a nightmare until I discovered Rent Grids. Within 3 days I had secured my dream apartment without paying any brokerage! The virtual tours saved me so much time commuting across the city.",
    rating: 5,
    location: "Mumbai",
    tags: ["No Brokerage", "Fast Process", "Virtual Tours"],
    verified: true
  },
  {
    id: 2,
    author: "Rajiv Mehta",
    role: "Landlord",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
    content: "As a property owner with multiple apartments, Rent Grids has been a game-changer. The AI tenant matching found reliable tenants faster than any broker I've worked with, and I save lakhs in commission fees annually.",
    rating: 5,
    location: "Bangalore",
    tags: ["Landlord Benefits", "AI Matching", "Cost Savings"],
    verified: true
  },
  {
    id: 3,
    author: "Ananya Patel",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
    content: "The perfect solution for students! I was able to find accommodation near my college with roommate matching feature. The digital lease signing meant I could secure my place before even arriving in Delhi.",
    rating: 5,
    location: "Delhi",
    tags: ["Student Friendly", "Digital Leasing", "Affordable"],
    verified: true
  },
  {
    id: 4,
    author: "Karthik Reddy",
    role: "Property Manager",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
    content: "The property management dashboard is fantastic. I manage 25+ properties and can track rent payments, maintenance requests, and tenant communications all in one place. Worth every rupee.",
    rating: 4,
    location: "Hyderabad",
    tags: ["Property Management", "Dashboard", "Efficiency"],
    verified: true
  },
  {
    id: 5,
    author: "Neha Kapoor",
    role: "Working Professional",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
    content: "As someone who relocates every few years for work, Rent Grids has made my life so much easier. Their instant background verification and AI apartment matching based on my preferences is simply brilliant!",
    rating: 5,
    location: "Pune",
    tags: ["Remote Friendly", "AI Technology", "Verification"],
    verified: true
  }
];

const EnhancedReviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  // Auto-cycling reviews
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        if (direction === 'right') {
          setActiveIndex((prev) => (prev + 1) % reviews.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
        }
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, direction]);

  // Change direction periodically
  useEffect(() => {
    const directionInterval = setInterval(() => {
      setDirection(prev => prev === 'left' ? 'right' : 'left');
    }, 15000);
    
    return () => clearInterval(directionInterval);
  }, []);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-600/5 to-transparent opacity-50 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-pink-600/5 to-transparent opacity-50 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.05, 1, 1.05],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array(20).fill(0).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-lg font-medium inline-block mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Users <span className="gradient-text">Are Saying</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied users who have transformed 
            their rental experience with our AI-powered platform
          </motion.p>
        </motion.div>

        {/* Review carousel */}
        <div className="relative">
          {/* Auto-direction indicator */}
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 flex items-center space-x-2"
            animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ 
                opacity: isAutoPlaying ? [0.5, 1, 0.5] : 0.3 
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-gray-300">Auto-scrolling {direction === 'right' ? 'right' : 'left'}</span>
          </motion.div>

          {/* Main review display */}
          <div 
            ref={carouselRef}
            className="relative p-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="glass-card p-8 md:p-10 border border-white/10 rounded-xl overflow-hidden relative"
                initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              >
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-0 right-0 -mt-6 -mr-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <Quote className="absolute top-10 left-10 w-16 h-16 text-white/5" />

                <div className="grid md:grid-cols-5 gap-8">
                  {/* Avatar and info */}
                  <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                    <motion.div 
                      className="relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20">
                        <img 
                          src={reviews[activeIndex].avatar} 
                          alt={reviews[activeIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {reviews[activeIndex].verified && (
                        <motion.div 
                          className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                    <div>
                      <motion.h4
                        className="font-semibold text-lg"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {reviews[activeIndex].author}
                      </motion.h4>
                      <motion.div
                        className="text-sm text-gray-400"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {reviews[activeIndex].role}
                      </motion.div>
                      <motion.div
                        className="text-sm text-gray-400"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {reviews[activeIndex].location}
                      </motion.div>
                      <motion.div
                        className="flex mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < reviews[activeIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Review content */}
                  <motion.div 
                    className="md:col-span-4 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.p
                      className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{reviews[activeIndex].content}"
                    </motion.p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {reviews[activeIndex].tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <div className="flex justify-between mt-8 items-center">
              <div className="flex space-x-2">
                {reviews.map((_, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full ${
                      idx === activeIndex
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-white/20"
                    }`}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(idx);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={idx === activeIndex ? { 
                      scale: [1, 1.2, 1],
                      transition: { 
                        duration: 1, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }
                    } : { scale: 1 }}
                  />
                ))}
              </div>

              <div className="flex space-x-3">
                <motion.button
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm"
                  onClick={prevReview}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm"
                  onClick={nextReview}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${
                    isAutoPlaying 
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/30" 
                      : "bg-white/5 text-gray-300"
                  }`}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isAutoPlaying ? (
                    <motion.div 
                      className="w-2 h-2 bg-purple-400 rounded-sm"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  ) : (
                    <motion.div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-gray-300 border-b-[5px] border-b-transparent" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: "4.9", label: "App Store Rating" },
            { value: "15K+", label: "Happy Users" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "₹80M+", label: "Brokerage Saved" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold gradient-text mb-1"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(168, 85, 247, 0)",
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 10px rgba(168, 85, 247, 0)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedReviewSection;