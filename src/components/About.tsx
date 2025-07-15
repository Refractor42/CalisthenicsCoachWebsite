import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Clock, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold">{t('about.subtitle')}</span>
            <h2 className="section-title">{t('about.title')}<br /><span className="text-primary">{t('about.titleHighlight')}</span></h2>
            <p className="text-lg mb-6">{t('about.description1')}</p>
            <p className="text-lg mb-6">{t('about.description2')}</p>
            <p className="text-lg mb-8">{t('about.description3')}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Award className="text-primary" />
                <span className="font-semibold">{t('about.certifiedCoach')}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary" />
                <span className="font-semibold">{t('about.successStories')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" />
                <span className="font-semibold">{t('about.experience')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="text-primary" />
                <span className="font-semibold">{t('about.guaranteedResults')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/IlyaMain.jpg" 
                alt="Ilya Kuchinskiy" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-display font-bold text-xl mb-2">{t('about.mission')}</p>
              <p>{t('about.missionText')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;