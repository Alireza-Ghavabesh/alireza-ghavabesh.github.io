import React from 'react';
import type { Project, SocialLink } from './types';
import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon, TelegramIcon } from './components/Icons';
import crmImage from './../assets/img/crm.png'
import fastitem from './../assets/img/fastitem.png'

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "وب اپلیکیشن مدیریت مشتریان ساده",
    domain: "developer-AAA.github.io",
    imageUrl: crmImage,
  },
  {
    id: 2,
    name: "وبسایت فست آیتم ولی با تکنولوژی نکست جی اس",
    domain: "myfastitem.vercel.app",
    imageUrl: fastitem,
  },
  {
    id: 3,
    name: "Mobile Banking App",
    domain: "bank.example.com",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
  },
  {
    id: 4,
    name: "Social Media Site",
    domain: "connect.example.com",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
  },
  {
    id: 5,
    name: "Booking System",
    domain: "reserve.example.com",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
  },
  {
    id: 6,
    name: "Portfolio Builder",
    domain: "my-folio.example.com",
    imageUrl: "https://picsum.photos/seed/project6/600/400",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/alireza-ghavabesh',
    icon: <GithubIcon />,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/alirezaGhavabesh',
    icon: <TelegramIcon />,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.linkedin.com/in/alireza-ghavabesh-0361751a7/',
    icon: <LinkedInIcon />,
  },
  {
    id: 'phone',
    name: 'Mobile',
    url: 'tel:+989332868434',
    icon: <PhoneIcon />,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:jacobmarcosoliver@gmail.com',
    icon: <MailIcon />,
  },
  
];
