import { ClipboardList, Dumbbell, Apple, Video, LineChart, Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Fitness Enthusiasts",
    image: user1,
    text: "I’m thrilled with my fitness journey! The personalized coaching and workout plans have made a huge difference in my health and performance. The team’s support has been incredible!",
  },
  {
    user: "Jane Smith",
    company: "Wellness Warriors",
    image: user2,
    text: "The customized workout and nutrition plans transformed my approach to fitness. I feel more energized and healthier than ever before. Highly recommend the personalized coaching!",
  },
  {
    user: "David Johnson",
    company: "Active Lifestyle",
    image: user3,
    text: "The expertise and dedication of the coaches are unmatched. Their tailored approach to fitness helped me reach my goals faster than I imagined. I’m grateful for their guidance!",
  },
  {
    user: "Ronee Brown",
    company: "Peak Performance",
    image: user4,
    text: "My experience with the personalized fitness coaching has been phenomenal. The individualized plans and professional support have significantly improved my overall fitness and well-being.",
  },
  {
    user: "Michael Wilson",
    company: "Health Innovators",
    image: user5,
    text: "The commitment to my fitness goals from the team has been outstanding. The personalized approach and expert advice have made a remarkable impact on my progress and results.",
  },
  {
    user: "Emily Davis",
    company: "Total Wellness",
    image: user6,
    text: "I couldn’t be happier with the personalized coaching I received. The attention to detail and tailored fitness strategies have greatly enhanced my fitness journey and results.",
  },
];


export const features = [
  {
    icon: <ClipboardList />,
    text: "Basic Fitness Assessment",
    description:
      "Kickstart your fitness journey with our comprehensive online fitness assessment. This free or low-cost evaluation helps us understand your current fitness level, pinpoint areas for improvement, and set realistic goals tailored just for you.",
  },
  {
    icon: <Dumbbell />,
    text: "Customized Workout Plans",
    description:
      "Achieve your fitness goals with a workout plan that's designed specifically for you. Whether you want to lose weight, build muscle, or increase endurance, our experts will craft a personalized routine that fits your needs.",
  },
  {
    icon: <Apple />,
    text: "Nutrition Counseling",
    description:
      "Fuel your body the right way with personalized meal plans and dietary advice. Our expert nutritionists will guide you towards healthy eating habits that complement your workout routine.",
  },
  {
    icon: <Video />,
    text: "1-on-1 Virtual Coaching",
    description:
      "Experience the benefits of personalized guidance with our 1-on-1 virtual coaching sessions. Connect with our certified fitness coaches in real-time, and get tailored advice, motivation, and support.",
  },
  {
    icon: <LineChart />,
    text: "Progress Tracking Tools",
    description:
      "Stay on top of your fitness journey with our intuitive progress tracking tools. Log your workouts, track your weight, and monitor your progress with ease.",
  },
  {
    icon: <Users />,
    text: "Group Fitness Classes",
    description:
      "Join our vibrant community in virtual group classes tailored to different fitness levels. We offer a variety of classes to keep you engaged and challenged.",
  },
];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₹0",
    features: [
      "Basic Fitness Assessment",
      "Customized Workout Plans",
      " ",
       " ",
      " ",
    ],
  },
  {
    title: "Pro",
    price: "₹1000",
    features: [
      "Fitness Test & Workout Plans",
      "Nutrition Counseling",
      "1-on-1 Virtual Coaching",
      " ",
      " ",
      
    ],
  },
  {
    title: "Enterprise",
    price: "₹2000",
    features: [
      "Fitness Test & Workout Plans",
      "Nutrition Counseling & Virtual Coaching",
      "Progress Tracking Tools ",
    ],
  },
];

export const resourcesLinks = [
  { href: "#getting-started", text: "Getting Started" },
  { href: "#workout-plans", text: "Workout Plans" },
  { href: "#nutrition-guides", text: "Nutrition Guides" },
  { href: "#fitness-tips", text: "Fitness Tips" },
  { href: "#faqs", text: "FAQs" },
];

export const platformLinks = [
  { href: "#services", text: "Our Services" },
  { href: "#equipment", text: "Supported Equipment" },
  { href: "#requirements", text: "System Requirements" },
  { href: "#app", text: "Mobile App" },
  { href: "#updates", text: "Updates & News" },
];

export const communityLinks = [
  { href: "#events", text: "Fitness Events" },
  { href: "#meetups", text: "Local Meetups" },
  { href: "#conferences", text: "Fitness Conferences" },
  { href: "#challenges", text: "Health Challenges" },
  { href: "#careers", text: "Careers" },
];
