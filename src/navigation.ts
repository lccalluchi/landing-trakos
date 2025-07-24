import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Soluciones',
      links: [
        {
          text: 'Gestión de proyectos',
          href: getPermalink('/soluciones/gestion-proyectos'),
        },
        {
          text: 'Equipos de operaciones',
          href: getPermalink('/soluciones/equipos-operaciones'),
        },
        {
          text: 'Equipos de marketing',
          href: getPermalink('/soluciones/equipos-marketing'),
        },
        {
          text: 'Equipos de producto',
          href: getPermalink('/soluciones/equipos-producto'),
        },
      ],
    },
    {
      text: 'Precios',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Clientes',
      href: getPermalink('/customers'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Recursos',
      links: [
        {
          text: 'Centro de recursos',
          href: getPermalink('/recursos'),
        },
        {
          text: 'Guías y tutoriales',
          href: getPermalink('/recursos/guias'),
        },
        {
          text: 'Webinars',
          href: getPermalink('/recursos/webinars'),
        },
        {
          text: 'Comunidad',
          href: getPermalink('/comunidad'),
        },
      ],
    },
  ],
  actions: [{ text: 'Comenzar', href: getPermalink('/signup'), class: 'btn-primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/favicon-trakos.png" alt="Trakos logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
