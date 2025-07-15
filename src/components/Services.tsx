import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Dumbbell, Utensils, Heart, Users, Brain, BarChart3 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const getServices = (t: (key: string) => string) => [
  { icon: <Dumbbell className="h-8 w-8 text-primary" />, title: t('services.bodyweightMastery.title'), description: t('services.bodyweightMastery.description') },
  { icon: <Utensils className="h-8 w-8 text-primary" />, title: t('services.nutritionPlanning.title'), description: t('services.nutritionPlanning.description') },
  { icon: <Heart className="h-8 w-8 text-primary" />, title: t('services.mobilityTraining.title'), description: t('services.mobilityTraining.description') },
  { icon: <Users className="h-8 w-8 text-primary" />, title: t('services.personalCoaching.title'), description: t('services.personalCoaching.description') },
  { icon: <Brain className="h-8 w-8 text-primary" />, title: t('services.mentalConditioning.title'), description: t('services.mentalConditioning.description') },
  { icon: <BarChart3 className="h-8 w-8 text-primary" />, title: t('services.skillProgression.title'), description: t('services.skillProgression.description') }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();
  const services = getServices(t);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('services.subtitle')}</span>
          <h2 className="section-title">{t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-600">{t('services.description')}</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#pricing" className="btn btn-primary">{t('services.cta')}</a>
        </div>
      </div>
    </section>
  );
};

export default Services;