import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, X } from 'lucide-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useLanguage } from '../hooks/useLanguage';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
}

const availableTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const Schedule: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const calendarRef = useRef<FullCalendar>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formStep, setFormStep] = useState<'calendar' | 'form' | 'confirmation'>('calendar');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
  });
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateClick = (info: any) => {
    // Don't allow selecting dates in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const selectedDate = new Date(info.dateStr);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return;
    }
    
    setSelectedDate(info.dateStr);
    setFormData(prev => ({ ...prev, date: info.dateStr }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
    setFormStep('form');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep('confirmation');
    }, 1500);
  };

  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setFormStep('calendar');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      date: '',
      time: '',
    });
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold">{t('schedule.subtitle')}</span>
          <h2 className="section-title">{t('schedule.title')} <span className="text-primary">{t('schedule.titleHighlight')}</span></h2>
          <p className="text-lg text-gray-600 mb-6">
            {t('schedule.description')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {formStep === 'calendar' && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-bold mb-3 flex items-center">
                      <Calendar className="mr-2 text-primary\" size={20} />
                      {t('schedule.selectDate')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('schedule.chooseDate')}</p>
                  </div>
                  
                  <div className="calendar-container">
                    <FullCalendar
                      ref={calendarRef}
                      plugins={[dayGridPlugin, interactionPlugin]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: '',
                      }}
                      dateClick={handleDateClick}
                      height="auto"
                      selectable={true}
                      selectMirror={true}
                      weekends={true}
                      validRange={{
                        start: new Date(),
                      }}
                      businessHours={{
                        daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday
                        startTime: '09:00',
                        endTime: '17:00',
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  {selectedDate ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-xl font-display font-bold mb-3 flex items-center">
                          <Clock className="mr-2 text-primary\" size={20} />
                          {t('schedule.selectTime')}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {t('schedule.selectedDateTime')} <span className="font-semibold">{new Date(selectedDate).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {availableTimeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className="py-3 px-4 border border-gray-300 rounded-md text-center hover:bg-gray-50 transition-colors"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <Calendar className="mx-auto mb-4 text-primary" size={40} />
                        <h3 className="text-xl font-display font-bold mb-2">{t('schedule.selectDate')}</h3>
                        <p className="text-gray-600">
                          {t('schedule.chooseDate')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {formStep === 'form' && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold">{t('schedule.completeBooking')}</h3>
                <button 
                  onClick={() => setFormStep('calendar')}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Go back"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold">{t('schedule.selectedDateTime')}</span> {new Date(selectedDate!).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.form.fullName')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('schedule.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('schedule.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('schedule.form.goals')} ({t('schedule.form.optional')})
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? t('schedule.form.submitting') : t('schedule.form.confirm')}
                </button>
              </form>
            </div>
          )}

          {formStep === 'confirmation' && (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{t('schedule.confirmation.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('schedule.confirmation.description')} {new Date(selectedDate!).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}.
              </p>
              <p className="text-gray-600 mb-8">
                {t('schedule.confirmation.emailSent')} {formData.email}. {t('schedule.confirmation.lookingForward')}
              </p>
              <button
                onClick={resetForm}
                className="btn btn-outline"
              >
                {t('schedule.confirmation.scheduleAnother')}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;