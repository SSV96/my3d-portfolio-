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
  dotnet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  { id: "tech", title: "Skills" },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer (AWS)",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "DotNet Core WebApi",
    icon: dotnet,
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
    title: "Software Engineer",
    company_name: "Blocktena",
    icon: blocktena,
    iconBg: "#ffff",
    date: "March 2022 - January 2023",
    points: [
      "Designed and developed interactive UI components for NFT platforms using React.js and Next.js, ensuring a seamless user experience for minting, trading, and auctioning NFTs.",
      "Integrated Ether.js to enable real-time interactions with Ethereum smart contracts, supporting ERC-721 and ERC-1155 token standards for NFT management.",
      "Built an intuitive NFT auction system with features like live bidding, automatic auction closure, and real-time status updates, enhancing user engagement",
      "Developed real-time auction monitoring, displaying countdown timers, bid history, and dynamic UI updates based on blockchain events.",
      "Created Games in React to add games.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "League Sports Co (Subsidiary  : XTZ Esports)",
    icon: leagueSportsCo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designed and developed referral, points streak, and rewards modules for a Telegram mini-app, boosting user retention and engagement.",
      "Integrated Mixpanel for advanced user analytics, enabling data-driven decisions to enhance user experience and optimize in-app features.",
      "Developed an interactive Player vs Player (PvP) game UI using React.js, enhancing user engagement with real-time competitive gameplay.",
      "Optimized UI performance for high-traffic gaming applications, collaborating closely with SRE teams to maintain high availability and fault tolerance.",
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
  // {
  //   name: "React.js Essential Training",
  //   issuedBy: "Linked In",
  //   icon: LinkedIn,
  //   skills: [
  //     {
  //       name: "React Js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Express",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image:
  //     "https://media.licdn.com/dms/image/v2/C561FAQEnvUHtcwmvLw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1671870014540?e=1733990400&v=beta&t=QRhF2UfkXmehKMoUZvJ_8HIJziyxHiPKGVS1lfrsVxY",
  //   link: "https://media.licdn.com/dms/image/v2/C561FAQEnvUHtcwmvLw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1671870014540?e=1733990400&v=beta&t=QRhF2UfkXmehKMoUZvJ_8HIJziyxHiPKGVS1lfrsVxY",
  // },
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
