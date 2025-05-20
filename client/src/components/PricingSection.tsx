import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const plans = [
    {
      name: "Basic",
      price: "₹499",
      period: "/month",
      description: "Perfect for individual landlords",
      features: [
        "Up to 2 properties",
        "Basic tenant screening",
        "Digital lease agreements",
        "Online rent collection",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹999",
      period: "/month",
      description: "Ideal for property managers",
      features: [
        "Up to 10 properties",
        "Advanced tenant screening",
        "Custom lease templates",
        "Online rent collection",
        "Maintenance request tracking",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹2499",
      period: "/month",
      description: "For large property portfolios",
      features: [
        "Unlimited properties",
        "All Premium features",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support",
        "Advanced reporting"
      ],
      popular: false,
      contact: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#121218] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 12,
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
            <span className="gradient-text">Tailored Solutions for Every Need</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include zero brokerage fees and our core AI features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`glass-card p-8 border ${plan.popular ? 'border-2 border-purple-500' : 'border-gray-800'} rounded-xl transition-all duration-300 ${plan.popular ? 'hover:transform hover:scale-105 z-10' : 'hover:border-purple-500/50'} relative`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <motion.button 
                  className="btn-gradient w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.contact ? "Contact Us" : "Choose Plan"}
                </motion.button>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
