import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const transformations = [
  {
    name: 'Michael K.',
    age: 28,
    timeframe: '12 weeks',
    description: 'Transformed his physique through dedicated training and proper nutrition. Achieved remarkable muscle definition while maintaining a balanced lifestyle.',
    before: '/fatguy.jpg',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    after: '/muscularguy.jpg',
  },
  {
    name: 'David R.',
    age: 30,
    timeframe: '16 weeks',
    description: 'Focused on building strength and muscle mass. Comprehensive program led to significant improvements in both aesthetics and performance.',
    before: '/fatguy.jpg',
    after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    after: '/muscularguy.jpg',
  },
  {
    name: 'Thomas L.',
    age: 32,
    timeframe: '20 weeks',
    description: 'Combined strength training with calisthenics for a complete body transformation. Achieved exceptional results through consistent effort and proper guidance.',
    before: '/fatguy.jpg',
    after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    after: '/muscularguy.jpg',
  },
];

const Transformations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="transformations" className="py-20 bg-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('transformations.subtitle')}</span>
          <h2 className="section-title">{t('transformations.title')} <span className="text-primary">{t('transformations.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-300">{t('transformations.description')}</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 overflow-hidden rounded-lg">
                  <div className="relative">
                    <span className="absolute top-4 left-4 bg-dark px-4 py-1 rounded-full text-sm font-semibold">{t('transformations.before')}</span>
                    <img 
                      src={transformations[activeIndex].before} 
                      alt={`${transformations[activeIndex].name} before`}
                      className="w-full h-96 object-cover object-top"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute top-4 left-4 bg-primary px-4 py-1 rounded-full text-sm font-semibold">{t('transformations.after')}</span>
                    <img 
                      src={transformations[activeIndex].after} 
                      alt={`${transformations[activeIndex].name} after`}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2">
                  <span className="font-bold">{transformations[activeIndex].timeframe}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col">
              <div className="bg-secondary p-8 rounded-lg flex-grow">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {transformations[activeIndex].name}, {transformations[activeIndex].age}
                </h3>
                <p className="text-gray-300 mb-6">{transformations[activeIndex].description}</p>
                
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-300">
                  {t('transformations.testimonialQuote')}
                </blockquote>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                {transformations.map((transformation, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-md overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={transformation.after} 
                      alt={transformation.name}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              {t('transformations.writeStory')}
            </p>
            <a href="#pricing" className="btn btn-primary">
              {t('transformations.startJourney')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;