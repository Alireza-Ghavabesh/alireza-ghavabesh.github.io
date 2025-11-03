import type { ReactElement } from 'react';

export interface Project {
  id: number;
  name: string;
  domain: string;
  imageUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  // Fix: To resolve "Cannot find namespace 'JSX'", import `ReactElement` and use it as the type for icon prop.
  icon: ReactElement;
}
