import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const faqs = [
    {
      question: "How does the AI help with tenant screening?",
      answer: "Our AI analyzes tenant applications using multiple data points including credit history, rental history, income verification, and behavioral patterns to predict tenant reliability. This helps landlords make informed decisions quickly without manual verification."
    },
    {
      question: "Is my data secure on the platform?",
      answer: "Absolutely. We use bank-level encryption to protect all your personal and financial data. Our platform is compliant with all data protection regulations, and we never share your information with third parties without explicit consent."
    },
    {
      question: "How do payments work on Rent Grids?",
      answer: "Rent Grids offers secure online rent collection through multiple payment methods including UPI, credit cards, and bank transfers. Tenants can set up automatic payments, and landlords receive funds directly in their accounts with detailed transaction records."
    },
    {
      question: "Can I use Rent Grids for commercial properties?",
      answer: "Yes! Rent Grids supports both residential and commercial property management. Our Enterprise plan is specifically designed for commercial property managers with features tailored to business rental needs."
    },
    {
      question: "What if I need help with the platform?",
      answer: "Our customer support team is available via chat, email, and phone. Premium and Enterprise plan subscribers get priority support with faster response times and dedicated account managers."
    }
  ];

  return (
    <section id="faq" className="py-20">
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
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about Rent Grids.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card faq-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <button 
                  className="flex justify-between items-center w-full p-6 text-left" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0">
                        <p className="text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
