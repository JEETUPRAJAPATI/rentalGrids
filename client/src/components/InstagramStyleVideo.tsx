import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

type VideoReel = {
  id: number;
  videoUrl: string; // For actual implementation, use real video sources
  authorName: string;
  authorAvatar: string;
  likes: number;
  comments: number;
  caption: string;
  isLiked: boolean;
  isSaved: boolean;
};

const mockReels: VideoReel[] = [
  {
    id: 1,
    videoUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    authorName: "rentgrids_official",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    likes: 2458,
    comments: 124,
    caption: "Discover our new AI-powered rental platform! Zero brokerage, seamless experience. #RentGrids #AI #RentalRevolution",
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    videoUrl: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db",
    authorName: "property_tech",
    authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    likes: 1857,
    comments: 89,
    caption: "Transforming how you find your dream home with AI. No more tedious property searches! #FutureTech #PropTech",
    isLiked: false,
    isSaved: false,
  },
  {
    id: 3,
    videoUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    authorName: "smart_homes",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    likes: 3241,
    comments: 156,
    caption: "AI tech making rental management smarter and easier than ever. See how it works! #SmartLiving #TechInnovation",
    isLiked: false,
    isSaved: false,
  }
];

const InstagramVideo = ({ reel, isActive }: { reel: VideoReel; isActive: boolean }) => {
  const [localReel, setLocalReel] = useState(reel);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Simulating video with image due to autoplay restrictions, in production use actual videos
  const handleLike = () => {
    setLocalReel(prev => ({
      ...prev, 
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const handleSave = () => {
    setLocalReel(prev => ({
      ...prev,
      isSaved: !prev.isSaved
    }));
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <motion.div 
      className="relative w-full h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Video content - using img as placeholder since we can't actually stream video in this environment */}
      <div className="relative flex-grow bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${reel.videoUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1400)`,
            backgroundPosition: 'center center'
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
        
        {/* UI Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div 
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-0.5"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={reel.authorAvatar} 
                  alt={reel.authorName} 
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
              </motion.div>
              <span className="text-white font-semibold text-sm">{reel.authorName}</span>
              <motion.button 
                className="text-white text-xs bg-white/20 px-2 py-0.5 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow
              </motion.button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <MoreHorizontal className="text-white w-5 h-5" />
            </motion.button>
          </div>
          
          {/* Bottom section */}
          <div>
            <p className="text-white text-sm mb-3 line-clamp-2">{reel.caption}</p>
            
            {/* Action buttons */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <motion.button 
                  className="text-white flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                >
                  <Heart 
                    className={`w-6 h-6 ${localReel.isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                  />
                  <span className="text-xs mt-1">{localReel.likes.toLocaleString()}</span>
                </motion.button>
                
                <motion.button 
                  className="text-white flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs mt-1">{localReel.comments}</span>
                </motion.button>
                
                <motion.button 
                  className="text-white flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-6 h-6" />
                  <span className="text-xs mt-1">Share</span>
                </motion.button>
              </div>
              
              <motion.button 
                className="text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSave}
              >
                <Bookmark 
                  className={`w-6 h-6 ${localReel.isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} 
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InstagramStyleVideo = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  
  // Auto advance reels
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReelIndex(prev => (prev + 1) % mockReels.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextReel = () => {
    setCurrentReelIndex(prev => (prev + 1) % mockReels.length);
  };
  
  const prevReel = () => {
    setCurrentReelIndex(prev => (prev - 1 + mockReels.length) % mockReels.length);
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121218] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0] 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0] 
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">The Buzz is Real</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            See what people are saying about Rent Grids on social media
          </motion.p>
        </motion.div>

        {/* Instagram-style video reel interface */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ opacity, scale }}
          >
            {/* Video reel container */}
            <div className="absolute inset-0 bg-black">
              <AnimatePresence mode="wait">
                <InstagramVideo 
                  key={currentReelIndex}
                  reel={mockReels[currentReelIndex]} 
                  isActive={true} 
                />
              </AnimatePresence>
            </div>
            
            {/* Navigation dots */}
            <div className="absolute top-4 left-0 right-0 flex justify-center space-x-1 z-20">
              {mockReels.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 rounded-full ${i === currentReelIndex ? 'w-6 bg-white' : 'w-4 bg-white/40'}`}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: i === currentReelIndex ? 1 : 0.7 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
            
            {/* Left/right navigation buttons (invisible but functional) */}
            <button 
              className="absolute left-0 top-0 bottom-0 w-1/3 z-10 cursor-pointer opacity-0"
              onClick={prevReel}
              aria-label="Previous reel"
            />
            <button 
              className="absolute right-0 top-0 bottom-0 w-1/3 z-10 cursor-pointer opacity-0"
              onClick={nextReel}
              aria-label="Next reel"
            />
            
            {/* Instagram app UI frame elements */}
            <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-around px-4 bg-black/30 backdrop-blur-sm z-30">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                </svg>
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </motion.button>
              <motion.button 
                className="w-12 h-12 flex items-center justify-center gradient-bg rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-white text-xl font-bold">+</span>
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">RG</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Call to action below the video */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="#hero"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-4"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(168, 85, 247, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join the Revolution</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <p className="text-gray-400 mt-4 text-sm">Follow us on social media for the latest updates</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstagramStyleVideo;