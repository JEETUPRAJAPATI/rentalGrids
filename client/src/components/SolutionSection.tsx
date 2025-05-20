import { motion } from "framer-motion";
import { CheckCircle, Settings, Lock, DollarSign } from "lucide-react";

const SolutionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "One-click Leasing & Scheduling",
      description: "Complete your entire rental process with just a few clicks. Our AI handles scheduling viewings, document verification, and lease signing automatically."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Real-time Control for Landlords",
      description: "Manage your properties effortlessly with our intuitive dashboard. Track applications, collect rent, and handle maintenance requests all in one place."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Secure, Transparent, and Remote-friendly",
      description: "Our platform ensures secure transactions, transparent terms, and allows the entire rental process to be completed remotely, saving time for everyone."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Affordable & Scalable Rental Services",
      description: "With zero brokerage fees and affordable subscription plans, our platform is designed to save money for both tenants and landlords while providing premium services."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Smarter Way to Rent — <span className="gradient-text">Powered by AI</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI technology transforms every aspect of the rental experience, making it seamless, transparent, and enjoyable for everyone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI-powered rental management dashboard" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 transition-all duration-300 hover:translate-x-[-8px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                variants={slideIn}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
