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
  logoAlt: "jends safaris logo png",
  phone: "+263 77 588 1441",
  phoneHref: "tel:+263775881441",
  email: "reservations@jendssafaris.co.zw",
  address: "6559 Mkhosana, Victoria Falls, Zimbabwe",
  copyright: "Copyright © 2026 Jends Safaris",
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
    imageAlt: "a2",
  },
  {
    title: "Cultural Tours",
    description:
      "Engage with local culture through insightful village tours and authentic experiences.",
    price: "$120.00",
    image: `${UPLOADS}/2026/05/ef-1024x768.jpg`,
    imageAlt: "ef",
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
    imageAlt: "a6",
  },
  {
    title: "Sunset Cruises",
    description:
      "Experience breathtaking sunsets over the Zambezi River onboard our luxury cruises.",
    price: "$100.00",
    image: `${UPLOADS}/2026/05/vfsl-website-thumbnail-800x800-1-1024x576.webp`,
    imageAlt: "vfsl website thumbnail 800x800 1",
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
    imageAlt: "a2",
  },
  {
    title: "Airport Transfers",
    description:
      "Convenient and comfortable transfers to and from Victoria Falls airport await you.",
    price: "$35.00",
    image: `${UPLOADS}/2026/05/a6-1024x768.png`,
    imageAlt: "a6",
  },
  {
    title: "Sunset Cruises",
    description:
      "Experience breathtaking sunsets over the Zambezi River onboard our luxury cruises.",
    price: "$100.00",
    image: `${UPLOADS}/2026/05/vfsl-website-thumbnail-800x800-1-1024x576.webp`,
    imageAlt: "vfsl website thumbnail 800x800 1",
  },
  {
    title: "Village Cultural Tours",
    description:
      "Engage with local culture through insightful village tours and authentic experiences.",
    price: "$120.00",
    image: `${UPLOADS}/2026/05/ef-1024x768.jpg`,
    imageAlt: "ef",
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

export const galleryColumns = [
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-26893479-1-1024x682.jpeg`,
      alt: "Giraffe and zebras roaming the savannah at Etosha National Park, Namibia.",
      height: 416,
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-11895511-1-683x1024.jpeg`,
      alt: "Wildebeests and a giraffe coexist on a lush safari grassland.",
      height: 416,
    },
  ],
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-33650554-1-576x1024.jpeg`,
      alt: "Spotted hyena quenching thirst at a waterhole in Tanzania's wild landscape.",
      height: 234,
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-37087511-1-683x1024.jpeg`,
      alt: "A solitary warthog crossing a dirt road in Tanzania's Mikumi National Park, offering a glimpse into African wildlife.",
      height: 234,
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-18629366-1-683x1024.jpeg`,
      alt: "A powerful African buffalo stands amidst lush greenery, highlighting its majestic presence in the wild.",
      height: 416,
    },
  ],
  [
    {
      src: `${UPLOADS}/2026/05/pexels-photo-32457066-1-683x1024.jpeg`,
      alt: "Majestic elephant crossing dirt road with safari vehicle in African landscape.",
      height: 416,
    },
    {
      src: `${UPLOADS}/2026/05/pexels-photo-28708345-1-1024x682.jpeg`,
      alt: "Vibrant scene of zebras and wildebeests in Tanzania's Ngorongoro Crater during migration",
      height: 416,
    },
  ],
];

export const testimonials = [
  {
    quote:
      "An incredible experience, the sunset cruise was magical and the guides were fantastic!",
    name: "John Smith",
    nameWidth: 93.58,
    avatar: `${UPLOADS}/2025/08/testimonial-skip-01-12.jpg`,
  },
  {
    quote:
      "Jends Safaris provided an unforgettable trip with exceptional service and breathtaking views!",
    name: "Michael Brown",
    nameWidth: 116.11,
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
  author: string;
  category?: string;
  relatedImageHeight: number;
  relatedImage?: string;
  related: string[];
  prev?: string;
  next?: string;
  body: { heading?: string; text: string }[];
  comments?: {
    author: string;
    avatar: string;
    date: string;
    body: string;
    bodyLink?: { text: string; href: string };
  }[];
};

const postAuthor = "developer01";
const postAuthorAvatar =
  "https://secure.gravatar.com/avatar/49b1f9775070ad492968ccd518e7ef7c5ea4a603ef5839873711082a0206a026?s=40&d=mm&r=g";

const guideBody: BlogPost["body"] = [
  {
    heading: "Engaging Introductions: Capturing Your Audience’s Interest",
    text: "The initial impression your blog post makes is crucial, and that’s where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.",
  },
  {
    heading: "Crafting Informative and Cohesive Body Content",
    text: "Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.",
  },
  {
    heading: "Powerful Closures: Leaving a Lasting Impression",
    text: "Concluding your blog post isn’t just about wrapping things up – it’s your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers’ minds, inspiring them to explore further or apply what they’ve learned.",
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
    author: postAuthor,
    category: "General",
    relatedImageHeight: 449.77,
    relatedImage: `${UPLOADS}/2026/05/pexels-photo-5213956-1-683x1024.jpeg`,
    related: ["post-3", "post-2"],
    prev: "post-2",
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
    author: postAuthor,
    category: "General",
    relatedImageHeight: 399.42,
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
    author: postAuthor,
    category: "General",
    relatedImageHeight: 375,
    related: ["post-2", "post-1"],
    prev: "hello-world",
    next: "post-2",
    body: guideBody,
  },
  {
    slug: "hello-world",
    href: "/2026/05/08/hello-world/",
    title: "Hello world!",
    date: "May 8, 2026",
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    image: `${UPLOADS}/2026/05/pexels-photo-37087484-1.jpeg`,
    imageAlt:
      "Impressive impala with large horns standing amidst lush grasslands in Mikumi National Park, Tanzania.",
    author: postAuthor,
    relatedImageHeight: 375,
    related: [],
    next: "post-3",
    body: [
      {
        text: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
      },
    ],
    comments: [
      {
        author: "A WordPress Commenter",
        avatar:
          "https://secure.gravatar.com/avatar/8e1606e6fba450a9362af43874c1b2dfad34c782e33d0a51e1b46c18a2a567dd?s=50&d=mm&r=g",
        date: "May 8, 2026 at 10:14 am",
        body: "Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from Gravatar.",
        bodyLink: { text: "Gravatar", href: "https://gravatar.com/" },
      },
    ],
  },
];

export const blogAuthorAvatar = postAuthorAvatar;

export const footerColumns: {
  heading: string;
  uppercase?: boolean;
  width: number;
  lines: string[];
}[] = [
  {
    heading: "About Us",
    width: 369.91,
    lines: ["Jends Safaris: Your gateway to unforgettable Victoria Falls adventures."],
  },
  {
    heading: "Working hours",
    uppercase: true,
    width: 369.89,
    lines: ["Monday – Friday: 8 AM – 5 PM", "Saturday – Sunday: 10 AM – 5 PM"],
  },
  {
    heading: "Contact us",
    uppercase: true,
    width: 370.2,
    lines: [
      "+263 77 588 1441",
      "reservations@jendssafaris.co.zw",
      "6559 Mkhosana, Victoria Falls, Zimbabwe",
    ],
  },
];
