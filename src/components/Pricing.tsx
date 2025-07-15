import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const getPricingPlans = (t: (key: string) => string) => [
  {
    name: t('pricing.basic.name'),
    price: 197,
    period: t('pricing.basic.period'),
    description: t('pricing.basic.description'),
    features: [
      'Customized workout program',
      'Nutritional guidelines',
      'Monthly program updates',
      'Email support',
      'Access to exercise library',
      'Progress tracking app',
    ],
    notIncluded: [
      '1-on-1 coaching calls',
      '24/7 chat support',
      'Custom meal plans',
      'Advanced body analytics',
    ],
    cta: t('pricing.basic.cta'),
    popular: false,
  },
  {
    name: t('pricing.elite.name'),
    price: 397,
    period: t('pricing.elite.period'),
    description: t('pricing.elite.description'),
    features: [
      'Everything in Basic plan',
      'Weekly 1-on-1 coaching calls',
      'Custom meal plans with recipes',
      '24/7 chat support',
      'Advanced body composition analysis',
      'Supplementation guidance',
      'Priority email responses',
      'Lifestyle & habit coaching',
    ],
    notIncluded: [],
    cta: t('pricing.elite.cta'),
    popular: true,
  },
  {
    name: t('pricing.vip.name'),
    price: 997,
    period: t('pricing.vip.period'),
    description: t('pricing.vip.description'),
    features: [
      'Everything in Elite plan',
      'Twice weekly 1-on-1 sessions',
      'Direct phone access to Ilya',
      'Emergency check-ins as needed',
      'Customized supplement protocol',
      'Quarterly in-person assessments',
      'Mindset & psychology coaching',
      'Lifetime program adjustments',
    ],
    notIncluded: [],
    cta: t('pricing.vip.cta'),
    popular: false,
  },
];

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();
  const pricingPlans = getPricingPlans(t);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('pricing.subtitle')}</span>
          <h2 className="section-title">{t('pricing.title')} <span className="text-primary">{t('pricing.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-600 mb-6">
            {t('pricing.description')}
          </p>
          <p className="text-sm text-gray-500">
            {t('pricing.notice')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                plan.popular ? 'border-2 border-primary relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 font-semibold">
                  {t('pricing.elite.popular')}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">${plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <div className="mb-8">
                  <p className="font-semibold mb-3">{t('pricing.included')}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="text-green-500 mr-2 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <X className="text-gray-400 mr-2 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#schedule" 
                  className={`w-full btn text-center ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="mt-16 bg-dark text-white p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-4">{t('pricing.notSure')}</h3>
          <p className="mb-6">
            {t('pricing.consultation')}
          </p>
          <a href="#schedule" className="btn btn-primary">{t('pricing.scheduleCall')}</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;