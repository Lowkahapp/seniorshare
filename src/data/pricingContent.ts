export type PricingPlan = {
  id: string
  name: string
  tagline: string
  price: string
  priceNote?: string
  badge?: string
  highlighted?: boolean
  features: string[]
  cta: string
  ctaTo: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'browse',
    name: 'Browse',
    tagline: 'Explore the community before you commit.',
    price: 'Free',
    priceNote: 'always',
    features: [
      'View verified member profiles',
      'See match preferences and lifestyle details',
      'Browse available homes and home seekers',
      'No credit card required',
    ],
    cta: 'Create free profile',
    ctaTo: '/onboarding',
  },
  {
    id: 'verified',
    name: 'Verified Member',
    tagline: 'Get verified and start matching with peers.',
    price: '$19',
    priceNote: 'per month',
    badge: 'Most Popular',
    highlighted: true,
    features: [
      'Everything in Browse',
      'Government ID verification',
      'Independent background check (refreshed yearly)',
      'Send and receive match requests',
      'Secure in-app messaging after mutual match',
      'Access to 24/7 member support line',
    ],
    cta: 'Get verified',
    ctaTo: '/onboarding',
  },
  {
    id: 'full-support',
    name: 'Full Support',
    tagline: 'Hands-on guidance from a Senoshare advocate.',
    price: '$49',
    priceNote: 'per month',
    features: [
      'Everything in Verified Member',
      'Mediated video intro call with a Senoshare advocate',
      'Personalized match recommendations',
      'Co-living agreement drafting assistance',
      'Priority 24/7 phone support',
      'Quarterly check-in calls with your advocate',
      "Ongoing support after your match — we don't disappear",
    ],
    cta: 'Get full support',
    ctaTo: '/onboarding',
  },
]

export const pricingTrustNotes = [
  'Cancel anytime. No long-term contracts.',
  'Background checks by independent third parties.',
  'Your data is never sold or shared.',
] as const

export const pricingFaqs = [
  {
    id: 'browsing-free',
    question: 'Is browsing really free?',
    answer:
      "Yes. You can create a profile and browse verified members at no cost. You only need a paid plan when you're ready to connect and match.",
  },
  {
    id: 'background-check',
    question: 'What does the background check include?',
    answer:
      'We use an independent third-party service to check criminal history and housing records. Checks are refreshed every 12 months for all paid members.',
  },
  {
    id: 'cancel-anytime',
    question: 'Can I cancel anytime?',
    answer:
      'Yes. There are no contracts or cancellation fees. You can pause or cancel your membership from your account settings at any time.',
  },
  {
    id: 'benefits-impact',
    question: 'Does the price affect my Social Security or benefits?',
    answer:
      'Senoshare membership fees are a personal expense and generally do not affect Social Security income. However, any rent or cost-sharing arrangements you enter into may have implications depending on your benefit programs. We recommend speaking with a benefits advisor.',
  },
  {
    id: 'advocates',
    question: 'Who are the Senoshare advocates?',
    answer:
      'Advocates are trained Senoshare staff — not bots — who facilitate introductions, help draft agreements, and are available around the clock for safety concerns or disputes.',
  },
] as const
