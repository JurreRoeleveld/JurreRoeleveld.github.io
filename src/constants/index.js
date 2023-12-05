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
  box3,
  gotas_de_plata,
  a,
  doggerland,
  domaine_des_chenes,
  domaine_la_montagnette,
  gotas_de_plata_pakket,
  quattrocento,
  pakket1,
  pakket2_1
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
    thumbnail: pakket1,
    bigHero: pakket1
  },
  {
    thumbnail: pakket2_1,
    bigHero: pakket2_1
  },
  {
    thumbnail: gotas_de_plata_pakket,
    bigHero: gotas_de_plata_pakket
  }
];

export const wines = {
  Gotas_de_plata: {
    name: 'Gotas de plata',
    type: 'Bubbels',
    price: 11.56,
    img: gotas_de_plata
  },
  Domaine_la_montagnette: {
    name: 'domaine la montagnette',
    type: 'stevig rood',
    price: 11.8,
    img: domaine_la_montagnette
  },
  Quattrocento: {
    name: 'Quattrocento',
    type: 'stevig wit',
    price: 13.92,
    img: quattrocento
  },
  il_baffone: { name: 'il baffone', type: 'oranje bubbel', price: 14.57 },
  Domaine_des_Chenes: {
    name: 'Doggerland x Martinus',
    type: 'cider + saison',
    price: 10.41,
    img: doggerland
  },
  doggerland: {
    name: 'Domaine des Chenes "hybrid"',
    type: 'Licht oranje',
    price: 13.56,
    img: domaine_des_chenes
  },
  a: { name: 'a...', type: 'donker rosé', price: 15.19, img: a }
};

export const products = [
  {
    imgURL: pakket1,
    name: 'Dansende wijnpakket No.6: Dancing After Dark ',
    mailto: 'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%201&body=Hi%2C%20Ik%20wil%20graag%20%20dansende%20pakket%201%20bestellen%21',
    price: '37,28',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
    wines: [
      wines.Gotas_de_plata,
      wines.Domaine_la_montagnette,
      wines.Quattrocento
    ]
  },
  {
    imgURL: pakket2_1,
    mailto: 'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%202&body=Hi%2C%20Ik%20wil%20graag%20%20dansende%20pakket%202%20bestellen%21',
    name: 'Dansende wijnpakket No.7: House Music Vol.3',
    price: '39,15',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
    wines: [wines.doggerland, wines.Domaine_des_Chenes, wines.a]
  },
  {
    imgURL: bottle3,
    name: 'Dansende wijnpakket No.9: Invitation to Club Exquise',
    mailto: 'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%203&body=Hi%2C%20Ik%20wil%20graag%20het%20dansende%20pakket%203%20bestellen%21',
    price: '76,43',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
    wines: [
      wines.Gotas_de_plata,
      wines.Domaine_la_montagnette,
      wines.Quattrocento,
      wines.il_baffone,
      wines.Domaine_des_Chenes,
      wines.a
    ]
  }
  // {
  //   imgURL: gotas_de_plata_pakket,
  //   name: 'Dansende Bubbelbox',
  //   price: '76,43',
  //   productInfo:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
  //   wines: [wines.Gotas_de_plata]
  // }
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
    feedback:
      'Het natuurwijnpakket van Dansende Wijnen was de gangmaker tijdens onze oudjaarsavond. Iedereen vond weer een andere wijn de lekkerste en doordat bij elke wijn een korte tekst zit met uitleg over de smaak, waren we wat bewuster aan het proeven en was elke nieuwe fles een conversation starter. Natuurlijk zat er ook een flesje bubbels bij om het nieuwe jaar mee in te luiden.'
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
      { name: 'Pakket 1', href: '#products' },
      { name: 'Pakket 2', href: '#products' },
      { name: 'Pakket 3', href: '#products' }
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
