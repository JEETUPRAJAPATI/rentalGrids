import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { Clock, Bell, Calendar, Sparkles } from "lucide-react";

// This is a simple Remotion animation composition
const MyComposition = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(10, 10, 10, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      {/* Background gradient animation */}
      <div
        style={{
          position: "absolute",
          width: "140%",
          height: "140%",
          background:
            "linear-gradient(45deg, rgba(128, 0, 255, 0.3), rgba(255, 0, 128, 0.3), rgba(128, 0, 255, 0.3))",
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 10s ease infinite",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Rent Grids AI
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "center",
            maxWidth: "500px",
            marginTop: "12px",
          }}
        >
          The future of rental management is launching soon
        </p>

        {/* Animated icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          {[
            { icon: "🏢", delay: 0 },
            { icon: "🔍", delay: 0.1 },
            { icon: "📱", delay: 0.2 },
            { icon: "✨", delay: 0.3 },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                transform: `translateY(${Math.sin(Date.now() / 1000 + index) * 5}px)`,
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComingSoonSection = () => {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pulse = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        yoyo: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "AI Property Matching",
      description:
        "Our AI matches your preferences with available properties in seconds",
      color: "from-purple-600 to-blue-500",
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Smart Notifications",
      description:
        "Get instant alerts when properties matching your criteria become available",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Automated Scheduling",
      description:
        "Schedule property viewings automatically without back-and-forth coordination",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "AI Contract Generation",
      description:
        "Generate legally-sound rental contracts customized to your specific needs",
      color: "from-amber-500 to-orange-400",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/10 filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">
              Tech Development in Progress
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building the future of rental management with cutting-edge AI
            technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Player
                component={MyComposition}
                durationInFrames={300}
                fps={30}
                compositionWidth={600}
                compositionHeight={400}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "3/2",
                }}
                controls={false}
                loop
                autoPlay
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="glass-card p-6 border border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Launch Date{" "}
                <span className="gradient-text">Coming Soon</span>
              </h3>
              <p className="text-gray-300 mb-6 relative z-10">
                We're working around the clock to bring you the most innovative
                rental platform India has ever seen. Be the first to know when we
                launch.
              </p>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#hero"
                  className="btn-gradient inline-flex items-center justify-center"
                >
                  Join the Waitlist
                  <motion.span
                    variants={pulse}
                    className="flex h-3 w-3 ml-2"
                  >
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 hover:translate-y-[-5px] transition-all duration-300"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-r ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Development timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            Development Timeline
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {[
              {
                phase: "Phase 1",
                title: "Research & Design",
                status: "Completed",
                date: "April 2023",
              },
              {
                phase: "Phase 2",
                title: "Core Platform Development",
                status: "In Progress",
                date: "Current Phase",
              },
              {
                phase: "Phase 3",
                title: "AI Integration & Testing",
                status: "Coming Soon",
                date: "Q3 2023",
              },
              {
                phase: "Phase 4",
                title: "Beta Launch",
                status: "Planned",
                date: "Q4 2023",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "text-right pr-10" : "text-left pl-10"
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? "0" : "50%",
                  width: "50%",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute top-2 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                  style={{
                    left: index % 2 === 0 ? "auto" : "-3.5px",
                    right: index % 2 === 0 ? "-3.5px" : "auto",
                  }}>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                <div className={`glass-card p-5 ${index % 2 === 0 ? "mr-5" : "ml-5"} hover:border-purple-500/30 transition-all duration-300`}>
                  <div className="text-sm text-purple-400 font-semibold mb-1">
                    {item.phase}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === "Completed" ? "bg-green-500/20 text-green-400" :
                      item.status === "In Progress" ? "bg-blue-500/20 text-blue-400" :
                      "bg-gray-500/20 text-gray-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;