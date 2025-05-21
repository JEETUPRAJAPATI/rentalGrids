import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Player } from "@remotion/player";

// Simple Remotion composition with property UI mockups
const PropertyShowcaseVideo = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, rgba(128, 0, 255, 0.15), transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Property UI mockup */}
      <div
        style={{
          position: "relative",
          width: "90%",
          height: "85%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          backgroundColor: "rgba(26, 26, 36, 0.5)",
          backdropFilter: "blur(10px)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 80px rgba(128, 0, 255, 0.15)",
          overflow: "hidden",
        }}
      >
        {/* Navbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "8px",
                background: "linear-gradient(to right, #a855f7, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              RG
            </div>
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Rent Grids
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            {["Dashboard", "Properties", "Applications", "Messages"].map(
              (item, i) => (
                <div
                  key={i}
                  style={{
                    color: i === 1 ? "white" : "rgba(255, 255, 255, 0.6)",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          ></div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flex: 1,
          }}
        >
          {/* Property images */}
          <div
            style={{
              flex: "0 0 65%",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation: "imageFade 20s infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backgroundColor: "rgba(10, 10, 10, 0.7)",
                backdropFilter: "blur(5px)",
                padding: "10px 16px",
                borderRadius: "8px",
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Modern Apartment in Koramangala
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                ₹45,000/month • 1,200 sq.ft • 2 BHK
              </div>
            </div>
          </div>

          {/* Property details */}
          <div
            style={{
              flex: "0 0 35%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "3px solid #a855f7",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "8px",
                }}
              >
                AI Match Score
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                96%{" "}
                <div
                  style={{
                    width: "60%",
                    height: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "96%",
                      height: "100%",
                      background:
                        "linear-gradient(to right, #a855f7, #ec4899)",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "16px",
                borderRadius: "8px",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "12px",
                }}
              >
                Property Features
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "✓ Fully furnished",
                  "✓ 24/7 security",
                  "✓ Gym & pool access",
                  "✓ Reserved parking",
                  "✓ Pet friendly",
                ].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      color: "white",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Schedule Visit
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppVideoDemo = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: "280px",
          height: "580px",
          backgroundColor: "#1a1a24",
          borderRadius: "40px",
          border: "12px solid #333",
          overflow: "hidden",
          boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5), 0 0 40px rgba(128, 0, 255, 0.2)",
          position: "relative",
        }}
      >
        {/* App UI */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* App header */}
          <div
            style={{
              padding: "20px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                RG
              </div>
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Rent Grids
              </span>
            </div>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            ></div>
          </div>

          {/* App content */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              overflowY: "auto",
            }}
          >
            {/* Search */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "5px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              ></div>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "13px",
                }}
              >
                Search properties...
              </span>
            </div>

            {/* Property cards */}
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  animation: `fadeSlide ${index + 1}s ease-out`,
                }}
              >
                <div
                  style={{
                    height: "120px",
                    width: "100%",
                    backgroundImage: `url('https://images.unsplash.com/photo-${
                      1580587771525 + index * 823947
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  style={{
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {index === 0
                      ? "Modern Flat in Indiranagar"
                      : index === 1
                      ? "Luxury Villa in Whitefield"
                      : "Compact Studio in HSR Layout"}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.6)",
                      marginBottom: "8px",
                    }}
                  >
                    ₹
                    {index === 0
                      ? "35,000"
                      : index === 1
                      ? "85,000"
                      : "18,000"}
                    /month • {index === 0 ? "2" : index === 1 ? "4" : "1"} BHK
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#a855f7",
                      }}
                    >
                      {index === 0
                        ? "93% match"
                        : index === 1
                        ? "87% match"
                        : "78% match"}
                    </div>
                    <button
                      style={{
                        backgroundColor: "rgba(168, 85, 247, 0.2)",
                        color: "#a855f7",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* App navigation */}
          <div
            style={{
              padding: "12px",
              display: "flex",
              justifyContent: "space-around",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {["Home", "Search", "Saved", "Profile"].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor:
                      i === 0
                        ? "rgba(168, 85, 247, 0.3)"
                        : "rgba(255, 255, 255, 0.1)",
                  }}
                ></div>
                <span
                  style={{
                    fontSize: "10px",
                    color:
                      i === 0 ? "#a855f7" : "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)",
            pointerEvents: "none",
            borderRadius: "28px 28px 0 0",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.2), transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          right: "10%",
          top: "20%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(236, 72, 153, 0.2), transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          left: "15%",
          bottom: "15%",
        }}
      ></div>
    </div>
  );
};

const VideoShowcaseSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const yPos = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121218] to-[#0a0a0a] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-500/5 filter blur-3xl"
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
            className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-pink-500/5 filter blur-3xl"
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
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y: yPos, scale }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              Experience the Future of Rentals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intuitive interface and AI-powered tools make finding and managing
            properties easier than ever before.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-purple-500/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Player
              component={PropertyShowcaseVideo}
              durationInFrames={300}
              fps={30}
              compositionWidth={600}
              compositionHeight={400}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3/2",
                position: "relative"
              }}
              controls={false}
              loop
              autoPlay
              acknowledgeRemotionLicense={true}
            />
          </motion.div>

          <motion.div
            className="glass-card p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Desktop Experience: <span className="gradient-text">Powerful & Intuitive</span>
            </h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Our desktop platform gives landlords and property managers complete control 
              with an intuitive dashboard that makes property management effortless.
            </p>

            <div className="space-y-6 relative z-10">
              {[
                {
                  title: "AI-Powered Matching",
                  description:
                    "Our advanced algorithms match tenants with ideal properties based on their preferences and history.",
                },
                {
                  title: "Seamless Document Management",
                  description:
                    "Upload, sign, and manage all property documents digitally with our secure platform.",
                },
                {
                  title: "Real-time Analytics",
                  description:
                    "Track property performance, occupancy rates, and financial metrics from one dashboard.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-1 mr-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="glass-card p-8 border border-white/10 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Mobile Experience: <span className="gradient-text">Effortless On-The-Go</span>
            </h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Find your perfect home or manage your properties from anywhere with our
              feature-rich mobile application designed for both tenants and landlords.
            </p>

            <div className="space-y-6 relative z-10">
              {[
                {
                  title: "One-Click Applications",
                  description:
                    "Apply for properties with a single tap using your saved profile and verified documents.",
                },
                {
                  title: "Virtual Tours",
                  description:
                    "Explore properties with immersive 3D tours and augmented reality features.",
                },
                {
                  title: "Instant Notifications",
                  description:
                    "Receive real-time updates on application status, new listings, and more.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-1 mr-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-[300px]">
              <Player
                component={AppVideoDemo}
                durationInFrames={300}
                fps={30}
                compositionWidth={300}
                compositionHeight={600}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                controls={false}
                loop
                autoPlay
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/20 to-transparent blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-600/20 to-transparent blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoShowcaseSection;