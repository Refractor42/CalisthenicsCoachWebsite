import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('faq.subtitle')}</span>
          <h2 className="section-title">{t('faq.title')} <span className="text-primary">{t('faq.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-600">
            {t('faq.description')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {t('faq.questions').map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openIndex === index ? 
                    <ChevronUp className="text-primary flex-shrink-0" /> : 
                    <ChevronDown className="text-primary flex-shrink-0" />
                  }
                </button>
                <div 
                  className={`px-6 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg mb-6">
              {t('faq.moreQuestions')}
            </p>
            <a href="#contact" className="btn btn-primary">
              {t('faq.contact')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;