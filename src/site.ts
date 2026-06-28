// Central site configuration. Edit profile details here.
export const site = {
  name: "Niko's Notes",
  author: 'Niko',
  email: 'nikoloz.butikashvili9@gmail.com',
  tagline: 'Thoughts on finance, technology, energy, and the future.',
  intro:
    'Exploring the ideas shaping our world and building a better future through knowledge, discipline, and curiosity.',
  // Profile photo (square) used for the sidebar avatar.
  avatar: '/me.jpg',
  // About-page portrait.
  portrait: '/me.jpg',
  // Short story shown in the "About me" section — one entry per paragraph.
  story: [
    "Hi, I'm Niko. I write about finance, economics, technology, energy, sports, and the books and ideas that tie them together.",
    'This is a placeholder — replace it with a few sentences about who you are, what you care about, and what you want readers to take away. Keep it short and personal.',
    'When I’m not writing, I’m building projects that put these ideas into practice.',
  ],
  socials: {
    github: '',
    x: '',
    linkedin: '',
  },
};

export type NavItem = {
  label: string;
  href: string;
  icon: string; // key into the Icon component
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/about', icon: 'user' },
];
