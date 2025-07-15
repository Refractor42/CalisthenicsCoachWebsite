import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-dark -mt-0"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/ilya-calisthenics.jpg')"
      }}
    >
      <div className="container-custom py-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-4">
            {t('hero.subtitle')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display font-black leading-tight mb-6">
            {t('hero.title')}<br />
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pricing" 
              className="btn btn-primary text-lg px-8 py-4"
            >
              {t('hero.cta')}
            </a>
            <a 
              href="#about" 
              className="btn btn-outline text-white border-white hover:bg-white hover:text-dark"
            >
              {t('hero.learnMore')}
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-sm">{t('hero.trustedBy')} <span className="font-bold">500+</span> {t('hero.athletes')}</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;