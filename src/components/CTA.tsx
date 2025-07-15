import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-dark text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6">
            Ready to Transform Your <span className="text-primary">Body & Life?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Stop wasting time with generic fitness plans that don't work. Join hundreds of successful clients who have achieved their dream physique with my customized coaching.
          </p>
          
          <div className="bg-secondary p-8 rounded-lg mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-lg font-semibold mb-1">Limited Time Offer:</p>
                <p className="text-2xl font-display font-bold text-primary">
                  20% OFF Your First Month
                </p>
              </div>
              <p className="text-white/80 text-left md:text-center md:max-w-xs">
                Offer valid for new clients who sign up before the end of this month.
              </p>
              <div>
                <a href="#pricing" className="btn btn-primary">
                  Claim Discount <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="text-primary text-4xl font-display font-bold mb-2">500+</div>
              <p className="text-white/80">Successful Transformations</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="text-primary text-4xl font-display font-bold mb-2">10+</div>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <div className="text-primary text-4xl font-display font-bold mb-2">100%</div>
              <p className="text-white/80">Satisfaction Guarantee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;