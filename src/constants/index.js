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
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  blocktena,
  leagueSportsCo,
  aws,
  awsLamda,
  postgres,
  CreatingAndHostingAFullStackSite,
  HtmlEssentialTrainingLinkedIn,
  NodejsIntermediate,
  ReactHackerRole,
  LinkedIn,
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

const certifications = [
  {
    name: "HTML & CSS Essential Training",
    issuedBy: "Linked In",
    icon: LinkedIn,
    skills: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: HtmlEssentialTrainingLinkedIn,
    link: "https://media.licdn.com/dms/image/v2/D561FAQG55sr1f-XDWg/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1682097246005?e=1733990400&v=beta&t=vOTLYZgdopjjPiXUmJeycNaeFDy8NJ5U6WuKlowweVs",
  },
  {
    name: "Creating and Hosting a Full-Stack Site",
    issuedBy: "Linked In",
    skills: "React,Tailwind Css ,Redux and Vercel ",
    icon: LinkedIn,
    skills: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "red-text-gradient",
      },

      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: CreatingAndHostingAFullStackSite,
    link: "https://media.licdn.com/dms/image/v2/C561FAQHVD6BUknwQFw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1672569005067?e=1733990400&v=beta&t=f4hmQhacFv4jsup8Yj4ahCRNFDnwHBD5-oBm6erM1bo",
  },
  {
    name: "React.js Essential Training",
    issuedBy: "Linked In",
    icon: LinkedIn,
    skills: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://media.licdn.com/dms/image/v2/C561FAQEnvUHtcwmvLw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1671870014540?e=1733990400&v=beta&t=QRhF2UfkXmehKMoUZvJ_8HIJziyxHiPKGVS1lfrsVxY",
    link: "https://media.licdn.com/dms/image/v2/C561FAQEnvUHtcwmvLw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1671870014540?e=1733990400&v=beta&t=QRhF2UfkXmehKMoUZvJ_8HIJziyxHiPKGVS1lfrsVxY",
  },
];
const achievements = [
  {
    name: "Certificate of Accomplishment Backend (Node Js)",
    issuedBy: "Hacker Rank",
    icon: hackerRank,
    skills: [
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: NodejsIntermediate,
    link: "https://www.hackerrank.com/certificates/f68f56fe6d9c",
  },
  {
    name: "Certificate of Accomplishment Frontend (React)",
    issuedBy: "Hacker Rank",
    icon: hackerRank,
    skills: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: ReactHackerRole,
    link: "https://www.hackerrank.com/certificates/04b0d42cb9c1",
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
    image: "",
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
    image: "",
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
    image: "tripguide",
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  certifications,
  achievements,
  projects,
};
