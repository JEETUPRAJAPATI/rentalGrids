import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "@/lib/validate";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, ArrowRightIcon, Sparkles, Crown, Star, BadgeCheck, BellRing } from "lucide-react";

const EnhancedHeroSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  // Tracking mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 30px 60px rgba(138, 85, 247, 0.2)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  };

  // Text animation
  const headline = "Revolutionizing Rentals with AI";
  const headlineArray = headline.split("");

  // Generate 3D objects for background
  const generateFloatingObjects = () => {
    return Array(8).fill(0).map((_, i) => {
      const size = Math.random() * 60 + 40;
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        rotate: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.8
      };
    });
  };

  const floatingObjects = generateFloatingObjects();

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D objects */}
        {floatingObjects.map((obj) => (
          <motion.div
            key={obj.id}
            className="absolute glass-card border border-white/10 rounded-lg"
            style={{
              width: obj.size,
              height: obj.size,
              x: `${obj.x}%`,
              y: `${obj.y}%`,
              rotate: obj.rotate,
              opacity: 0.1
            }}
            animate={{
              x: [`${obj.x}%`, `${(obj.x + 10) % 100}%`],
              y: [`${obj.y}%`, `${(obj.y + 10) % 100}%`],
              rotate: [obj.rotate, obj.rotate + 180],
              scale: [obj.scale, obj.scale * 1.2, obj.scale]
            }}
            transition={{
              duration: obj.duration,
              delay: obj.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-600/10 filter blur-[100px]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Star field */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(200).fill(0).map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div style={{ y, opacity }}>
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 flex items-center w-fit mb-8"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Crown className="w-3 h-3 text-white" />
              </motion.div>
              <span className="text-sm">India's First AI-Powered Rental Platform</span>
            </motion.div>

            {/* Animated headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {headlineArray.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === " " ? "mr-4 inline-block" : "inline-block"}
                  style={{
                    color: index > 23 ? "transparent" : "white",
                    backgroundClip: index > 23 ? "text" : "none",
                    backgroundImage: index > 23 ? "linear-gradient(to right, #a855f7, #ec4899)" : "none"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-xl"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              Join the future of stress-free, smart rentals. Zero brokerage, AI-powered matching, and a seamless digital leasing experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-8 mb-8"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: <BellRing className="w-5 h-5 text-purple-500" />, value: "15,000+", label: "Happy Users" },
                { icon: <BadgeCheck className="w-5 h-5 text-green-500" />, value: "₹80M+", label: "Brokerage Saved" },
                { icon: <Star className="w-5 h-5 text-yellow-400" />, value: "97%", label: "Match Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-white/5 backdrop-blur-lg border border-white/10 px-4 py-3 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.9 + (i * 0.1) }
                  }}
                >
                  <div className="flex items-center justify-center mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[
                "No brokerage fees",
                "Secure transactions",
                "24/7 AI support",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center bg-white/5 backdrop-blur-lg border border-white/10 px-3 py-1.5 rounded-full"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.3 + (i * 0.1) }}
                >
                  <CheckIcon className="w-4 h-4 mr-2 text-purple-500" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Form with 3D effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D perspective container */}
            <motion.div
              className="perspective-[1000px]"
              style={{
                transform: isHovered
                  ? `rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${-(mousePosition.y - 0.5) * 10}deg)`
                  : "rotateY(0deg) rotateX(0deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out"
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3), transparent 70%)",
                    "radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.3), transparent 70%)",
                    "radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.3), transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  filter: "blur(20px)"
                }}
              />

              {/* Card content */}
              <motion.div
                className="glass-card p-8 border border-white/10 relative backdrop-blur-md rounded-xl"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0px)"
                }}
              >
                {/* Reflective surface */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-xl pointer-events-none" />

                {/* Success state */}
                {formSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-4 gradient-text">
                        Thank you for joining!
                      </h3>
                      <p className="text-gray-300 mb-6">
                        We'll notify you as soon as early access is available.
                      </p>
                      <motion.button
                        className="btn-gradient px-8 py-3 flex items-center justify-center mx-auto gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormSubmitted(false)}
                        style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Share with Friends</span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="mb-6"
                        style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
                      >
                        <motion.div
                          className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(168, 85, 247, 0.4)",
                              "0 0 20px rgba(168, 85, 247, 0.6)",
                              "0 0 0 rgba(168, 85, 247, 0.4)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles className="w-6 h-6 text-white" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-center mb-2">
                          Get <span className="gradient-text">Early Access</span>
                        </h2>
                        <p className="text-gray-400 text-center">
                          Be among the first to experience the rental revolution
                        </p>
                      </motion.div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
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
                              errors.name ? "border-red-500" : "border-white/10"
                            } focus:border-purple-500 backdrop-blur-md bg-white/5`}
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
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
                              errors.email ? "border-red-500" : "border-white/10"
                            } focus:border-purple-500 backdrop-blur-md bg-white/5`}
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
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
                              errors.phone ? "border-red-500" : "border-white/10"
                            } focus:border-purple-500 backdrop-blur-md bg-white/5`}
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="pt-2"
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
                        >
                          <motion.button
                            type="submit"
                            className="glow-button btn-gradient w-full flex items-center justify-center gap-2 py-3"
                            disabled={mutation.isPending}
                            whileHover={{
                              scale: 1.03,
                              boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                            }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {mutation.isPending ? (
                              <motion.div
                                className="w-5 h-5 border-t-2 border-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            ) : (
                              <>
                                Join the Waitlist
                                <ArrowRightIcon className="h-4 w-4" />
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            </motion.div>

            {/* Decorative elements around the form */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-lg z-20"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-pink-500/30 backdrop-blur-lg z-20"
              animate={{
                y: [10, -10, 10],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.p className="text-gray-400 text-sm mb-2">Scroll to explore</motion.p>
        <motion.div
          className="w-5 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;