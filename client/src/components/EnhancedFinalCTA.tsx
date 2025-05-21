import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const EnhancedFinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parallax scrolling effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real app, you'd call the API here
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 filter blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 20, 0] 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-600/10 filter blur-[100px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, 30, 0],
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Particle effect */}
      <div className="absolute inset-0 -z-10">
        {Array(50).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [Math.random() * 0.3 + 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <motion.div
          className="glass-card backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-1"
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            damping: 20
          }}
          whileHover={{
            boxShadow: "0 30px 60px rgba(138, 85, 247, 0.15)"
          }}
        >
          {/* Gradient border effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "linear-gradient(45deg, #a855f7 0%, #ec4899 100%)",
                "linear-gradient(90deg, #ec4899 0%, #a855f7 100%)",
                "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                "linear-gradient(180deg, #ec4899 0%, #a855f7 100%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="p-10 md:p-16 bg-[#0a0a0a]/90 rounded-xl relative z-10">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              {/* CTA text - 3 columns */}
              <div className="md:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Sparkles className="text-purple-500 w-5 h-5" />
                    <span className="text-purple-400 font-medium">LIMITED EARLY ACCESS</span>
                  </motion.div>

                  <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Ready to Transform Your <br />
                    <span className="gradient-text">Rental Experience?</span>
                  </motion.h2>

                  <motion.p
                    className="text-xl text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Join thousands of users already revolutionizing how they find and manage rental properties with our AI-powered platform.
                  </motion.p>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {[
                      "Zero brokerage fees forever",
                      "AI-powered property matching",
                      "Digital lease signing",
                      "Early access to new features",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-200">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Form - 2 columns */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="glass-card backdrop-blur-md border border-white/10 p-8 rounded-xl relative"
                  animate={isHovered ? {
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                  } : {}}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.1 }}
                        >
                          <CheckCircle className="w-8 h-8 text-green-500" />
                        </motion.div>
                        <motion.h3
                          className="text-2xl font-bold mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          You're on the list!
                        </motion.h3>
                        <motion.p
                          className="text-gray-300 mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          We'll notify you as soon as early access is available. Get ready for a revolutionary rental experience!
                        </motion.p>
                        <motion.button
                          className="text-sm text-purple-400 flex items-center mx-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          onClick={() => setIsSubmitted(false)}
                        >
                          <span>Add another email</span>
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h3
                          className="text-xl font-bold mb-4 text-center"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          Get Early Access Now
                        </motion.h3>
                        <motion.p
                          className="text-gray-400 mb-6 text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Join our exclusive waitlist today
                        </motion.p>

                        <form onSubmit={handleSubmit}>
                          <motion.div
                            className="mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-300 mb-1"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                              className="form-input bg-white/5 border-white/10 focus:border-purple-500"
                            />
                          </motion.div>

                          <motion.button
                            type="submit"
                            className="w-full btn-gradient flex items-center justify-center gap-2 py-3"
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            Join the Waitlist
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </form>

                        <motion.div
                          className="mt-6 pt-6 border-t border-white/10 text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-sm text-gray-400">
                            By joining, you agree to our Terms of Service and Privacy Policy
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
              title: "Featured In",
              name: "TechCrunch",
            },
            {
              img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
              title: "Partner",
              name: "YCombinator",
            },
            {
              img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120",
              title: "Award",
              name: "AI Innovation 2023",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 glass-card backdrop-blur-sm p-3 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400">{item.title}</div>
                <div className="text-sm font-medium">{item.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedFinalCTA;