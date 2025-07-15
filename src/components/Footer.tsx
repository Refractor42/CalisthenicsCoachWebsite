import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-display font-black mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span>ILYA FITNESS</span>
            </a>
            <p className="text-white/70 mb-6">
              Transform your body and mind with elite fitness coaching tailored to your unique goals and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Youtube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#transformations" className="text-white/70 hover:text-primary transition-colors">Transformations</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-white/70 hover:text-primary transition-colors">Basic Transformation</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-primary transition-colors">Elite Coaching</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-primary transition-colors">VIP Experience</a></li>
              <li><a href="#schedule" className="text-white/70 hover:text-primary transition-colors">Free Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:info@ilyafitness.com" className="text-white/70 hover:text-primary transition-colors">info@ilyafitness.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+15555555555" className="text-white/70 hover:text-primary transition-colors">+1 (555) 555-5555</a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#schedule" className="btn btn-outline">
                Book a Session
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ilya Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;