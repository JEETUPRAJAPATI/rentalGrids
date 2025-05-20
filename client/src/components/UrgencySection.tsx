import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const UrgencySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-[#121218] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0]
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
          className="glass-card p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Market Is Shifting — <span className="gradient-text">Be Ahead of the Curve</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                India's rental market is going digital. AI-powered, hassle-free renting is the future. Join thousands preparing for the shift.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "90% of renters prefer digital solutions over traditional methods",
                  "Save up to ₹50,000 in brokerage fees on a single transaction",
                  "Reduce property vacancy periods by up to 60%"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="#hero"
                className="btn-gradient inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access Now
              </motion.a>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Person using smartphone for digital rental management" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
