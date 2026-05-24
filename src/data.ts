import { Service, TeamMember, Testimonial, OfficeImage, FAQ } from './types';

export const LOCATIONS = [
  {
    id: 'heights',
    name: 'FLOSS Dental Heights',
    address: '1221 W 11th St, Houston, TX 77008',
    phone: '(346) 214-4807',
    email: 'infomidtown@flossdental.com',
    hours: [
      { days: 'Mon - Thu', time: '8:00 AM - 5:00 PM' },
      { days: 'Friday', time: '8:00 AM - 2:00 PM' },
      { days: 'Sat - Sun', time: 'Closed (Emergency Line Open)' }
    ],
    mapUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=450',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.482064972758!2d-95.42650058489066!3d29.789124481977792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c7490656a81b%3A0xc34ab1c3ea8baae1!2s1221%20W%2011th%20St%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1655823901995!5m2!1sen!2sus'
  },
  {
    id: 'midtown',
    name: 'FLOSS Dental Midtown',
    address: '2707 Milam S, Houston, TX 77006',
    phone: '(346) 214-4807',
    email: 'infomidtown@flossdental.com',
    hours: [
      { days: 'Mon - Thu', time: '8:00 AM - 5:00 PM' },
      { days: 'Friday', time: '8:00 AM - 2:00 PM' },
      { days: 'Sat - Sun', time: 'Closed (Emergency Line Open)' }
    ],
    mapUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=450',
    googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0934149953284!2d-95.38075!3d29.74163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf1451fdb3d1%3A0x6bd70adadfc55ff7!2s2707%20Milam%20St%2C%20Houston%2C%20TX%2077006!5e0!3m2!1sen!2sus!4v1655823955944!5m2!1sen!2sus'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Elevate your confidence with a custom, natural-looking smile redesign tailored to your unique facial features.',
    longDescription: 'At FLOSS, cosmetic dentistry is an art form. We combine digital smile design, pristine custom ceramic fabrications, and conservative dental artistry to erase stains, gaps, misalignment, and chips. Our aesthetic philosophy focuses on light reflection, tooth translucency, and facial alignment—crafting smiles that look stunning yet completely natural. Whether you need a singular treatment or a full-mouth smile reconstruction, we deliver editorial-quality results.',
    benefits: [
      'Individually customized digital smile mockups before treatment begins',
      'Minimally invasive preparation techniques to preserve natural tooth structure',
      'Ultra-durable, premium porcelain that mimics natural enamel luster',
      'Immediate confidence boost and highly photogenic smile harmony'
    ],
    duration: '1 - 2 visits',
    recovery: 'Minimal to none',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Sparkles',
    category: 'cosmetic'
  },
  {
    id: 'invisalign',
    title: 'Invisalign Clear Aligners',
    shortDescription: 'Straighten your teeth fully invisibly with custom smart-track clear aligners engineered for rapid, comfortable correction.',
    longDescription: 'Embrace the future of orthodontics with FLOSS—one of Houston\'s elite Preferred providers of Invisalign. Free your smile from traditional metal wires and brackets. Using our high-speed iTero digital scanner, we capture a precise 3D model of your dentition to generate your entire progression pathway. Our custom aligner arrays apply controlled, continuous forces safely and discreetly, aligning your teeth while fitting seamlessly into your busy urban lifestyle.',
    benefits: [
      'Removable aligners let you eat, drink, floss, and brush with zero restrictions',
      'Proprietary SmartTrack material for faster, highly comfortable tooth guidance',
      'Virtually invisible design that never interrupts your professional or social image',
      'No painful wire tightening or emergency bracket repairs required'
    ],
    duration: '6 - 18 months',
    recovery: 'Zero downtime',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Smile',
    category: 'cosmetic'
  },
  {
    id: 'implants',
    title: 'Advanced Dental Implants',
    shortDescription: 'Restore your smile permanently with biocompatible medical-grade implants that look, feel, and function like real teeth.',
    longDescription: 'Losing teeth can compromise nutritional health, speech clarity, and structural jaw integrity. Our state-of-the-art dental implants offer the gold standard in tooth replacement. We place biologically integrated titanium or ceramic anchors that fuse securely with your natural jawbone, functioning as stable roots. Each implant is capped with a handcrafted, customized ceramic crown designed to integrate flawlessly into your bite cycle and aesthetics.',
    benefits: [
      'Prevents bone loss and preserves natural youth-like facial contours',
      'Restores 100% biting force for an unrestrained, worry-free diet',
      'Guarantees permanent, non-slipping stability unlike traditional dentures',
      'Easy to maintain with your normal routine of brushing and flossing'
    ],
    duration: '3 - 6 months (staged)',
    recovery: '3 - 7 days',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Layers',
    category: 'restorative'
  },
  {
    id: 'veneers',
    title: 'Custom Porcelain Veneers',
    shortDescription: 'Obtain a permanent smile makeover with custom shell coatings that correct discoloration, gaps, and chips instantly.',
    longDescription: 'Porcelain veneers represent the ultimate secret behind celebrity smile makeovers. Crafted from tissue-friendly, high-strength medical porcelain, veneers are micro-thin shells bonded securely to the front surface of your teeth. At FLOSS Dental Houston, we hand-design each slate of veneers, selecting the precise shade, translucency, and form that will complement your skin tone, gum contours, and personal preferences perfectly.',
    benefits: [
      'Resistant to future staining from coffee, red wine, and tea',
      'Conceals deep chips, stubborn internally-stained enamel, and uneven gaps',
      'Reinforces the physical structural strength of lightly compromised teeth',
      'Designed and applied with incredible micro-precision for lifelike appeal'
    ],
    duration: '2 visits',
    recovery: 'None',
    image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Shield',
    category: 'cosmetic'
  },
  {
    id: 'emergency',
    title: 'Same-Day Emergency Dentistry',
    shortDescription: 'Get swift, gentle relief for toothaches, accidents, and sudden dental trauma via our emergency care line.',
    longDescription: 'Dental emergencies demand immediate, highly professional response. Whether you are struggling with an agonizing sudden toothache, a cracked crown, a broken filling, or a knocked-out tooth from sports, FLOSS Dental Houston reserves daily urgent slots to provide immediate same-day pain relief, diagnostic dental X-rays, and stabilizing treatments in a calm, soothing modern setting.',
    benefits: [
      'Same-day therapeutic priority to ensure immediate and lasting pain relief',
      'State-of-the-art diagnostic testing to identify root trauma causes immediately',
      'Empathetic, non-judgmental clinical support and comprehensive sedation options',
      'Direct, continuous phone triage support to guide you until you reach the practice'
    ],
    duration: 'Typically under 1 hour',
    recovery: 'Varies by treatment',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Activity',
    category: 'general'
  },
  {
    id: 'general',
    title: 'General & Preventative Care',
    shortDescription: 'Maintain peak dental health with meticulous cleanings, comprehensive digital screenings, and gentle therapies.',
    longDescription: 'Elite dental health begins with persistent, expert preventative hygiene. Our general dentistry services safeguard your wellness. We use high-definition intraoral cameras, painless digital X-rays, and ultrasonic scalers to remove plaque and diagnostic-stage cavities. Our gentle treatments help identify issues long before they require complex therapies, preserving your physical health and saving your finances.',
    benefits: [
      'Meticulous cleaning removes deep deposits that standard brushing misses',
      'Comprehensive screening for early-stage gum diseases and lesions',
      'Technologically advanced digital imaging with up to 90% less radiation',
      'Personalized hygiene guidelines tailored to your mouth\'s microbiome'
    ],
    duration: '45 - 60 minutes',
    recovery: 'Instant',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'HeartCheck',
    category: 'preventive'
  },
  {
    id: 'whitening',
    title: 'Professional Teeth Whitening',
    shortDescription: 'Illuminate your teeth by several shades instantly with medical-grade, highly safe bleaching therapies.',
    longDescription: 'Over-the-counter whitening strips often leave teeth sensitive, unevenly shaded, and minimally brighter. Our clinical teeth whitening solutions deliver powerful, radiant results safely. Using high-concentration, pH-balanced bleaching compounds triggered by our modern clinical light, we lift years of deep organic stains from coffee, tobacco, and natural aging—brightening your smile with complete safety.',
    benefits: [
      'Brightens smiles up to 8 shades in a single comfortable clinical session',
      'Customized gum barrier protection prevents localized soft tissue sensitivity',
      'Formulated to penetrate deep enamel rods for incredibly long-lasting results',
      'Includes specialized take-home preservation formulas for year-round brightness'
    ],
    duration: '1 hour',
    recovery: 'Instant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Sun',
    category: 'cosmetic'
  },
  {
    id: 'restorative',
    title: 'Custom Crown & Bridge Restorations',
    shortDescription: 'Reinforce heavily damaged, decayed, or fractured teeth with beautiful, monolithic zirconia crowns.',
    longDescription: 'When a tooth suffers from deep structural decay, stress fractures, or old crumbling fillings, a full-coverage crown offers the perfect reinforcement. We craft robust metal-free crowns and multi-unit bridges using custom-milled zirconia and lithium disilicate (e.max). These modern materials absorb chewing stress perfectly while blending seamlessly with your surrounding natural dentition.',
    benefits: [
      'Restores compromised bite alignment for healthy jaw joint dynamics',
      'Re-establishes structural support to prevent adjacent teeth from drifting',
      'Exceptional structural strength designed to survive decades of chewing',
      'Monolithic, metal-free compositions that eliminate dark lines near the gums'
    ],
    duration: '1 - 2 visits',
    recovery: '1 - 2 days',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800&h=533',
    iconName: 'Hammer',
    category: 'restorative'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'clint-herzog',
    name: 'Dr. Clint Herzog, D.D.S.',
    title: 'Founder & Aesthetic Visionary',
    specialty: 'Cosmetic Dentistry & Smile Reconstruction',
    credentials: ['Doctor of Dental Surgery (D.D.S.)', 'Invisalign Gold Master Advocate', 'American Academy of Cosmetic Dentistry (AACD)'],
    education: [
      'Texas A&M University College of Dentistry',
      'Advanced Aesthetics Certification, Las Vegas Institute (LVI)'
    ],
    bio: 'Dr. Clint Herzog founded FLOSS Dental with a singular core vision: to transform oral healthcare from a clinical chore into an inspiring modern lifestyle ritual. Under his guidance, FLOSS pioneered upscale, tech-focused, and incredibly comfortable cosmetic practices in Houston. He combines master-level aesthetic science with a deep talent for facial rhythm analysis, ensuring every designed smile harmonizes with the patient’s character, style, and natural features.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750',
    quote: 'We aren’t just repairing teeth. We are restoring confidence, amplifying wellness, and creating designs that deserve to be shared.'
  },
  {
    id: 'sharon-dds',
    name: 'Dr. Sharon, D.D.S.',
    title: 'Lead Aesthetic Artist',
    specialty: 'High-End Veneers & Conservative Smile Design',
    credentials: ['Doctor of Dental Surgery', 'International Congress of Oral Implantologists (ICOI)', 'Academy of General Dentistry'],
    education: [
      'UTHealth School of Dentistry at Houston',
      'Mastery Residency in Digital Smile Design & Biomimetic Restorations'
    ],
    bio: 'Dr. Sharon represents the artistic heart of FLOSS Dental Houston. Driven by a deep focus on biomimetic dentistry, she holds the belief that cosmetic materials should perform like natural enamel. She spends her clinical hours designing custom porcelain veneers and composite arts that preserve the biological tooth structure. She balances medical mastery with a relaxing, modern pediatric and adult chairside charm.',
    image: 'https://i.ibb.co/JwT5R9H5/ai-generated-9019520-1280.png',
    quote: 'True cosmetic dentistry shouldn’t look fabricated. It should look like your absolute best natural smile, made entirely brilliant.'
  },
  {
    id: 'michael-munilla',
    name: 'Dr. Michael Munilla, D.D.S.',
    title: 'Senior Clinical Director',
    specialty: 'Surgical Implantology & Advanced Restorative Care',
    credentials: ['Doctor of Dental Surgery', 'Fellowship, International Congress of Oral Implantologists', 'Greater Houston Dental Society Member'],
    education: [
      'University of Texas Dental Branch at Houston',
      'Advanced Core Implant Surgical Residency, Misch International Implant Institute'
    ],
    bio: 'Boasting over two decades of highly specialized clinical experience in the Houston area, Dr. Munilla is our resident expert in advanced restorative oral health. He specializes in full-mouth reconstructions, surgical dental implant placements, and complex bite alignments. Dr. Munilla applies incredible clinical standards, ensuring that restorations are biologically integrated, structurally sound, and beautiful.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=750',
    quote: 'Our goal is simple: structural longevity and painless precision. We fuse engineering with biology to rebuild your smile from the foundation.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Alexander G.',
    rating: 5,
    text: 'FLOSS changed my entire view of what going to the dentist is. From the moment I stepped inside their Houston Heights location, it felt like entering a luxury wellness spa. No chemical smell, gorgeous lo-fi music, and high-end interiors. Dr. Sharon talked me through my veneers design, and my final smile is absolutely perfect. I get complimented every single day!',
    treatment: 'Porcelain Veneers & Smile Makeover',
    date: 'April 2026',
    role: 'Heights Patient',
    location: 'Houston, TX'
  },
  {
    id: 'rev-2',
    author: 'Samantha K.',
    rating: 5,
    text: 'I started my Invisalign progression at the FLOSS Midtown office, and the experience has been seamless. The iTero digital scanner took a fast 3D map of my teeth instead of those horrible gooey trays. The aligners are completely invisible, and my teeth are shifting into perfect alignment weeks ahead of schedule. The team is youthful, energetic, and highly professional.',
    treatment: 'Invisalign Clear Aligners',
    date: 'May 2026',
    role: 'Midtown Patient',
    location: 'Houston, TX'
  },
  {
    id: 'rev-3',
    author: 'Marcus L.',
    rating: 5,
    text: 'A sports injury on a Friday evening knocked out my crown. I called their emergency line and they treated me early Saturday morning! Dr. Munilla got me in instantly, relieved the pain, and replaced the crown with a pristine matching zirconia crown. This clinic’s quick action, high technology, and empathy are unmatched. Highly recommend FLOSS!',
    treatment: 'Same-Day Emergency Dentistry',
    date: 'March 2026',
    role: 'Emergency Care Patient',
    location: 'Houston, TX'
  },
  {
    id: 'rev-4',
    author: 'Elena R.',
    rating: 5,
    text: 'My routine dental cleanings were always something I feared, but the dental hygienists at FLOSS are incredibly gentle. They use warm running water and ultrasonic tools that protect sensitive teeth. The deep-cleaning process felt completely comfortable. Plus, they have flat-screen monitors with Netflix to keep you entertained. Best dental experience ever.',
    treatment: 'General Dentistry & Screenings',
    date: 'May 2026',
    role: 'Heights Patient',
    location: 'Houston, TX'
  }
];

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do FLOSS Dental offices differ from standard dental clinics?',
    answer: 'FLOSS was built to intentionally redesign your dental experience. We combine a sleek, luxury lifestyle aesthetic (vibrant plants, calm aromatherapy, modern architectural styling) with cutting edge, ultra-silent technology. We skip traditional loud dental tools, chemical odors, and intimidating clinical environments in favor of client comfort, entertainment screens with custom streaming, and comprehensive aesthetic dentistry.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Do you accept major dental insurance plans at FLOSS Houston?',
    answer: 'Absolutely. We accept a wide array of PPO private dental insurance plans (including Blue Cross Blue Shield, Delta Dental, Cigna, MetLife, Guardian, and Aetna). Our dedicated benefits coordinators compile your coverage forms on your behalf, providing full, transparent financial summaries before any therapy commences so there are never any unexpected surprises.',
    category: 'insurance'
  },
  {
    id: 'faq-3',
    question: 'Can I view a 3D digital model of my new smile before starting Invisalign or Veneers?',
    answer: 'Yes! Using our elite iTero digital mouth scanners, we render highly detailed 3D files of your teeth in seconds. We perform a real-time digital orthodontic or veneer simulator that maps your step-by-step movement, showing you exactly what your aligned smile will look like before you commit to start.',
    category: 'treatments'
  },
  {
    id: 'faq-4',
    question: 'What constitutes a dental emergency, and when can I call your team?',
    answer: 'If you are enduring severe physical pain, sudden dental swelling, bleeding, a loose or knocked-out permanent tooth, or a broken crown/bridge, you are facing a dental emergency. You should call our emergency line immediately at (346) 214-4807. We provide rapid pain relief treatments on a same-day priority basis.',
    category: 'emergency'
  }
];

export const OFFICE_GALLERY: OfficeImage[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Modern Clinic Suite',
    category: 'treatment'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Upscale Reception Lounge',
    category: 'lobby'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'iTero 3D Digital Diagnostic Hub',
    category: 'technology'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Comfort-First Treatment Bays',
    category: 'treatment'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Houston Design Studio Workstations',
    category: 'technology'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Premium Office Exterior entrance',
    category: 'exterior'
  }
];
