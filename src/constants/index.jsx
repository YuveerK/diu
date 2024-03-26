import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import { AiOutlineAudit } from "react-icons/ai";
import { LuMicroscope } from "react-icons/lu";
import { MdCorporateFare } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { FaChartBar, FaUserSecret } from "react-icons/fa";
import { GiCctvCamera, GiDigitalTrace } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdGroups, MdOutlineSecurity } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <AiOutlineAudit />,
    text: "Investigative Auditing",
    description:
      "Utilizes skilled accountants for financial investigations in fraud and theft cases. Includes analysis of electronic and physical records to identify discrepancies, recover missing data, and trace origins of fraud and sabotage.",
  },
  {
    icon: <LuMicroscope />,
    text: "Forensic Auditing",
    description:
      "Employs forensic technology to tackle cases of fraud, corruption, identity falsification, and intellectual property theft. Extends services to both corporate and personal matters.",
  },
  {
    icon: <MdCorporateFare />,
    text: "Corporate Investigations & Due Diligence",
    description:
      "Provides a suite of services for business risk mitigation including financial investigations, pre-employment screening, background checks, and intellectual property theft inquiries, with a focus on cybercrime and electronic trail tracking.",
  },
  {
    icon: <FaChartBar />,
    text: "Risk Management",
    description:
      "Offers private, corporate, and criminal investigations to deliver factual insights and risk mitigation. The team, with diverse specializations, aims to uncover truth and present accurate findings for informed decision-making.",
  },
  {
    icon: <FaCheck />,
    text: "Private Background Checks",
    description:
      "Conducts comprehensive background checks, particularly for pre-marital assessments, to uncover critical personal history such as criminal records or undisclosed information.",
  },
  {
    icon: <GiDigitalTrace />,
    text: "Tracing Services",
    description:
      "Specializes in locating individuals for various reasons, including finding relatives, tracking debtors or criminals. Uses expert profilers, forensic investigators, and advanced technologies for effective tracing.",
  },
];

export const checklistItems = [
  {
    title: "Comprehensive Court Case Preparation",
    description:
      "Our involvement in court case preparations is meticulous and informed by extensive policing experience. We assist in evidence collection, analysis, and strategic presentation, offering invaluable support to legal teams for a winning edge in court proceedings.",
  },
  {
    title: "Internal Proceedings and Labor Law Expertise",
    description:
      "Equipped with thorough knowledge of South African labor law, we handle internal disciplinary matters and enquiries. Our approach ensures comprehensive evidence collection and fair proceedings, delivering unreviewable results in internal corporate disputes.",
  },
  {
    title: "Security Investigation, Risk Analysis, and Implementation",
    description:
      "Our services include thorough security investigations for businesses and individuals. We conduct exhaustive audits of physical and electronic security measures, identify vulnerabilities, and offer robust solutions to enhance overall security and mitigate future risks.",
  },
  {
    title: "CCTV, Audio Installation & Electronic Surveillance",
    description:
      "Utilizing advanced CCTV and audio recording technologies, we provide tailored surveillance solutions. Whether for private homes or business premises, our services adhere to legal standards, ensuring optimal safety and monitoring.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
