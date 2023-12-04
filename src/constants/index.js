import {
  facebook,
  instagram,
  shieldTick,
  support,
  twitter,
  wineBottle
} from '../assets/icons';

import {
  bottle1,
  bottle2,
  bottle3,
  frank,
  jesper,
  box1,
  box2,
  box3
} from '../assets/images';

export const navLinks = [
  { href: '#products', label: 'Producten' },
  { href: '#de-wijnen', label: 'De wijnen' },
  { href: '#natuurwijn', label: 'Natuurwijn' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact-us', label: 'Contact' }
];

export const heros = [
  {
    thumbnail: box1,
    bigHero: box1
  },
  {
    thumbnail: box2,
    bigHero: box2
  },
  {
    thumbnail: box3,
    bigHero: box3
  }
];

export const products = [
  {
    imgURL: bottle1,
    name: 'box1',
    price: '$114.00',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.'
  },
  {
    imgURL: bottle2,
    name: 'box2',
    price: '$114.00',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.'
  },
  {
    imgURL: bottle3,
    name: 'box3',
    price: '$114.00',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.'
  }
];

export const reviews = [
  {
    imgURL: jesper,
    customerName: 'Jesper Bosma',
    rating: 5,
    feedback: 'Wat een exquise boxen, kan het zeer aanraden!'
  },
  {
    imgURL: frank,
    customerName: 'Frank Bokdam',
    rating: 5,
    feedback: 'Het natuurwijnpakket van Bobs Dansende Wijnen was de gangmaker tijdens onze oudjaarsavond. Iedereen vond weer een andere wijn de lekkerste en doordat bij elke wijn een korte tekst zit met uitleg over de smaak, waren we wat bewuster aan het proeven en was elke nieuwe fles een conversation starter. Natuurlijk zat er ook een flesje bubbels bij om het nieuwe jaar mee in te luiden.'
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
    label: 'Betaling met betaalverzoek',
    subtext:
      'Zodra je bestelling ontvangen is krijg je een mail met daarin bevestiging en een betaalverzoek.'
  },
  {
    imgURL: support,
    label: 'We helpen graag!',
    subtext:
      'Als je twijfelt over welke box het beste pas bij je diner denken we graag mee.'
  }
];

export const footerLinks = [
  {
    title: 'Producten',
    links: [
      { name: 'Box 1', href: '#products' },
      { name: 'Box 2', href: '#products' },
      { name: 'Box 3', href: '#products' }
    ]
  },
  {
    title: 'Navigatie',
    links: [
      { name: 'Producten', href: '#products' },
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
