import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';
import { LOCATIONS } from '../data';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'heights' | 'midtown'>('heights');
  const [msgData, setMsgData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Info',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const activeLocation = LOCATIONS.find(loc => loc.id === activeTab) || LOCATIONS[0];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (msgData.fullName.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setMsgData({ fullName: '', email: '', phone: '', subject: 'General Info', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-white text-[#1A1A1A]" id="contact-details-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" id="contact-head">
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
              Connect With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Visit Our Houston Studios <br />
              <span className="text-gray-500 font-bold">& Map Your Smile Today</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed">
              We operate two tech-infused luxury clinics in Heights and Midtown. Choose your preferred studio below to inspect street addresses, contact details, map navigation pathways, and clinical hours.
            </p>
          </div>
          
          {/* Location toggles */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-2">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === loc.id
                    ? 'bg-[#54D6B7] text-[#1A1A1A] shadow-md shadow-[#54D6B7]/10'
                    : 'bg-[#FAF9F6] text-gray-500 hover:text-gray-800 border border-[#EEEDE8]'
                }`}
                id={`contact-tab-btn-${loc.id}`}
              >
                {loc.name.split('FLOSS Dental ')[1] || loc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Maps and Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Geographic Details, Hours and Map Embed */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between gap-6" id="contact-map-cabinet">
            
            {/* Hours card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF9F6] p-6 rounded-2xl border border-[#EEEDE8]">
              <div className="space-y-4">
                <span className="text-xs text-[#54D6B7] font-bold uppercase tracking-wider">Studio Specifics</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-950 font-sans text-sm">{activeLocation.name}</h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 leading-normal">
                    <MapPin className="h-4 w-4 text-[#54D6B7] shrink-0" />
                    {activeLocation.address}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 leading-normal">
                    <Phone className="h-4 w-4 text-[#8FF0E4] shrink-0" />
                    <a href={`tel:${activeLocation.phone.replace(/[^0-9]/g, '')}`} className="hover:underline font-bold text-gray-900">
                      {activeLocation.phone}
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 leading-normal">
                    <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                    {activeLocation.email}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#EEEDE8] sm:pl-6">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#54D6B7]" />
                  Scheduled Hours
                </span>
                <div className="grid gap-2 text-xs">
                  {activeLocation.hours.map((hr, idx) => (
                    <div key={idx} className="flex justify-between items-center text-gray-600">
                      <strong>{hr.days}:</strong>
                      <span>{hr.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google iFrame Map Embed */}
            <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-2xl overflow-hidden shadow border border-[#EEEDE8]">
              <iframe
                title={activeLocation.name}
                src={activeLocation.googleMapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer"
                id="contact-google-map"
              ></iframe>
            </div>

          </div>

          {/* Secure Message contact Form */}
          <div className="lg:col-span-12 xl:col-span-5 bg-[#FAF9F6] rounded-2xl p-8 border border-[#EEEDE8] shadow flex flex-col justify-between" id="contact-form-cabinet">
            
            <div className="space-y-4">
              <span className="text-xs uppercase text-[#54D6B7] tracking-widest font-bold">Secure Message portal</span>
              <h3 className="text-2xl font-bold text-gray-950 font-sans">Submit General Feedback</h3>
              <p className="text-xs text-gray-500 leading-normal font-medium">
                Do you have general questions about treatments rates, dental insurance claims, or booking pathways? Leave us a quick, private message below and our front desk officers will respond soon.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleMessageSubmit} className="space-y-4 pt-6 mt-6 border-t border-[#EEEDE8]">
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Diana Prince"
                      value={msgData.fullName}
                      onChange={(e) => setMsgData({ ...msgData, fullName: e.target.value })}
                      className="w-full bg-white text-xs rounded-lg px-4 py-2.5 border border-[#EEEDE8] text-gray-800 outline-none focus:border-[#54D6B7]"
                      id="contact-name-input"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-gray-400 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="diana@gmail.com"
                        value={msgData.email}
                        onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                        className="w-full bg-white text-xs rounded-lg px-4 py-2.5 border border-[#EEEDE8] text-gray-800 outline-none focus:border-[#54D6B7]"
                        id="contact-email-input"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-gray-400 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(346) 214-4807"
                        value={msgData.phone}
                        onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                        className="w-full bg-white text-xs rounded-lg px-4 py-2.5 border border-[#EEEDE8] text-gray-800 outline-none focus:border-[#54D6B7]"
                        id="contact-phone-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Subject Matter</label>
                    <select
                      value={msgData.subject}
                      onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                      className="w-full bg-white text-xs rounded-lg px-4 py-2.5 border border-[#EEEDE8] text-gray-800 outline-none focus:border-[#54D6B7]"
                    >
                      <option value="General Info">General Service Questions</option>
                      <option value="Insurance Claim">Insurance Benefit Validation</option>
                      <option value="Franchise">Franchising Operations</option>
                      <option value="Other">Other Issues</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 block">Message Content</label>
                    <textarea
                      required
                      placeholder="Write your clinical notes or restorative inquiries here..."
                      rows={3}
                      value={msgData.message}
                      onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                      className="w-full bg-white text-xs rounded-lg px-4 py-2.5 border border-[#EEEDE8] text-gray-800 outline-none focus:border-[#54D6B7] resize-none"
                      id="contact-message-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-1.5"
                    id="contact-submit-btn"
                  >
                    <Send className="h-4 w-4" />
                    Send Secure Message
                  </button>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                  id="contact-success-block"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-[#54D6B7]/10 text-[#54D6B7] flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#1A1A1A] text-base font-sans">Message Enregistered!</h4>
                    <p className="text-gray-500 text-xs max-w-sm mx-auto leading-normal">
                      Excellent, <strong>{msgData.fullName}</strong>. Your feedback request has been safely filed. A FLOSS benefits manager will inspect details and contact you within 24 clinical business hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4 border-t border-[#EEEDE8] flex items-center gap-2.5 text-[10px] text-gray-400 uppercase tracking-wider mt-4">
              <HeartHandshake className="h-4.5 w-4.5 text-[#54D6B7]" />
              <span>Patient-first clinical support standards</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
