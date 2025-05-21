import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import InstagramStyleVideo from '@/components/InstagramStyleVideo';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import EnhancedReviewSection from '@/components/EnhancedReviewSection';
import EnhancedFinalCTA from '@/components/EnhancedFinalCTA';

const Home = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Set up page scroll tracking for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.pageYOffset.toString());
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0a0a0a]"
    >
      <Navbar />
      <EnhancedHeroSection />
      <ProblemSection />
      <AnimatedFeatures />
      <InstagramStyleVideo />
      <SolutionSection />
      <EnhancedReviewSection />
      <FAQSection />
      <EnhancedFinalCTA />
      <Footer />
    </motion.div>
  );
};

export default Home;
