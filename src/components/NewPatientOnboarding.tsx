import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, Phone, CreditCard, Sparkles, UserCheck, ShieldAlert, Check } from 'lucide-react';

export default function NewPatientOnboarding() {
  const [downloadStates, setDownloadStates] = useState({
    intake: false,
    insurance: false,
    hipaa: false
  });

  const handleDownload = (key: 'intake' | 'insurance' | 'hipaa') => {
    setDownloadStates({ ...downloadStates, [key]: true });
    // Simulate real file download
    setTimeout(() => {
      setDownloadStates(prev => ({ ...prev, [key]: false }));
    }, 4000);
  };

  const onboardingSteps = [
    {
      num: '01',
      title: 'Digital scheduling & consult',
      desc: 'Submit your preferred schedule on our booking wizard. A Floss patient concierge replies in minutes over SMS or email to finalize a 45-minute customized slot.'
    },
    {
      num: '02',
      title: 'Online paperless intake',
      desc: 'Save time in our reception lounge by clicking our secured, HIPAA-compliant intake forms on your mobile phone beforehand. No clipboards or dusty sheets.'
    },
    {
      num: '03',
      title: 'Elite diagnostic check',
      desc: 'Arrive at our clinic, sit back in our premium massage chairs with custom headphones, stream Netflix, and receive low-radiation diagnostic scanning.'
    },
    {
      num: '04',
      title: 'Transparent care breakdown',
      desc: 'No heavy hand-waving or surprise invoices. Our coordinators map your dental insurance coverages and construct crystal-clear treatment summaries before treatment starts.'
    }
  ];

  const resources = [
    { key: 'intake' as const, label: 'Standard Clinical PDF Intake', size: '1.2 MB', desc: 'Patient history and general dental symptoms list.' },
    { key: 'insurance' as const, label: 'Insurance PPO Registration Slips', size: '420 KB', desc: 'Submit your employer benefits forms to reduce therapies costs.' },
    { key: 'hipaa' as const, label: 'Sceured HIPAA Privacy Sheet', size: '512 KB', desc: 'Understand your clinical biological diagnostic protection policies.' }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1A1A1A]" id="new-patients-experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="onboarding-header">
          <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
            Welcoming Care Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-gray-900 leading-tight">
            Stress-Free Dental Care. <br />
            <span className="text-[#54D6B7]">Designed Entirely Around You.</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We understand that visiting a new clinic can trigger minor anxieties. At FLOSS Dental Houston, we combine comforting amenities, paperless registrations, and absolute pricing transparency to ensure you feel calm and supported.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onboardingSteps.map((st, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#EEEDE8] shadow hover:shadow-xl transition relative space-y-4 flex flex-col justify-between"
              id={`onboarding-step-${i}`}
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-[#54D6B7] block font-mono select-none">{st.num}</span>
                <h4 className="font-extrabold text-sm text-gray-950 uppercase tracking-wide font-sans">{st.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{st.desc}</p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] text-gray-400 font-extrabold uppercase shrink-0">Floss Standard Priority</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Resources Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-[#EEEDE8]">
          
          {/* Downloadable files list */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between" id="onboarding-download-bay">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3 py-1 rounded-full">
                Resources & Downloads
              </span>
              <h3 className="text-2xl font-bold font-sans text-gray-900">Pre-Fill Forms To Cut Waiting Times</h3>
              <p className="text-xs text-gray-500 max-w-md leading-relaxed">
                Want to pre-fill your dental details using traditional writing? Download our secure paper forms, fill them in your comfort, and bring them with you on your visit.
              </p>
            </div>

            <div className="grid gap-4 pt-4">
              {resources.map((res) => {
                const isDownloading = downloadStates[res.key];
                return (
                  <div
                    key={res.key}
                    className="p-4 bg-white rounded-xl border border-[#EEEDE8] flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-gray-900 block font-sans">{res.label}</span>
                      <p className="text-[10px] text-gray-400 font-medium">{res.desc} ({res.size})</p>
                    </div>
                    <button
                      onClick={() => handleDownload(res.key)}
                      disabled={isDownloading}
                      className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                        isDownloading
                          ? 'bg-[#54D6B7]/10 text-[#54D6B7] cursor-not-allowed'
                          : 'bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white'
                      }`}
                      id={`form-dl-btn-${res.key}`}
                    >
                      {isDownloading ? <Check className="h-3.5 w-3.5 animate-bounce" /> : <Download className="h-3.5 w-3.5" />}
                      {isDownloading ? 'Downloading...' : 'Get Form'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calm check grid (Amenities illustration) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-[#EEEDE8] shadow flex flex-col justify-between" id="onboarding-comfort-bay">
            <div className="space-y-4">
              <span className="text-xs text-[#54D6B7] uppercase font-bold tracking-wider block">First-Class Amenities</span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans">Like A Luxury Hotel Suite, But For Dental health</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Our Houston clinic was engineered with visual style and noise cancellation features to protect those sensitive to surgical stress. Here is what is waiting for you in our comfort suite:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EEEDE8] mt-6">
              {[
                { title: 'Full Neck pillow & warm wraps', desc: 'Ergonomic neck support loops keep you stable during operations.' },
                { title: 'Personal streaming screens', desc: 'Catch up on Netflix, Disney, or Youtube with acoustic headphones.' },
                { title: 'Calm aromatherapy infusions', desc: 'Vaporized botanical lavender elements mask surgical odors.' },
                { title: 'Warm sanitary towels', desc: 'Refreshing linen outputs at the end of deep therapies.' }
              ].map((amen, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-bold text-[#54D6B7] block">{amen.title}</span>
                  <p className="text-[10px] text-gray-400 font-medium">{amen.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
