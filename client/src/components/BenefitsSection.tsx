import { motion } from "framer-motion";
import { DollarSign, FileText, Zap } from "lucide-react";

const BenefitsSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Zero Brokerage",
      description: "Save thousands on every transaction with our direct landlord-tenant connection."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Automated Paperwork",
      description: "Let our AI handle all the tedious documentation and legal paperwork, saving you time."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Rapid Transactions",
      description: "Complete rental agreements in minutes instead of days or weeks with our streamlined process."
    }
  ];

  return (
    <section className="py-16 bg-[#121218]">
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
            <span className="gradient-text">Benefits that help you grow</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our platform is designed to make rental management effortless and profitable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-6 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
