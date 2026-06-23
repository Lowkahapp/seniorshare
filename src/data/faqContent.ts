export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        id: 'what-is-senoshare',
        question: 'What exactly is SenoShare?',
        answer:
          "SenoShare is a secure matching service that helps active older adults share homes. Whether you have extra space and want to offset costs, or you're looking for an affordable place to live with built-in companionship — we connect verified, background-checked members and support you through every step.",
      },
      {
        id: 'who-is-it-for',
        question: 'Who is SenoShare for?',
        answer:
          'SenoShare is for adults 55 and older who want to age in place with more connection and less financial strain. Home providers have extra space they want to share responsibly. Home seekers want an affordable, companionable living arrangement — not institutional care. Family members researching options for a parent are welcome too.',
      },
      {
        id: 'different-from-craigslist',
        question: 'How is this different from Craigslist or Facebook Marketplace?',
        answer:
          'Those platforms were never built for older adults sharing their homes. SenoShare requires identity verification and background checks, schedules mediated introductions with an advocate on the line, keeps your address private until both parties agree in writing, and helps draft a co-living agreement. There are no anonymous profiles and no rushing into in-person visits.',
      },
      {
        id: 'available-in-my-city',
        question: 'Is SenoShare available in my city?',
        answer:
          'We are growing city by city across the United States. Visit our Locations page to see active markets. If your city is not listed yet, join the waitlist — we prioritize expansion based on member demand in each area.',
      },
    ],
  },
  {
    id: 'safety-verification',
    title: 'Safety & Verification',
    items: [
      {
        id: 'identity-verification',
        question: 'What does identity verification involve?',
        answer:
          'Every member completes a government-ID check before they can match. We confirm your name, photo, and date of birth match official records. No anonymous profiles are allowed on SenoShare — you always know who you are talking to.',
      },
      {
        id: 'background-check',
        question: 'What does the background check cover?',
        answer:
          'We use an independent third-party service to screen for criminal records and relevant housing history. Checks are refreshed yearly. Results are reviewed by our team before a member is marked verified and eligible to match.',
      },
      {
        id: 'fake-verification',
        question: 'Can someone fake their way through verification?',
        answer:
          'Our process is designed to make that very difficult. Government-ID verification, independent background screening, and mediated video introductions with a SenoShare advocate on the line all work together. If anything looks inconsistent, we pause the profile until it is resolved.',
      },
      {
        id: 'feel-unsafe',
        question: 'What if I feel unsafe after a match?',
        answer:
          'Call our 24/7 member support line immediately. A trained advocate — not a bot — will pick up. If there is immediate danger, always call 911 first. We also provide a clear exit process so no one is ever trapped in an arrangement.',
      },
    ],
  },
  {
    id: 'costs-benefits',
    title: 'Costs & Benefits',
    items: [
      {
        id: 'how-much-cost',
        question: 'How much does SenoShare cost?',
        answer:
          'Browsing and creating a profile is free. Verified membership starts at $19 per month, with Full Support at $49 per month for hands-on advocate guidance. There are no hidden fees, and you can see full pricing details on our Pricing page before you commit.',
      },
      {
        id: 'social-security',
        question: 'Will home sharing affect my Social Security benefits?',
        answer:
          'Receiving rent from a housemate may count as income in some situations, which could affect benefits. We are not tax or benefits advisors, but we encourage you to speak with a qualified professional before finalizing any financial arrangement. Our advocates can help you think through questions to ask.',
      },
      {
        id: 'medicaid',
        question: 'Will home sharing affect my Medicaid eligibility?',
        answer:
          'Income from home sharing may be counted when determining Medicaid eligibility in some states. Rules vary significantly. We recommend consulting an elder law attorney or benefits counselor in your state before entering a co-living arrangement.',
      },
      {
        id: 'how-much-save',
        question: 'How much can I realistically save through home sharing?',
        answer:
          'Our members report average monthly savings of $800 to $2,000 depending on location and arrangement. Home providers offset mortgage or maintenance costs. Home seekers avoid market-rate rent entirely.',
      },
    ],
  },
  {
    id: 'match-process',
    title: 'The Match Process',
    items: [
      {
        id: 'how-matching-works',
        question: 'How does matching actually work?',
        answer:
          'After verification, you browse compatible members in your area based on lifestyle, routines, and preferences — not algorithms alone. When you find a potential match, we schedule a mediated video call with a SenoShare advocate. Only after both parties agree in writing do we share private contact details and support an in-person visit.',
      },
      {
        id: 'involve-family',
        question: 'Can I involve my family in the process?',
        answer:
          'Absolutely. Adult children and trusted family members are welcome on informational calls. The member always controls their own profile and decisions, but we encourage families to be part of the conversation — especially before any in-person meeting.',
      },
      {
        id: 'co-living-agreement',
        question: 'What is a co-living agreement?',
        answer:
          'A written document covering the practical details of living together: rent or cost-sharing, chores, guests, quiet hours, and how either party can exit the arrangement. Our advocates help every household draft one before move-in. It is not a lease replacement — we recommend reviewing it with an attorney if you have questions.',
      },
      {
        id: 'dont-get-along',
        question: "What if we match and then don't get along after move-in?",
        answer:
          'That is why we build in safeguards before move-in — mediated introductions, written agreements, and clear exit terms. If issues arise after move-in, contact your advocate immediately. We help members resolve disputes or exit arrangements safely and with dignity.',
      },
    ],
  },
  {
    id: 'insurance-legal',
    title: 'Insurance & Legal',
    items: [
      {
        id: 'homeowners-insurance',
        question:
          "Do I need to update my homeowner's insurance if I take in a housemate?",
        answer:
          'In most cases, yes. Taking in a housemate can affect your homeowner\'s or renter\'s insurance coverage. Contact your insurance provider before anyone moves in and let them know about the arrangement. We can help you think through questions to ask, but we do not provide insurance advice.',
      },
      {
        id: 'legal-advisor',
        question: 'Is SenoShare a legal or financial advisor?',
        answer:
          'No. SenoShare is a matching and support service. We are not attorneys, accountants, or licensed financial planners. For legal, tax, or benefits questions, please consult a qualified professional in your state.',
      },
      {
        id: 'legal-protections-provider',
        question: 'What legal protections do I have as a home provider?',
        answer:
          'Your co-living agreement sets the baseline. Beyond that, landlord-tenant law in your state may apply depending on how the arrangement is structured. We recommend consulting a local attorney familiar with housing law before finalizing any arrangement.',
      },
    ],
  },
]
