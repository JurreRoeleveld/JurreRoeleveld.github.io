import {
  facebook,
  instagram,
  shieldTick,
  support,
  twitter,
  wineBottle
} from '../assets/icons';

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  bottle1,
  bottle2,
  bottle3,
  bottle10,
  bottle20,
  bottle30,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Producten' },
  { href: '#de-wijnen', label: 'De wijnen' },
  { href: '#natuurwijn', label: 'Natuurwijn' },
  { href: '#contact-us', label: 'Contact Us' }
];

export const shoes = [
  {
    thumbnail: bottle10,
    bigShoe: bottle10
  },
  {
    thumbnail: bottle20,
    bigShoe: bottle20
  },
  {
    thumbnail: bottle30,
    bigShoe: bottle30
  }
];

export const products = [
  {
    imgURL: bottle1,
    name: 'box1',
    price: '$114.00'
  },
  {
    imgURL: bottle2,
    name: 'box2',
    price: '$114.00'
  },
  {
    imgURL: bottle3,
    name: 'box3',
    price: '$114.00'
  }
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];

export const services = [
  {
    imgURL: wineBottle,
    label: 'Natuurwijn gegarandeerd',
    subtext: 'Alle wijnen in de boxen zijn gegarandeerd natuurwijnen.'
  },
  {
    imgURL: shieldTick,
    label: 'Veilige betaling',
    subtext:
      'Zodra je bestelling ontvangen is ontvang je een mail met daarin bevestiging en een betaalverzoek.'
  },
  {
    imgURL: support,
    label: 'Helpen graag!',
    subtext:
      'Als je twijfelt over welke box het beste pas bij je gerecht denken we graag mee.'
  }
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Box 1', href: '#products' },
      { name: 'Box 2', href: '#products' },
      { name: 'Box 3', href: '#products' }
    ]
  },
  {
    title: 'Help',
    links: [
      { name: 'Over ons', href: '#products' },
      { name: 'De wijnen', href: '#de-wijnen' },
      { name: 'Natuurwijnen', href: '#natuurwijn' }
    ]
  },
  {
    title: 'Te bereiken op',
    links: [
      {
        name: 'dansendewijnen@gmail.com',
        link: 'mailto:dansendewijnen@gmail.com'
      }
    ]
  }
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' }
];
