export type Story = {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  authorName: string
  authorInitials: string
  createdAt: string
  readMinutes: number
}

export type CommunityGroup = {
  id: string
  name: string
  description: string
  category: string
  memberCount: number
  recentActivity: string
}

export type MessageThread = {
  id: string
  name: string
  initials: string
  preview: string
  time: string
  unread: boolean
}

export const sampleStories: Story[] = [
  {
    id: 'garden-wisdom',
    title: 'Fifty Years in the Garden',
    excerpt:
      'What my vegetable patch taught me about patience, seasons, and letting go.',
    content: `When I moved into our little bungalow in 1974, the backyard was nothing but crabgrass and broken fence posts. My neighbor Ruth handed me a packet of tomato seeds and said, "Start small. Watch what grows."

That first summer I failed more than I succeeded. The tomatoes split from too much water. The beans attracted every rabbit in the county. But Ruth came over every Saturday with iced tea and advice that had nothing to do with gardening and everything to do with living.

"Plants don't rush," she'd say. "Neither should you."

By year ten, I was feeding half the block with zucchini bread. By year twenty, I was teaching my grandchildren to dig in the dirt without fear of getting messy. Now, at eighty-one, I still wake early to check the dew on the lettuce leaves.

The garden taught me that not every season looks like success. Some years are for resting the soil. Some years are for abundance you share with strangers. The work is never really about the harvest — it's about showing up, day after day, with hope in your hands.`,
    category: 'Life Lessons',
    authorName: 'Margaret Chen',
    authorInitials: 'MC',
    createdAt: '2026-06-18',
    readMinutes: 4,
  },
  {
    id: 'railroad-memories',
    title: 'Memories from the Railroad',
    excerpt:
      'Four decades as a conductor taught me that every passenger carries a story worth hearing.',
    content: `I started on the Chicago & North Western line when I was twenty-two, fresh out of the service and hungry for work that moved. The trains ran through snow so thick you could barely see the lantern ahead, and through summer heat that made the metal rails shimmer like water.

Conductors learn to read people quickly. The businessman rushing to a funeral. The young couple holding hands for the first time in public. The mother traveling alone with three children and a courage I still admire.

My favorite runs were the overnight routes. There's something peaceful about America sliding past in the dark — small towns with a single lit window, rivers catching moonlight, freight yards humming while the world sleeps.

I retired in 1998, but I still wave at every train I hear. Some habits — and some loves — don't retire.`,
    category: 'Career',
    authorName: 'James Whitfield',
    authorInitials: 'JW',
    createdAt: '2026-06-15',
    readMinutes: 3,
  },
  {
    id: 'grandmas-kitchen',
    title: "Grandma's Sunday Kitchen",
    excerpt:
      'The recipe was never written down. The love was measured in handfuls and laughter.',
    content: `Every Sunday, our kitchen smelled like cinnamon and possibility. Grandma Rose didn't use measuring cups — she used memory. A pinch of this, a splash of that, and always, always a story while the dough rested.

"Never rush the bread," she told me when I was seven. "It knows when you're impatient."

Her apple pie won ribbons at the county fair eleven years running, but she gave the recipe away freely. "Food is for sharing," she'd say. "Secrets make the crust tough."

When she passed, we found notes tucked inside her cookbooks — not ingredients, but messages. "Tell Ruth the oven runs hot." "Hum while you knead." "Save a slice for the mail carrier."

I still make her pie every autumn. The crust isn't always perfect, but the kitchen still smells like love.`,
    category: 'Family',
    authorName: 'Elena Rodriguez',
    authorInitials: 'ER',
    createdAt: '2026-06-12',
    readMinutes: 3,
  },
  {
    id: 'letters-home',
    title: 'Letters I Never Sent',
    excerpt:
      'Finding a box of old letters reminded me that some feelings are worth saying out loud.',
    content: `Cleaning out the attic last spring, I found a shoebox tied with faded ribbon. Inside were dozens of letters I'd written to my brother Tommy during the war — letters I never mailed because I was afraid of saying too much.

Reading them now, at seventy-six, I see a young man who loved his family fiercely but didn't know how to say it without sounding soft. Tommy passed in 2019. We said "love you" plenty at the end, but I wish I'd said it more in the middle.

I started writing again — not letters to the past, but notes to my children and grandchildren. Short ones. Honest ones. "I'm proud of you." "I remember when you were small." "Thank you for calling."

Words have weight. Don't wait for a shoebox to remind you.`,
    category: 'Reflection',
    authorName: 'Robert Hayes',
    authorInitials: 'RH',
    createdAt: '2026-06-08',
    readMinutes: 4,
  },
]

export const sampleGroups: CommunityGroup[] = [
  {
    id: 'garden-club',
    name: 'Backyard Gardeners',
    description:
      'Swap tips, photos, and seasonal wins from gardens big and small.',
    category: 'Hobbies',
    memberCount: 248,
    recentActivity: 'New photo shared 2h ago',
  },
  {
    id: 'book-circle',
    name: 'Tuesday Book Circle',
    description:
      'A relaxed group reading one thoughtful book each month, at your own pace.',
    category: 'Reading',
    memberCount: 112,
    recentActivity: 'Discussion started today',
  },
  {
    id: 'family-recipes',
    name: 'Family Recipes & Traditions',
    description:
      'Preserve the dishes and stories that make your table feel like home.',
    category: 'Food',
    memberCount: 389,
    recentActivity: '3 new recipes this week',
  },
  {
    id: 'local-history',
    name: 'Hometown Memories',
    description:
      'Share photos and stories about the places and people who shaped your town.',
    category: 'History',
    memberCount: 176,
    recentActivity: 'Member joined 1h ago',
  },
  {
    id: 'walking-buddies',
    name: 'Morning Walk Buddies',
    description:
      'Stay active together with gentle walks, check-ins, and encouragement.',
    category: 'Wellness',
    memberCount: 94,
    recentActivity: 'Walk logged this morning',
  },
  {
    id: 'grandparents',
    name: 'Grandparents Corner',
    description:
      'Celebrate grandkids, share advice, and laugh about the beautiful chaos.',
    category: 'Family',
    memberCount: 521,
    recentActivity: '5 new posts today',
  },
]

export const sampleMessages: MessageThread[] = [
  {
    id: 'sarah',
    name: 'Sarah (daughter)',
    initials: 'S',
    preview: 'Love the story you posted! Can we record it together Sunday?',
    time: '10:42 AM',
    unread: true,
  },
  {
    id: 'book-circle',
    name: 'Tuesday Book Circle',
    initials: 'BC',
    preview: 'This month\'s pick is ready — no rush, read when you can.',
    time: 'Yesterday',
    unread: true,
  },
  {
    id: 'michael',
    name: 'Michael',
    initials: 'M',
    preview: 'Thanks for the garden advice. The tomatoes are thriving!',
    time: 'Mon',
    unread: false,
  },
  {
    id: 'elena',
    name: 'Elena Rodriguez',
    initials: 'ER',
    preview: 'Your comment on my kitchen story made my day.',
    time: 'Sun',
    unread: false,
  },
]

export function getStoryById(id: string) {
  return sampleStories.find((story) => story.id === id)
}
