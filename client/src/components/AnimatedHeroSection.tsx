import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "@/lib/validate";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, ArrowRightIcon, Sparkles } from "lucide-react";

const AnimatedHeroSection = () => {
  const containerRef = useRef(null);
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: LeadFormValues) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      reset();
      setFormSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LeadFormValues) => {
    mutation.mutate(data);
  };

  // Get mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating orb animations
  const orbs = [
    { size: 300, color: "purple", delay: 0 },
    { size: 200, color: "pink", delay: 0.5 },
    { size: 250, color: "blue", delay: 1 },
  ];

  // Animated building blocks for 3D effect
  const blocks = Array(12).fill(0).map((_, i) => ({
    x: (i % 4) * 60 - 90,
    y: Math.floor(i / 4) * 60 - 60,
    delay: i * 0.05,
  }));

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="min-h-screen pt-28 pb-20 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full filter blur-[100px] opacity-20 bg-${orb.color}-500`}
            style={{
              width: orb.size,
              height: orb.size,
              top: `calc(50% - ${orb.size / 2}px)`,
              left: `calc(50% - ${orb.size / 2}px)`,
            }}
            animate={{
              x: [100, -100, 100],
              y: [-100, 100, -100],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated grid for 3D effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] perspective-[1000px]"
          style={{
            transform: `translate(-50%, -50%) rotateX(${
              (mousePosition.y - window.innerHeight / 2) * 0.01
            }deg) rotateY(${
              -(mousePosition.x - window.innerWidth / 2) * 0.01
            }deg)`,
          }}
        >
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 glass-card opacity-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 0.15,
                x: block.x,
                y: block.y,
                z: Math.random() * 200 - 100,
              }}
              transition={{
                duration: 1,
                delay: block.delay,
                ease: "easeOut",
              }}
              style={{
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array(50)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20"
            >
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span className="text-sm text-white">India's First AI Rental Platform</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Revolutionizing
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Rentals with
              </motion.span>
              <motion.span
                className="gradient-text block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI Magic
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mt-6 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Join the future of stress-free, smart rentals. Zero brokerage,
              AI-powered matching, and seamless digital leasing experience.
            </motion.p>

            {/* Animated statistics */}
            <motion.div
              className="flex flex-wrap gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { value: "15,000+", label: "Happy Users" },
                { value: "₹80M+", label: "Brokerage Saved" },
                { value: "97%", label: "Match Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                "No brokerage fees",
                "Secure transactions",
                "24/7 AI support",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                >
                  <CheckIcon className="w-4 h-4 mr-1 text-purple-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="card-3d"
          >
            <div className="card-3d-inner">
              <motion.div
                className="glass-card p-8 border border-white/10 relative overflow-hidden"
                whileHover={{ boxShadow: "0 30px 60px rgba(138, 85, 247, 0.2)" }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1200px) rotateX(${
                    (mousePosition.y - window.innerHeight / 2) * 0.01
                  }deg) rotateY(${
                    -(mousePosition.x - window.innerWidth / 2) * 0.01
                  }deg)`,
                }}
              >
                {/* Reflective effect */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                {formSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        damping: 8,
                        stiffness: 100,
                      }}
                    >
                      <CheckIcon className="h-10 w-10 text-green-500" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-semibold mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Thank you for joining our waitlist!
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      We'll notify you as soon as early access is available.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        className="btn-gradient px-8 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormSubmitted(false)}
                      >
                        Invite a Friend
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      className="mb-6 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h2
                        className="text-2xl font-bold mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        Get Early Access
                      </motion.h2>
                      <motion.p
                        className="text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Be among the first to experience the rental revolution
                      </motion.p>
                    </motion.div>

                    <AnimatePresence>
                      <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            className={`form-input ${
                              errors.name ? "border-red-500" : ""
                            }`}
                            {...register("name")}
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1 text-sm text-red-500"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
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
                            placeholder="Enter your email"
                            className={`form-input ${
                              errors.email ? "border-red-500" : ""
                            }`}
                            {...register("email")}
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1 text-sm text-red-500"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            className={`form-input ${
                              errors.phone ? "border-red-500" : ""
                            }`}
                            {...register("phone")}
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1 text-sm text-red-500"
                            >
                              {errors.phone.message}
                            </motion.p>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <motion.button
                            type="submit"
                            className="glow-button btn-gradient w-full flex items-center justify-center gap-2"
                            disabled={mutation.isPending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {mutation.isPending ? (
                              "Submitting..."
                            ) : (
                              <>
                                Join the Waitlist
                                <ArrowRightIcon className="h-4 w-4 ml-1" />
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      </motion.form>
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedHeroSection;