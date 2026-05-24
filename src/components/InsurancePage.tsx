import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Calculator, 
  FileText, 
  Sparkles, 
  Building, 
  Smile 
} from 'lucide-react';

interface InsurancePageProps {
  onOpenBooking: () => void;
}

export default function InsurancePage({ onOpenBooking }: InsurancePageProps) {
  const [provider, setProvider] = useState('delta');
  const [treatment, setTreatment] = useState('preventive');
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  const providerNames: Record<string, string> = {
    delta: 'Delta Dental',
    cigna: 'Cigna',
    metlife: 'MetLife',
    bluecross: 'Blue Cross Blue Shield',
    guardian: 'Guardian',
    aetna: 'Aetna',
    humana: 'Humana',
    united: 'UnitedHealthcare'
  };

  const treatmentDetails: Record<string, { name: string; standardCoverage: string; notes: string }> = {
    preventive: {
      name: 'Preventive Care (Cleanings, Exams, X-rays)',
      standardCoverage: '80% - 100%',
      notes: 'Typically covered twice a year under standard diagnostic intervals with zero personal copay.'
    },
    basic: {
      name: 'Basic Restorations (Composite Fillings, Root Canals)',
      standardCoverage: '70% - 80%',
      notes: 'Most plans cover major portions after your individual annual deductible is satisfied.'
    },
    major: {
      name: 'Major Restorations (Zirconia Crowns, Bridges, Inlays)',
      standardCoverage: '50%',
      notes: 'Requires clinical medical necessity filing. We handle full pre-authorizations before fabricating the restoration.'
    },
    orthodontics: {
      name: 'Invisalign / Clear Orthodontic Orthics',
      standardCoverage: 'Up to $1,500 - $3,000 Lifetime Max',
      notes: 'Standard plans often provide a customized lifetime orthodontic allowance. Our coordinators apply this straight to your alignment cost.'
    },
    cosmetic: {
      name: 'Cosmetic Dentistry (Porcelain Veneers, Custom Bleaching)',
      standardCoverage: '0% (Standard Cosmetic Exclusion)',
      notes: 'Rarely covered by insurance. However, we offer structured in-house financing and CareCredit to divide these into low monthly investments.'
    }
  };

  const getCoverageCalculation = () => {
    if (treatment === 'preventive') return { cover: '90% - 100%', patientPay: '0% - 10%' };
    if (treatment === 'basic') return { cover: '70% - 80%', patientPay: '20% - 30%' };
    if (treatment === 'major') return { cover: '50%', patientPay: '50%' };
    if (treatment === 'orthodontics') return { cover: 'Allowance (Approx. $1,500)', patientPay: 'Remaining balance split monthly' };
    return { cover: '0% (Elective)', patientPay: '100% (Flexible financing available)' };
  };

  const calculation = getCoverageCalculation();

  const faqs = [
    {
      id: 'ins-faq-1',
      q: 'Will you file the insurance claims on my behalf?',
      a: 'Absolutely. Our concierge team does 100% of the heavy lifting. We submit all dental diagnostic x-rays, chart notes, and clinical codes directly to your provider. You never have to deal with paperwork or call your insurance company.'
    },
    {
      id: 'ins-faq-2',
      q: 'What is an annual maximum, and how does it load?',
      a: 'An annual maximum is the total dollar limit your insurance company pays for your dental treatments within a calendar year (typically ranging from $1,000 to $2,500). If you have unused benefits, they expire on Dec 31st and do not roll over, which is why scheduling treatments annually is highly recommended.'
    },
    {
      id: 'ins-faq-3',
      q: 'Do you accept out-of-network benefits?',
      a: 'Yes! We work with almost all major dental PPO plans even if we are not contracted directly with every niche division. In many cases, PPO out-of-network preventative benefits cover 100% of basic scale and cleanings, and we keep pricing very competitive to minimize any minor differences.'
    },
    {
      id: 'ins-faq-4',
      q: 'What are my options if I do not possess dental insurance?',
      a: 'We have you fully covered. We offer a high-value FLOSS In-House Wellness Plan which provides diagnostic cleanings, routine exams, and flat 15-20% discounts on all cosmetic veneers, Invisalign, and surgical restorations. Explore this in detail on our Financing Plans page!'
    }
  ];

  return (
    <div className="py-12 bg-[#FAFAFA]" id="insurance-page-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
            Seamless Billing & PPO Coverage
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 font-sans leading-tight">
            Accepting All Major <br />
            <span className="text-gray-500 font-bold">Dental PPO Insurances</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Maximize your dental health benefits without any stress. Our on-site insurance coordinators verify your plan, submit all paperwork, and offer complete, transparent cost breakdowns before your visit begins.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#54D6B7] hover:text-[#1A1A1A] font-bold rounded-full text-xs uppercase tracking-wider transition-all"
              id="ins-hero-book"
            >
              Verify & Book Online
            </button>
          </div>
        </div>

        {/* Insurance logo array */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-gray-800 shadow-xl text-center space-y-8">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Some of our Preferred Dental PPO partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {Object.entries(providerNames).map(([key, value]) => (
              <div 
                key={key} 
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#222222] border border-gray-800 hover:border-[#54D6B7]/40 transition duration-300"
              >
                <Building className="h-6 w-6 text-[#54D6B7] mb-2.5" />
                <span className="text-xs font-bold text-white tracking-wide">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 font-medium">
            *Please note: This includes any PPO plan carrying out-of-network options. We work closely with providers to extract the lowest copays for premium care.
          </p>
        </div>

        {/* Benefits & estimator grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Interactive Calculator Block */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EEEDE8] shadow-lg flex flex-col justify-between space-y-8" id="ins-estimator">
            <div className="space-y-3">
              <span className="text-xs uppercase text-[#54D6B7] tracking-widest font-bold flex items-center gap-1.5">
                <Calculator className="h-4.5 w-4.5 text-[#54D6B7]" />
                Interactive Coverage Estimator
              </span>
              <h3 className="text-2xl font-bold font-sans text-gray-950">Approximate Your Treatment Coverage</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                Select your current insurer and target restorative treatment category below to inspect typical national coverage coefficients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Select Provider</label>
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full bg-[#FAF9F6] text-xs font-bold text-gray-800 rounded-xl px-4 py-3 border border-[#EEEDE8] outline-none focus:border-[#54D6B7]"
                >
                  {Object.entries(providerNames).map(([key, val]) => (
                    <option key={key} value={key}>{val}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 block">Treatment Class</label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full bg-[#FAF9F6] text-xs font-bold text-gray-800 rounded-xl px-4 py-3 border border-[#EEEDE8] outline-none focus:border-[#54D6B7]"
                >
                  {Object.entries(treatmentDetails).map(([key, def]) => (
                    <option key={key} value={key}>{def.name.split(' (')[0]}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Simulated Live estimate outcome */}
            <div className="bg-[#FAF9F6] border border-[#EEEDE8] p-6 rounded-2xl space-y-4">
              <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wide">
                Simulated {providerNames[provider]} Reimbursement Profile:
              </span>
              
              <div className="grid grid-cols-2 gap-4 divide-x divide-[#EEEDE8]">
                <div className="space-y-1">
                  <span className="text-xs text-gray-500 font-semibold block">Expected Coverage</span>
                  <span className="text-2xl font-extrabold text-[#54D6B7] block font-mono">{calculation.cover}</span>
                </div>
                <div className="pl-4 space-y-1">
                  <span className="text-xs text-gray-500 font-semibold block">Approximate Out-of-Pocket</span>
                  <span className="text-2xl font-extrabold text-gray-950 block font-mono">{calculation.patientPay}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EEEDE8] text-[11px] text-gray-500 leading-normal font-medium">
                <strong>Policy Specifics:</strong> {treatmentDetails[treatment].notes}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#54D6B7] hover:text-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition text-center"
            >
              Request Standard Concierge Benefits Review
            </button>
          </div>

          {/* Core Insurance Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* transparency guarantee */}
            <div className="bg-white rounded-3xl p-8 border border-[#EEEDE8] shadow-lg space-y-6">
              <ShieldCheck className="h-10 w-10 text-[#54D6B7] bg-[#54D6B7]/10 p-2 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-sans text-gray-950">We Standardize Transparency</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Intimidating cost uncertainties cause many to avoid clinical visits. At FLOSS, we believe that real wellness requires transparency:
                </p>
              </div>

              <ul className="space-y-3.5 pt-2">
                {[
                  'Itemized treatment plans listing dental codes & real fees',
                  'Guaranteed exact out-of-pocket pricing estimates shown prior to therapy',
                  'No surprise back-billed administrative invoices or double charges',
                  'Up-front notification of your annual benefits standing'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-semibold">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#54D6B7] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2E2E2E] p-8 rounded-3xl text-white border border-gray-800 space-y-4">
              <FileText className="h-8 w-8 text-[#8FF0E4]" />
              <h4 className="font-bold text-lg text-white font-sans">No Insurance? No Problem.</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Our bespoke in-house savings plans provide complete routine preventative coverage and structural discounts for families or individuals without PPO policies.
              </p>
            </div>

          </div>

        </div>

        {/* Insurance FAQs */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase text-[#54D6B7] tracking-widest font-extrabold bg-[#54D6B7]/10 px-3 py-1 rounded-full">
              Insurance FAQs
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-gray-900">
              Common Insurance Questions
            </h3>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => {
              const isOpen = faqOpen === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-2xl border border-[#EEEDE8] overflow-hidden"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition"
                  >
                    <span className="text-xs sm:text-sm font-bold text-gray-900 font-sans flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#54D6B7] shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-[#54D6B7]" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#EEEDE8] bg-[#FAF9F6] text-xs text-gray-600 font-semibold leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
