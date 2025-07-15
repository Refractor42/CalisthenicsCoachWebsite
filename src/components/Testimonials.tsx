import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const testimonials = [
  {
    quote: "Working with Ilya was the best investment I've ever made in myself. His customized approach and constant support helped me achieve results I never thought possible.",
    name: "Jason Miller",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "After having two kids, I thought my pre-pregnancy body was gone forever. Ilya proved me wrong. His nutrition plan was practical for my busy life, and the workouts were challenging but doable.",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "At 52, I thought it was too late to get in shape. Six months with Ilya, and I'm in better condition than I was at 30. The personalized program made all the difference.",
    name: "Robert Chen",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    quote: "Ilya doesn't just transform bodies—he transforms mindsets. I learned how to make fitness a sustainable part of my life, not just a temporary fix.",
    name: "Sarah Thompson",
    title: "Nurse Practitioner",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('testimonials.subtitle')}</span>
          <h2 className="section-title">{t('testimonials.title')} <span className="text-primary">{t('testimonials.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-600">
            {t('testimonials.description')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg">
            <Quote className="absolute top-6 left-6 text-primary opacity-20 w-20 h-20" />
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  active === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10 pt-10">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  active === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;