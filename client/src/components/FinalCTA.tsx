import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-[#121218] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -15, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="glass-card p-8 md:p-12 border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience <span className="gradient-text">Seamless Rentals?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the waitlist today and be among the first to access India's revolutionary AI-powered rental platform.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span>Early access to new features</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span>Founding member benefits</span>
                </motion.div>
              </div>
              
              <motion.a
                href="#hero"
                className="btn-gradient inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access
              </motion.a>
            </div>
            
            <div>
              <motion.div 
                className="glass-card p-6 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">A Message from Our Founder</h3>
                <p className="text-gray-300 mb-6">
                  "I built Rent Grids after facing rental fraud and poor experiences. Now, I want to fix that for everyone with technology that makes renting simple, transparent, and enjoyable."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                      alt="Founder portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Balharshpreet Singh</h4>
                    <p className="text-sm text-gray-400">Founder & CEO, Rent Grids</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
