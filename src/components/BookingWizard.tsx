import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Clock, FileText, CheckCircle2, User, Phone, Mail, Sparkles, Shield, Compass } from 'lucide-react';
import { AppointmentRequest } from '../types';
import { SERVICES_DATA, TEAM_DATA, LOCATIONS } from '../data';

interface BookingWizardProps {
  onClose: () => void;
  initialLocation?: 'heights' | 'midtown';
  onAddAppointment: (appt: AppointmentRequest) => void;
}

export default function BookingWizard({ onClose, initialLocation, onAddAppointment }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'morning',
    serviceType: SERVICES_DATA[0]?.title || 'Cosmetic Dentistry',
    location: initialLocation || 'heights',
    notes: '',
    isNewPatient: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAppointment(formData);
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] text-white shadow-2xl"
        id="booking-modal-container"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#2C2C2C] px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#54D6B7]" />
            <h2 className="text-lg font-bold uppercase tracking-wider font-sans bg-gradient-to-r from-white to-[#8FF0E4] bg-clip-text text-transparent">
              {submitted ? 'Booking Confirmed' : 'Request Consult'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 bg-[#252525] hover:bg-[#333333] text-gray-400 hover:text-white transition-colors"
            id="booking-close-btn"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form content */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step indicator */}
                <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  <span>Step {step} of 3</span>
                  <div className="flex gap-2">
                    <span className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-[#54D6B7]' : 'bg-[#252525]'}`}></span>
                    <span className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-[#54D6B7]' : 'bg-[#252525]'}`}></span>
                    <span className={`h-1.5 w-8 rounded-full ${step >= 3 ? 'bg-[#54D6B7]' : 'bg-[#252525]'}`}></span>
                  </div>
                </div>

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                    id="booking-step-1"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Select Your Studio Location</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {LOCATIONS.map((loc) => (
                          <div
                            key={loc.id}
                            onClick={() => setFormData({ ...formData, location: loc.id as 'heights' | 'midtown' })}
                            className={`p-4 rounded-xl border text-left cursor-pointer transition duration-200 ${
                              formData.location === loc.id
                                ? 'bg-[#54D6B7]/10 border-[#54D6B7] text-white'
                                : 'bg-[#252525]/50 border-[#2D2D2D] text-gray-300 hover:bg-[#252525]'
                            }`}
                            id={`booking-loc-${loc.id}`}
                          >
                            <MapPin className="h-4.5 w-4.5 text-[#54D6B7] mb-2" />
                            <h4 className="font-bold text-sm text-white">{loc.name}</h4>
                            <p className="text-xs text-gray-400 mt-1">{loc.address}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Select Therapy Focus</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#252525] text-sm text-white rounded-lg px-4 py-3 border border-[#2D2D2D] focus:border-[#54D6B7] outline-none"
                        id="booking-service-select"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>{srv.title}</option>
                        ))}
                        <option value="General Cleanings&Consultation">Routine Teeth Cleanings & Diagnostics</option>
                        <option value="Other">Other Specific Dental Concerns</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Are you a new patient at FLOSS?</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, isNewPatient: true })}
                          className={`py-3 rounded-lg border font-bold text-sm transition ${
                            formData.isNewPatient ? 'bg-[#54D6B7] text-[#1A1A1A] border-[#54D6B7]' : 'bg-[#252525] text-gray-300 border-[#2D2D2D]'
                          }`}
                        >
                          Yes, I am a new patient
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, isNewPatient: false })}
                          className={`py-3 rounded-lg border font-bold text-sm transition ${
                            !formData.isNewPatient ? 'bg-[#54D6B7] text-[#1A1A1A] border-[#54D6B7]' : 'bg-[#252525] text-gray-300 border-[#2D2D2D]'
                          }`}
                        >
                          No, returning patient
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                    id="booking-step-2"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Select Your Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-[#252525] pl-11 pr-4 py-3 text-sm text-white rounded-lg border border-[#2D2D2D] focus:border-[#54D6B7] outline-none"
                          id="booking-date-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Preferred Time Range</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { key: 'morning', label: 'Morning', sub: '8 AM - 12 PM', icon: Clock },
                          { key: 'afternoon', label: 'Afternoon', sub: '12 PM - 4 PM', icon: Clock },
                          { key: 'evening', label: 'Evening', sub: '4 PM - 5:30 PM', icon: Clock }
                        ].map((time) => {
                          const Icon = time.icon;
                          return (
                            <div
                              key={time.key}
                              onClick={() => setFormData({ ...formData, preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0], preferredTime: time.key as any })}
                              className={`p-3 rounded-lg border text-center cursor-pointer transition ${
                                formData.preferredTime === time.key
                                  ? 'bg-[#54D6B7]/10 border-[#54D6B7] text-white'
                                  : 'bg-[#252525]/50 border-[#2D2D2D] text-gray-400 hover:bg-[#252525]'
                              }`}
                            >
                              <Icon className="h-4 w-4 text-[#54D6B7] mx-auto mb-1.5" />
                              <span className="font-bold text-xs text-white block">{time.label}</span>
                              <span className="text-[10px] text-gray-500 mt-0.5 block">{time.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-2">Doctor Preference (Optional)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {TEAM_DATA.map((dr) => (
                          <div
                            key={dr.id}
                            onClick={() => setFormData({ ...formData, notes: `Doctor Preference: ${dr.name}. ` + (formData.notes || '') })}
                            className="p-3 rounded-xl bg-[#252525]/40 border border-[#2D2D2D] hover:border-gray-500 text-left flex items-center gap-2 cursor-pointer transition"
                          >
                            <img
                              src={dr.image}
                              alt={dr.name}
                              className="h-9 w-9 rounded-full object-cover shrink-0 border border-[#333333]"
                              referrerPolicy="no-referrer"
                            />
                            <div className="overflow-hidden">
                              <h5 className="font-semibold text-xs truncate text-white">{dr.name.split(',')[0]}</h5>
                              <p className="text-[9px] text-[#54D6B7] truncate">{dr.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                    id="booking-step-3"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-1.5">Full Legal Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="Elizabeth Bennett"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#252525] pl-10 pr-4 py-2.5 text-sm text-white rounded-lg border border-[#2D2D2D] focus:border-[#54D6B7] outline-none"
                          id="booking-name-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-1.5">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="elizabeth@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#252525] pl-10 pr-4 py-2.5 text-sm text-white rounded-lg border border-[#2D2D2D] focus:border-[#54D6B7] outline-none"
                            id="booking-email-input"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-1.5">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="tel"
                            required
                            placeholder="(346) 214-4807"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#252525] pl-10 pr-4 py-2.5 text-sm text-white rounded-lg border border-[#2D2D2D] focus:border-[#54D6B7] outline-none"
                            id="booking-phone-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#54D6B7] mb-1.5">Treatment Desires & Symptoms (Optional)</label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                        <textarea
                          placeholder="Please specify if you are struggling with pain, or planning to map composite veneers..."
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-[#252525] pl-10 pr-4 py-2.5 text-sm text-white rounded-lg border border-[#2D2D2D] focus:border-[#54D6B7] outline-none resize-none"
                          id="booking-notes-input"
                        ></textarea>
                      </div>
                    </div>

                    <div className="p-3 bg-[#1F1F1F] rounded-xl border border-[#2D2D2D] text-xs text-gray-400 flex items-start gap-2">
                      <Shield className="h-4.5 w-4.5 text-[#54D6B7] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">HIPAA Privacy & Security Protection</span>
                        Your dental diagnostic requests and custom communications are tightly encrypted according to US federal clinical privacy parameters.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2C2C2C]">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                      step === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:text-white bg-[#252525]'
                    }`}
                  >
                    Back
                  </button>

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide hover:scale-[1.01] transition"
                      id="booking-next-btn"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-[#54D6B7] hover:bg-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide hover:scale-[1.01] transition shadow-lg shadow-[#54D6B7]/15"
                      id="booking-submit-btn"
                    >
                      Confirm Request
                    </button>
                  )}
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-6"
                id="booking-success-message"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#54D6B7]/10 text-[#54D6B7] animate-bounce">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans text-white">Consult Request Enregistered!</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Excellent, <strong>{formData.fullName}</strong>. We have securely registered your preferred booking block for <strong>{formData.preferredDate}</strong> ({formData.preferredTime}) at <strong>FLOSS {formData.location === 'heights' ? 'Heights' : 'Midtown'}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#212121] rounded-xl text-left border border-[#2D2D2D] max-w-sm mx-auto space-y-2 text-xs">
                  <span className="text-gray-400 uppercase tracking-widest block font-bold font-sans text-[10px]">What happens next?</span>
                  <p className="text-gray-300">
                    1. A FLOSS patient concierge checks the live dental schedule in real-time.<br />
                    2. We send you an SMS & Email confirming your precise 45-minute booking slot.<br />
                    3. You download your digital registration slips and visit our premium studio!
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] text-[#1A1A1A] font-bold text-sm tracking-wide hover:scale-[1.01] transition"
                  id="booking-success-close"
                >
                  Return to Studio
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
