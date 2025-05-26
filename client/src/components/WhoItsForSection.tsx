import { motion } from "framer-motion";
import { Building, Users, CheckCircle } from "lucide-react";

const WhoItsForSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const landlordBenefits = [
    {
      title: "AI-Powered Tenant Screening",
      description: "Get quality tenants faster with our automated verification system."
    },
    {
      title: "Automated Rent Collection",
      description: "Never chase payments again with our secure automated collection system."
    },
    {
      title: "Property Management Dashboard",
      description: "Manage all your properties in one place with comprehensive analytics."
    }
  ];

  const tenantBenefits = [
    {
      title: "Zero Brokerage Fees",
      description: "Save thousands by renting directly from verified landlords."
    },
    {
      title: "Virtual Tours & Easy Applications",
      description: "Browse properties and apply without leaving your home."
    },
    {
      title: "Digital Rent Payments",
      description: "Pay rent securely online and get automatic payment receipts."
    }
  ];

  return (
    <section className="py-20">
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
            <span className="gradient-text">Who It's For</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our platform is designed to benefit both sides of the rental equation, creating value for everyone involved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Landlords */}
          <motion.div
            className="glass-card p-8 transition-all duration-300 hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={scale}
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Landlords</h3>
            <p className="text-center text-gray-300 mb-8">
              Get steady income, zero effort, and full control — without brokers.
            </p>

            <div className="space-y-4">
              {landlordBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-1 mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tenants */}
          <motion.div
            className="glass-card p-8 transition-all duration-300 hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={scale}
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Tenants</h3>
            <p className="text-center text-gray-300 mb-8">
              Skip the fees. Apply, schedule, and lease with one click.
            </p>

            <div className="space-y-4">
              {tenantBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-1 mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
