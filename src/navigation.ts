import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Empresa',
      href: getPermalink('/company'),
    },
    {
      text: 'Producto',
      href: getPermalink('/producto'),
    },
    {
      text: 'Precio',
      href: getPermalink('/precio'),
    },
  ],
  actions: [
    { text: 'Descargar Trakos', href: getPermalink('/descarga'), class: 'btn-primary', icon: 'tabler:download' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Oficina Estratégica',
      links: [
        { text: 'Trakos LLC', href: '#' },
        { text: '701 Brickell Avenue, Suite 1500', href: '#' },
        { text: 'Miami, FL 33131 – Estados Unidos', href: '#' },
        { text: 'info@trakos.net', href: 'mailto:info@trakos.net' },
        { text: '+1 305 555 5555', href: 'tel:+13055555555' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos de Servicio', href: '#terms' },
    { text: 'Política de Privacidad', href: '#privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'WeChat', icon: 'tabler:brand-wechat', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/13055555555' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: '#' },
  ],
  footNote: `
    <div class="flex flex-col md:flex-row items-start justify-between w-full">
      <div class="mb-4 md:mb-0">
        <div class="text-sm text-muted">© 2024 trakos.net</div>
      </div>
      <div class="text-sm">
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <img class="w-5 h-5 bg-cover mr-2 rounded-sm" src="/favicon-trakos.png" alt="Trakos logo" loading="lazy">
            <span class="text-muted">Trakos LLC - Miami, FL</span>
          </div>
        </div>
      </div>
    </div>
  `,
};
