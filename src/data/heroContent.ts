export const heroImages = {
  home: '/images/hero/home.jpg',
  livingRoom: '/images/hero/living-room.jpg',
  community: '/images/hero/community.jpg',
  margaret: '/images/hero/margaret.jpg',
  robert: '/images/hero/robert.jpg',
} as const

export const heroGallery = [
  {
    src: heroImages.home,
    alt: 'Bright craftsman home with a welcoming front porch',
    caption: 'Beautiful shared homes',
  },
  {
    src: heroImages.livingRoom,
    alt: 'Warm living room with comfortable seating and natural light',
    caption: 'Spaces built for connection',
  },
  {
    src: heroImages.community,
    alt: 'Active older adults enjoying time together outdoors',
    caption: 'Companionship, not isolation',
  },
] as const
