import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LeadCapture: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Get Your Free Fitness Guide</h3>
          <p className="text-gray-600 mb-8">
            Subscribe to receive a free 7-day meal plan and workout routine to jumpstart your transformation!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                Get Free Guide
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to receive emails from Ilya Fitness. You can unsubscribe at any time.
          </p>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-green-600 font-semibold"
            >
              Thank you! Check your email for your free fitness guide.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;