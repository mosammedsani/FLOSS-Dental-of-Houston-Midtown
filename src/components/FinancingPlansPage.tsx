import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Smile, 
  Award, 
  CheckCircle2, 
  DollarSign, 
  Scale, 
  FileCheck, 
  UserPlus, 
  HeartHandshake 
} from 'lucide-react';

interface FinancingPlansPageProps {
  onOpenBooking: () => void;
}

export default function FinancingPlansPage({ onOpenBooking }: FinancingPlansPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<'individual' | 'couple' | 'family'>('individual');

  const inHousePlans = {
    individual: {
      name: 'FLOSS Signature Individual Care',
      price: '$299',
      interval: 'annually',
      valueRetail: '$650 value',
      savings: '$351 saved per year',
      includes: [
        '2 Comprehensive Cleanings per year',
        '2 Standard Clinical Oral Examinations',
        'All necessary Digital Dental X-Rays',
        '1 Same-Day Emergency diagnostic slot',
        '15% Flat Discount on Porcelain Veneers, Crown work & Bonding',
        '15% Flat Discount on Invisalign Clear Aligners sequence'
      ]
    },
    couple: {
      name: 'FLOSS Co-Living Couple Membership',
      price: '$549',
      interval: 'annually',
      valueRetail: '$1,300 value',
      savings: '$751 saved per year',
      includes: [
        '4 Cleanings total (2 per individual)',
        '4 Comprehensive Exams (2 per individual)',
        'All Digital X-Rays & Screening series',
        '2 Same-Day Emergency diagnostics total',
        '20% Flat Discount on Cosmetic Veneers & restorative procedures',
        '20% Flat Discount on Invisalign paths'
      ]
    },
    family: {
      name: 'FLOSS Household Family Wellness',
      price: '$899',
      interval: 'annually (Up to 4 members)',
      valueRetail: '$2,600 value',
      savings: '$1,701 saved per year',
      includes: [
        '8 Cleanings total (2 per household member)',
        '8 Examinations & Hygiene consultations',
        'All necessary Pediatric and Adult diagnostic X-Rays',
        'Comprehensive family emergency diagnostic support',
        '20% Flat Discount on pediatric SEALANTS and therapeutic fillings',
        '20% Flat Discount on cosmetic dental works and Invisalign series'
      ]
    }
  };

  const thirdPartyFinancing = [
    {
      name: 'CareCredit Dentistry',
      badge: 'Zero-Interest Promotional Financing',
      desc: 'CareCredit works like a dedicated credit card for health and wellness. We offer 6, 12, and 18-month direct interest-free plans for cosmetic, restorative, and orthodontic dental workflows.',
      linkText: 'Prequalify in seconds via CareCredit',
      icon: CreditCard
    },
    {
      name: 'Proceed Finance',
      badge: 'For Large Full-Smile Transformations',
      desc: 'Providing flexible personal loans up to $70,000 with low interest rates and extended repayment timelines (up to 96 months). Designed specifically for dental implants and full-mouth veneer configurations.',
      linkText: 'Check Proceed Finance pathways',
      icon: FileCheck
    },
    {
      name: 'Sunbit Flex-Pay',
      badge: '95% Approval Rate Instantly',
      desc: 'Perfect for quick restorations, crowns, fillings, and same-day dental emergencies. Check your eligibility in less than 30 seconds with no impact on your critical credit bureau profile.',
      linkText: 'Apply easily via Sunbit',
      icon: Smile
    }
  ];

  const plan = inHousePlans[selectedPlan];

  return (
    <div className="py-12 bg-[#FAFAFA]" id="financing-page-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Hero */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
            Flexible Financial Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 font-sans leading-tight">
            Premium Dental Care <br />
            <span className="text-gray-500 font-bold">Made Accessible For Everyone</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Your smile is an investment in your personal confidence, career, and physical health. Whether you are seeking a full-mouth cosmetic smile makeover or maintaining routine preventative care, we offer tailored finance options to fit your lifestyle.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#54D6B7] hover:text-[#1A1A1A] font-bold rounded-full text-xs uppercase tracking-wider transition"
            >
              Consult Financing Options
            </button>
          </div>
        </div>

        {/* Option Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch pt-6">
          
          {/* FLOSS Wellness Membership Plan block */}
          <div className="bg-white rounded-3xl p-8 border border-[#EEEDE8] shadow-lg flex flex-col justify-between space-y-8" id="inhouse-plan-cabinet">
            
            <div className="space-y-4">
              <span className="text-xs uppercase text-[#54D6B7] tracking-widest font-extrabold bg-[#54D6B7]/10 px-3.5 py-1 rounded-full inline-block">
                In-House Wellness Savings Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-gray-950 leading-tight">No Insurance? Enroll in our FLOSS Membership</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                Gain massive cost advantages without waiting times, insurance deductible barriers, complex pre-determinations, or yearly policy maximum caps. Select your preferred tier:
              </p>
            </div>

            {/* Plan switcher tabs */}
            <div className="grid grid-cols-3 gap-2 bg-[#FAF9F6] p-1.5 rounded-xl border border-[#EEEDE8]">
              {Object.keys(inHousePlans).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlan(key as any)}
                  className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    selectedPlan === key
                      ? 'bg-[#1A1A1A] text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  id={`plan-tab-btn-${key}`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Plan details display */}
            <div className="bg-[#FAF9F6] border border-[#EEEDE8] rounded-2xl p-6 space-y-5">
              
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-extrabold text-gray-950 font-sans text-base">{plan.name}</h4>
                  <span className="text-xs text-gray-400 font-bold tracking-wide">Inclusions Retail Value: {plan.valueRetail}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900 font-mono block">{plan.price}</span>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{plan.interval}</span>
                </div>
              </div>

              <div className="text-xs font-bold text-[#54D6B7] uppercase tracking-wide bg-[#54D6B7]/5 border border-[#54D6B7]/20 py-2 px-3 rounded-lg text-center">
                🔥 Exclusive Value Benefit: {plan.savings}
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Plan Coverage Benefits:</span>
                <div className="grid gap-2">
                  {plan.includes.map((incl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-600 font-semibold leading-normal">
                      <CheckCircle2 className="h-4 w-4 text-[#54D6B7] shrink-0 mt-0.5" />
                      <span>{incl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-4 bg-gradient-to-r from-[#54D6B7] to-[#8FF0E4] hover:shadow-lg transition text-[#1A1A1A] font-extrabold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
              id="enroll-now-btn"
            >
              <UserPlus className="h-4 w-4" />
              Enroll in Wellness Plan Online
            </button>

          </div>

          {/* Third-Party low-interest financing providers */}
          <div className="flex flex-col gap-6 justify-between">
            
            <div className="bg-white rounded-3xl p-8 border border-[#EEEDE8] shadow-lg space-y-6 flex-1">
              <div className="space-y-2">
                <span className="text-xs uppercase text-gray-400 font-bold tracking-widest block">Third-Party Partners</span>
                <h3 className="text-2xl font-bold font-sans text-gray-950">Installment Financing Plans</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  We coordinate with leading healthcare finance structures, offering flexible configurations to divide procedural investments into predictable, painless monthly intervals.
                </p>
              </div>

              <div className="space-y-6">
                {thirdPartyFinancing.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0 space-y-2.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-[#FAF9F6] text-[#54D6B7] border border-[#EEEDE8]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] text-sm font-sans">{item.name}</h4>
                          <span className="text-[10px] text-[#54D6B7] font-bold uppercase tracking-wider block mt-0.5">{item.badge}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold pl-13">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact concierge reassurance card */}
            <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-gray-800 text-white space-y-4">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-8 w-8 text-[#54D6B7]" />
                <h4 className="font-bold text-base text-white font-sans">Our Patient Concierge Commitment</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Financing and insurance can feel complex, but we promise a completely transparent, judgement-free workspace. Our patient financial coordinators sit down with you to explore payment timelines, ensuring you achieve the look you deserve on your terms.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
