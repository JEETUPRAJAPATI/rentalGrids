import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      content: "As a landlord with multiple properties, Rent Grids has been a game-changer. I've saved thousands in brokerage fees and the AI tenant screening has found me better tenants than ever before.",
      author: "Rajiv Sharma",
      title: "Property Owner, Bangalore",
      initials: "RS",
      color: "primary"
    },
    {
      content: "Finding an apartment in Mumbai is a nightmare. With Rent Grids, I found my dream apartment in just 3 days with zero brokerage! The virtual tours saved me so much time.",
      author: "Priya Gupta",
      title: "Tenant, Mumbai",
      initials: "PG",
      color: "accent"
    },
    {
      content: "The property management dashboard is fantastic. I can track rent payments, manage maintenance requests, and communicate with tenants all in one place. Worth every rupee.",
      author: "Amit Trivedi",
      title: "Property Manager, Delhi",
      initials: "AT",
      color: "primary"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
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
            <span className="gradient-text">Real Experiences from Our Users</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See what landlords and tenants are saying about their experience with Rent Grids.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-8px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-pink-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 bg-${testimonial.color}-500/30 rounded-full flex items-center justify-center mr-3`}>
                  <span className={`text-${testimonial.color}-300 font-semibold`}>{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
