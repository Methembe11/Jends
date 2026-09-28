const UPLOADS = "https://www.jendssafaris.co.zw/wp-content/uploads";

export type Tour = {
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Activities", href: "/activities/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const brand = {
  name: "Jends Safaris",
  wordmark: "Jends Safaris",
  logo: `${UPLOADS}/2026/05/cropped-Jends-Safaris-Logo-png.png`,
  logoAlt: "Jends Safaris",
  phone: "+263 77 588 1441",
  phoneHref: "tel:+263775881441",
  email: "reservations@jendssafaris.co.zw",
  emailHref: "mailto:reservations@jendssafaris.co.zw",
  address: "6559 Mkhosana, Victoria Falls, Zimbabwe",
  copyright: "Copyright © 2026 Jends Safaris",
};

/**
 * WhatsApp runs on the existing reservations line, so this is a new channel
 * for the same business information rather than new information.
 */
export const whatsapp = {
  label: "WhatsApp",
  href:
    "https://wa.me/263775881441?text=" +
    encodeURIComponent(
      "Hello Jends Safaris, I would like to make an enquiry about a booking."
    ),
};

export const heroBackgrounds = {
  home: `${UPLOADS}/2026/05/pexels-photo-26924197-1.jpeg`,
  about: `${UPLOADS}/2026/05/pexels-photo-12382023-1.jpeg`,
  activities: `${UPLOADS}/2026/05/pexels-photo-33650537-1.jpeg`,
  blog: `${UPLOADS}/2026/05/pexels-photo-26797379-1.jpeg`,
  contact: `${UPLOADS}/2026/05/pexels-photo-13098893-1.jpeg`,
};

export const ctaBackgrounds = {
  adventure: `${UPLOADS}/2026/05/pexels-photo-28157156-1.jpeg`,
  journeyHome: `${UPLOADS}/2026/05/pexels-photo-13242022-1.jpeg`,
  journeyAbout: `${UPLOADS}/2026/05/pexels-photo-13954242-1.jpeg`,
  journeyActivities: `${UPLOADS}/2026/05/pexels-photo-15893593-1.jpeg`,
  journeyContact: `${UPLOADS}/2026/05/pexels-photo-18000463-1.jpeg`,
};

/**
 * Homepage hero video, self-hosted.
 *
 * Must be an mp4 under public/video/. Set `enabled` to false to fall back
 * to the still photograph; the poster frame is that same photograph, so the
 * hero looks correct either way.
 *
 * A third-party CDN url cannot be used here: TikTok and similar hosts serve
 * media from signed, expiring links, so a hardcoded remote source breaks on
 * its own within hours.
 */
export const heroVideo = {
  enabled: false,
  src: "/video/hero.mp4",
};

export const tours: Tour[] = [
  {
    title: "Guided Tours",
    description:
      "Immerse yourself in the beauty of Victoria Falls with our expert-led tours.",
    price: "$29.00",
    image: `${UPLOADS}/2026/05/pexels-photo-13234382-1-1024x682.jpeg`,
    imageAlt:
      "A majestic African elephant crosses a dirt road during a safari in Tanzania.",
  },
  {
    title: "Hotel Transfers",
    description:
      "Seamless transfers between your hotel and various attractions around Victoria Falls.",
    price: "$35.00",
    image: `${UPLOADS}/2026/05/a2-e1778439324984-1024x790.png`,
    imageAlt: "Hotel Transfers",
  },
  {
    title: "Cultural Tours",
    description:
      "Engage with local culture through insightful village tours and authentic experiences.",
    price: "$120.00",
    image: `${UPLOADS}/2026/05/ef-1024x768.jpg`,
    imageAlt: "Cultural Tours",
  },
  {
    title: "Hwange Trips",
    description:
      "Join us for a day trip to Hwange National Park, home to diverse wildlife.",
    price: "$250.00",
    image: `${UPLOADS}/2026/05/pexels-photo-17031055-1-683x1024.jpeg`,
    imageAlt:
      "Giraffe and wildebeests roam freely in a lush safari setting, showcasing Africa's diverse wildlife.",
  },
  {
    title: "Airport Transfers",
    description:
      "Convenient and comfortable transfers to and from Victoria Falls airport await you.",
    price: "$35.00",
    image: `${UPLOADS}/2026/05/a6-1024x768.png`,
    imageAlt: "Airport Transfers",
  },
  {
    title: "Sunset Cruises",
    description:
      "Experience breathtaking sunsets over the Zambezi River onboard our luxury cruises.",
    price: "$100.00",
    image: `${UPLOADS}/2026/05/vfsl-website-thumbnail-800x800-1-1024x576.webp`,
    imageAlt: "Sunset Cruises",
  },
  {
    title: "Adventure Activities",
    description:
      "From bungee jumping to white-water rafting, thrill-seekers will find excitement here.",
    price: "$108.00",
    image: `${UPLOADS}/2026/05/Bungee-Jump-at-Victoria-Falls-1024x464.jpg`,
    imageAlt: "bungee jump at victoria falls",
  },
  {
    title: "Chobe Day Trips",
    description:
      "Uncover the scenic beauty and wildlife of Chobe National Park with our guided tours.",
    price: "$210.00",
    image: `${UPLOADS}/2026/05/pexels-photo-34632473-1-683x1024.jpeg`,
    imageAlt:
      "A majestic giraffe standing tall amidst the African bushland, showcasing wildlife in its natural habitat.",
  },
];

export const tourColumns: Tour[][] = [tours.slice(0, 4), tours.slice(4, 8)];

export const activityTours: Tour[] = [
  {
    title: "Guided Tours",
    description:
      "Immerse yourself in the beauty of Victoria Falls with our expert-led tours.",
    price: "$29.00",
    image: `${UPLOADS}/2026/05/pexels-photo-33650627-1-576x1024.jpeg`,
    imageAlt:
      "A group of giraffes stand together in the golden light of the African savanna.",
  },
  {
    title: "Hotel Transfers",
    description:
      "Seamless transfers between your hotel and various attractions around Victoria Falls.",
    price: "$35.00",
    image: `${UPLOADS}/2026/05/a2-e1778439324984-1024x790.png`,
    imageAlt: "Hotel Transfers",
  },
  {
    title: "Airport Transfers",
    description:
      "Convenient and comfortable transfers to and from Victoria Falls airport await you.",
    price: "$35.00",
    image: `${UPLOADS}/2026/05/a6-1024x768.png`,
    imageAlt: "Airport Transfers",
  },
  {
    title: "Sunset Cruises",
    description:
      "Experience breathtaking sunsets over the Zambezi River onboard our luxury cruises.",
    price: "$100.00",
    image: `${UPLOADS}/2026/05/vfsl-website-thumbnail-800x800-1-1024x576.webp`,
    imageAlt: "Sunset Cruises",
  },
  {
    title: "Village Cultural Tours",
    description:
      "Engage with local culture through insightful village tours and authentic experiences.",
    price: "$120.00",
    image: `${UPLOADS}/2026/05/ef-1024x768.jpg`,
    imageAlt: "Village Cultural Tours",
  },
  {
    title: "Hwange Trips",
    description:
      "Join us for a day trip to Hwange National Park, home to diverse wildlife.",
    price: "$250.00",
    image: `${UPLOADS}/2026/05/pexels-photo-36702542-1-1024x682.jpeg`,
    imageAlt:
      "A herd of elephants gathers around a watering hole inHwange National Park.",
  },
  {
    title: "Adventure Activities",
    description:
      "From bungee jumping to white-water rafting, thrill-seekers will find excitement here.",
    price: "$62.00",
    image: `${UPLOADS}/2026/05/pexels-photo-37087469-1-683x1024.jpeg`,
    imageAlt:
      "A raft carrying adventurers navigates the rapids of the Zambezi River.",
  },
  {
    title: "Chobe Day Trips",
    description:
      "Uncover the scenic beauty and wildlife of Chobe National Park with our guided tours.",
    price: "$210.00",
    image: `${UPLOADS}/2026/05/pexels-photo-13014867-1-683x1024.jpeg`,
    imageAlt:
      "A giraffe stands at the edge of the Chobe River, surrounded by lush woodland.",
  },
];

export const activityPackageDescriptions = [
  "Enjoy great discounts on family-friendly tours and activities for all ages.",
  "Romantic packages designed for unforgettable experiences with your loved one.",
  "Save on thrilling activities when you book them as a bundle with us.",
];

export const activityPackages = [
  {
    title: "Family Packages",
    image: `${UPLOADS}/2026/05/pexels-photo-8765883-1.jpeg`,
    imageAlt:
      "A zebra stands amidst lush greenery in Tanzania's Kilimanjaro region, showcasing natural beauty.",
  },
  {
    title: "Couples Retreats",
    image: `${UPLOADS}/2026/05/pexels-photo-17443324-1-683x1024.jpeg`,
    imageAlt:
      "Front-facing African elephant in Tanzania's grassy savannah. Emphasizes wildlife and nature photography.",
  },
  {
    title: "Adventure Bundles",
    image: `${UPLOADS}/2026/05/pexels-photo-13338819-1-1024x682.jpeg`,
    imageAlt:
      "A group of wildebeests walking along a dirt road in the Arusha Region under the African sun.",
  },
];

export const whyUsPoints = [
  "Personalized Tours with Local Experts",
  "Unrivaled Customer Service and Trust",
  "Exciting Activities for All Ages",
];

/**
 * Homepage introduction, restored verbatim from the original page:
 * <p>Your Safari Adventure Awaits</p> then <h2>Discover Jends Safaris</h2>,
 * two paragraphs and a "Read More" button.
 */
export const homeIntro = {
  eyebrow: "Your Safari Adventure Awaits",
  title: "Discover Jends Safaris",
  paragraphs: [
    "Jends Safaris offers expert-guided tours and experiences around Victoria Falls, ensuring guests enjoy unforgettable memories in a breathtaking natural setting.",
    "Our services include tailored transfers, cultural immersions, and thrilling adventures designed to provide a seamless and enriching travel experience for every visitor.",
  ],
  ctaLabel: "Read More",
  ctaHref: "/about/",
  image: `${UPLOADS}/2026/05/pexels-photo-13697474-1-1024x682.jpeg`,
  imageAlt:
    "A group of zebras roam the lush bushland in Makueni County, Kenya, showcasing wildlife in its natural habitat.",
};

/** Mid-page call to action, restored from the original page. */
export const adventureCta = {
  title: "Ready for Your Adventure?",
  copy: "Contact us today to start your unforgettable journey with Jends Safaris.",
  primaryLabel: "Book Your Safari Now",
  primaryHref: "/contact/",
  /* The original second label read "View Menu", a leftover from a restaurant
     template. It is replaced with a real destination on this site. */
  secondaryLabel: "View Activities",
  secondaryHref: "/activities/",
  image: `${UPLOADS}/2026/05/pexels-photo-27065204-1-1024x682.jpeg`,
  imageAlt:
    "A black rhinoceros and zebras gather at an oasis in Namibia's Okaukuejo, Oshikoto region.",
};

/** Photo gallery heading, restored from the original page. */
export const homeGallery = {
  eyebrow: "Explore Our Adventures",
  title: "Photo Gallery",
  lede: "A glimpse into the stunning beauty and adventures awaiting you at Victoria Falls.",
};

export const galleryColumns = [
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-26893479-1-1024x682.jpeg`,
      alt: "Giraffe and zebras roaming the savannah at Etosha National Park, Namibia.",
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-11895511-1-683x1024.jpeg`,
      alt: "Wildebeests and a giraffe coexist on a lush safari grassland.",
    },
  ],
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-33650554-1-576x1024.jpeg`,
      alt: "Spotted hyena quenching thirst at a waterhole in Tanzania's wild landscape.",
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-37087511-1-683x1024.jpeg`,
      alt: "A solitary warthog crossing a dirt road in Tanzania's Mikumi National Park, offering a glimpse into African wildlife.",
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-18629366-1-683x1024.jpeg`,
      alt: "A powerful African buffalo stands amidst lush greenery, highlighting its majestic presence in the wild.",
    },
  ],
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-32457066-1-683x1024.jpeg`,
      alt: "Majestic elephant crossing dirt road with safari vehicle in African landscape.",
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-28708345-1-1024x682.jpeg`,
      alt: "Vibrant scene of zebras and wildebeests in Tanzania's Ngorongoro Crater during migration",
    },
  ],
];

export const testimonials = [
  {
    quote:
      "An incredible experience, the sunset cruise was magical and the guides were fantastic!",
    name: "John Smith",
    avatar: `${UPLOADS}/2025/08/testimonial-skip-01-12.jpg`,
  },
  {
    quote:
      "Jends Safaris provided an unforgettable trip with exceptional service and breathtaking views!",
    name: "Michael Brown",
    avatar: `${UPLOADS}/2025/08/testimonial-skip-02-11.jpg`,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  href: string;
  date: string;
  excerpt?: string;
  image: string;
  imageAlt: string;
  category?: string;
  relatedImage?: string;
  relatedImageAlt?: string;
  related: string[];
  prev?: string;
  next?: string;
  body: { heading?: string; text: string }[];
};

const guideBody: BlogPost["body"] = [
  {
    heading: "Engaging Introductions: Capturing Your Audience’s Interest",
    text: "The initial impression your blog post makes is crucial, and that’s where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what to expect. A well-crafted introduction sets the tone for an immersive reading experience.",
  },
  {
    heading: "Crafting Informative and Cohesive Body Content",
    text: "Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you ensure readers stay engaged and keep reading.",
  },
  {
    heading: "Powerful Closures: Leaving a Lasting Impression",
    text: "Concluding your blog post isn’t just about wrapping things up – it’s your final opportunity to leave a strong impact on your readers. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to encourage further engagement. A compelling conclusion ensures that your readers leave with a memorable impression and are inspired to take action based on the insights you’ve shared.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "post-1",
    href: "/2026/05/10/post-1/",
    title: "Crafting Captivating Headlines: Your awesome post title goes here",
    date: "May 10, 2026",
    excerpt:
      "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction […]",
    image: `${UPLOADS}/2026/05/pexels-photo-5213956-1.jpeg`,
    imageAlt:
      "A lone giraffe stands gracefully in the natural landscape of South Africa, showcasing wildlife beauty.",
    category: "General",
    relatedImage: `${UPLOADS}/2026/05/pexels-photo-5213956-1-683x1024.jpeg`,
    relatedImageAlt:
      "A lone giraffe stands gracefully in the natural landscape of South Africa, showcasing wildlife beauty.",
    related: ["post-3", "post-2"],
    next: "post-2",
    body: guideBody,
  },
  {
    slug: "post-2",
    href: "/2026/05/10/post-2/",
    title: "The Art of Drawing Readers In: Your attractive post title goes here",
    date: "May 10, 2026",
    excerpt:
      "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction",
    image: `${UPLOADS}/2026/05/pexels-photo-36621229-1.jpeg`,
    imageAlt:
      "A giraffe feeding on acacia tree branches in the African savannah with mountains in the background.",
    category: "General",
    relatedImage: `${UPLOADS}/2026/05/pexels-photo-36621229-1-683x1024.jpeg`,
    relatedImageAlt:
      "A giraffe feeding on acacia tree branches in the African savannah with mountains in the background.",
    related: ["post-3", "post-1"],
    prev: "post-3",
    next: "post-1",
    body: guideBody,
  },
  {
    slug: "post-3",
    href: "/2026/05/10/post-3/",
    title: "Mastering the First Impression: Your intriguing post title goes here",
    date: "May 10, 2026",
    excerpt:
      "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction",
    image: `${UPLOADS}/2026/05/pexels-photo-14918317-1.jpeg`,
    imageAlt:
      "A zebra standing gracefully in the wild African savanna, showcasing its distinctive stripes.",
    category: "General",
    relatedImage: `${UPLOADS}/2026/05/pexels-photo-14918317-1-683x1024.jpeg`,
    relatedImageAlt:
      "A zebra standing gracefully in the wild African savanna, showcasing its distinctive stripes.",
    related: ["post-2", "post-1"],
    next: "post-2",
    body: guideBody,
  },
];

export type FooterLine = {
  text: string;
  href?: string;
  external?: boolean;
};

export const footerColumns: {
  heading: string;
  lines: FooterLine[];
}[] = [
  {
    heading: "About Us",
    lines: [
      {
        text: "Jends Safaris: Your gateway to unforgettable Victoria Falls adventures.",
      },
    ],
  },
  {
    heading: "Working hours",
    lines: [
      { text: "Monday – Friday: 8 AM – 5 PM" },
      { text: "Saturday – Sunday: 10 AM – 5 PM" },
    ],
  },
  {
    heading: "Contact us",
    lines: [
      { text: brand.phone, href: brand.phoneHref },
      { text: brand.email, href: brand.emailHref },
      { text: brand.address },
      {
        text: whatsapp.label,
        href: whatsapp.href,
        external: true,
      },
    ],
  },
];
