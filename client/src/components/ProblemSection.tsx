import { motion } from "framer-motion";
import { X, Clock, AlertCircle, Ban } from "lucide-react";

const ProblemSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const problems = [
    {
      icon: <X className="w-6 h-6 text-white" />,
      title: "No Brokerage or Commissions",
      description: "Say goodbye to hefty brokerage fees that eat into your budget. Our platform connects you directly with verified properties."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Manual Processes Waste Time",
      description: "Traditional rental processes are slow and cumbersome. Our AI automates everything from scheduling to documentation."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-white" />,
      title: "Lack of Transparency & Support",
      description: "Unclear terms and poor support plague the rental industry. We provide full transparency and 24/7 AI-powered assistance."
    },
    {
      icon: <Ban className="w-6 h-6 text-white" />,
      title: "Poor Tenant-Landlord Experience",
      description: "Miscommunication leads to friction. Our platform streamlines communication and creates a seamless experience for both parties."
    }
  ];

  return (
    <section id="about" className="py-16 bg-[#121218]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tired of Brokers, Hidden Fees, and Messy Rentals?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The traditional rental process is broken. We're fixing it with AI technology that makes renting simple, transparent, and enjoyable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-8px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-400">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
