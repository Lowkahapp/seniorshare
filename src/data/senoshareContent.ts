export const trustPillars = [
  {
    title: 'Identity verification',
    description:
      'Every member completes a government-ID check before they can match. No anonymous profiles, ever.',
  },
  {
    title: 'Background screening',
    description:
      'Independent third-party background checks for housing history and criminal records, refreshed yearly.',
  },
  {
    title: 'Guided introductions',
    description:
      'We schedule mediated video calls before any in-person visit, with a trained Senoshare advocate on the line.',
  },
  {
    title: 'Private by default',
    description:
      'Your address, phone, and finances are never shared until both parties accept a match in writing.',
  },
  {
    title: '24/7 member support',
    description:
      'A real person picks up the phone — day or night — for safety concerns, disputes, or emergencies.',
  },
  {
    title: 'Written co-living agreements',
    description:
      'Our advocates help every household draft a clear living agreement covering finances, chores, guests, and exits.',
  },
] as const

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Create your profile',
    description:
      "Tell us whether you're offering a home or seeking one, and a little about your routines and preferences.",
  },
  {
    step: 2,
    title: 'Get verified',
    description:
      "Complete our ID and background checks. We'll guide you through every step.",
  },
  {
    step: 3,
    title: 'Match with care',
    description:
      "Review matches, meet on a guided call, then decide if you'd like to take the next step in person.",
  },
  {
    step: 4,
    title: 'We support you after the match too.',
    description:
      "From welcome calls to co-living agreements and ongoing support, we're with you long after move-in day.",
  },
] as const

export const sampleMembers = [
  {
    id: 'margaret',
    name: 'Margaret, 68',
    location: 'Portland, OR',
    role: 'Home Provider',
    details: '2 bedrooms · Loves gardening',
    initials: 'M',
    verified: true,
  },
  {
    id: 'robert',
    name: 'Robert, 71',
    location: 'Seattle, WA',
    role: 'Home Seeker',
    details: 'Early bird · Quiet evenings',
    initials: 'R',
    verified: true,
  },
] as const

export const sampleMatch = {
  title: 'Mediated intro scheduled',
  description: 'Video call with a Senoshare advocate · Tuesday 10am',
}

export const footerResources = [
  { label: 'For families', to: '/for-families' },
  { label: 'After your match', to: '/how-it-works#after-match' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Professional Partners', to: '/partners' },
] as const

export const footerSupport = [
  { label: 'Locations', to: '/locations' },
  { label: 'Call us', to: '/support' },
] as const
