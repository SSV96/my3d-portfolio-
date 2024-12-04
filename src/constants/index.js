import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  nestjs,
  nextjs,
  hackerRank,
  mongodb,
  redis,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  blocktena,
  leagueSportsCo,
  aws,
  awsLamda,
  postgres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  { name: "Redis", icon: redis },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "Aws Lamda",
    icon: awsLamda,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Blocktena",
    icon: blocktena,
    iconBg: "#ffff",
    date: "March 2022 - January 2023",
    points: [
      "Designed and implemented data models and schemas for NFTs, including support for ERC-721 and ERC-1155 tokens, enabling smooth creation, trading, and auctioning of NFTs on the platform.",
      "Developed backend operations for minting NFTs, implementing the logic for minting both single and multi-token NFTs, and ensuring smooth interaction with the Ethereum blockchain using Ether.js",
      "Implemented an NFT auction system that supports bids, automatic auction closure, and transfer of ownership to the highest bidder once the auction ends.",
      "Created and scheduled a Cron job running every 30 seconds to monitor the status of ongoing auctions, automatically determining auction winners and triggering the transfer of NFTs to the highest bidder.",
      "Integrated SendGrid for automated email notifications, sending confirmation emails to bidding winners once an auction concluded, enhancing user experience and engagement.",
      "Created Games in React to add games.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "League Sports Co (Previously Zone XTZ Esports)",
    icon: leagueSportsCo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2022",
    points: [
      "Developed a Player vs Player (PvP) game mechanism, allowing users to compete directly against each other, enhancing user engagement and the competitive aspect of the game.",
      "Implemented a robust IP Fingerprint Anti-Cheat Mechanism to detect and prevent cheating by uniquely identifying and blocking fraudulent players based on their IP and browser fingerprints, ensuring fair gameplay.",
      "Worked closely with the SRE team to ensure the application’s high availability and fault tolerance, enabling smooth operation for mission-critical game features under heavy traffic conditions.",
      "Integrated Kafka.js for event streaming, improving real-time communication between distributed services and optimizing the overall system performance for faster responses and reduced latency in gameplay.",
      " Developed and optimized the Referral, Points Streak, and Rewards modules for another Telegram mini app, focusing on improving user engagement and performance",
      "Integrated Mixpanel for advanced user tracking and analytics to optimize in-app features, enabling data-driven decisions",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
