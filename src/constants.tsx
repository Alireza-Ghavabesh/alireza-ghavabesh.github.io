import React from 'react';
import type { Project, SocialLink } from './types';
import { GithubIcon, InstagramIcon, MailIcon, PhoneIcon, TelegramIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    domain: "shop.example.com",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
  },
  {
    id: 2,
    name: "SaaS Dashboard",
    domain: "dashboard.example.com",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
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
    url: 'https://github.com/example',
    icon: <GithubIcon />,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/example',
    icon: <TelegramIcon />,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/example',
    icon: <InstagramIcon />,
  },
  {
    id: 'phone',
    name: 'Mobile',
    url: 'tel:+1234567890',
    icon: <PhoneIcon />,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:developer@example.com',
    icon: <MailIcon />,
  },
];
