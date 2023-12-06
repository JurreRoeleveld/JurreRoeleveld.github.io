import {
  facebook,
  instagram,
  shieldTick,
  support,
  twitter,
  wineBottle
} from '../assets/icons';

import {
  frank,
  jesse,
  gotas_de_plata,
  a,
  doggerland,
  domaine_des_chenes,
  domaine_la_montagnette,
  quattrocento,
  pakket1,
  pakket2_1,
  invitation_club_staand
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
    thumbnail: invitation_club_staand,
    bigHero: invitation_club_staand
  }
];

export const wines = {
  Gotas_de_plata: {
    name: 'Gotas de plata',
    type: 'Bubbels',
    price: 11.56,
    img: gotas_de_plata,
    info: "Jahoor, daar is ie weer:  “GOTAS!” “GOTAS!” “GOTAS!” 'Brut' geeft aan dat er nog een beetje zoet in de wijn zit. Zoet is goed! Wijn uit La Mancha; warme druifjes, rijpe wijn en zeker ook nog fris sap! Het lukt ze daar allemaal op die mega-fabriek. Maar dit is voor hen een leuk side-project. En wij plukken de vruchten van het schaalvoordeel. "
  },
  Domaine_la_montagnette: {
    name: 'Domaine la montagnette',
    type: 'stevig rood',
    price: 11.8,
    img: domaine_la_montagnette,
    year: 2021,
    info: 'Bij het Kerstdiner kan een stevige rode wijn natuurlijk niet ontbreken. Ditmaal is de keuze gevallen op “Domaine la Montagnette”. Stevige Syrah geeft textuur aan deze wijn. Iets van groene kruiden kijkt de hoek om, iets peperigs? Dan het sap van Grenache en Mourvèdre, brengen ook bessigheid met zich mee. Een bek vol tannine en toch sappig, wat fijn! Dat moet wel een natuur wijn zijn.'
  },
  Quattrocento: {
    name: 'Quattrocento Bianco',
    type: 'stevig wit',
    price: 13.92,
    img: quattrocento,
    year: 2020,
    info: 'Wijn om bij te eten. Geen vlees, maar dat doen jullie toch al niet meer? Italiaans wit met 6 dagen schilweking, gewoon hoe wit tegenwoordig in Italië gemaakt wordt. Niks moeilijk doen met licht oranje etc. Niet te koud drinken! Sowieso wordt wit te koud en rood te warm gedronken. Iets oxidatief in de neus, wat een textuur, vettig plus een beetje tannine, en dus perfect bij Italiaanse pot.'
  },
  doggerland: {
    name: 'Doggerland x Martinus "hybrid"',
    type: 'cider + saison',
    price: 10.41,
    img: doggerland,
    info: 'Barrel-aged Cider Saison Hybrid. Dat is de volledige naam van deze drank. Het brainchild van ondergetekende, gerealiseerd in samenwerking met Jurjen en Nanne van Doggerland en Martijn en Luca van Martinus. Cider is altijd lekker fris zuur maar het mag ook wel een keer wat voller en zoeter zijn. Maar als je dan zo natuurlijk mogelijk wil werken, dan hou je geen suiker over. Vandaar dat de mout van het saison bier is ingeschakeld voor dat heerlijke mondgevoel en ietsje zoetheid dat deze hybrid mooi in balans brengt.'
  },
  Domaine_des_Chenes: {
    name: 'Domaine des Chenes "les olivetes"',
    type: 'Licht oranje',
    price: 13.56,
    img: domaine_des_chenes,
    year: 2021,
    info: 'todo'
  },
  a: { name: 'a...', type: 'donker rosé', price: 15.19, img: a, info: 'todo' }
};

export const products = [
  {
    imgURL: pakket1,
    name: 'Dansende wijnpakket No.6: Dancing After Dark ',
    mailto:
      'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%201&body=Hi%2C%20Ik%20wil%20graag%20%20dansende%20pakket%201%20bestellen%21',
    price: '37,28',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
    wines: [
      wines.Domaine_la_montagnette,
      wines.Quattrocento,
      wines.Gotas_de_plata
    ]
  },
  {
    imgURL: pakket2_1,
    mailto:
      'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%202&body=Hi%2C%20Ik%20wil%20graag%20%20dansende%20pakket%202%20bestellen%21',
    name: 'Dansende wijnpakket No.7: House Music Vol.3',
    price: '39,15',
    productInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
    wines: [wines.a, wines.Domaine_des_Chenes, wines.doggerland]
  },
  {
    imgURL: invitation_club_staand,
    name: 'Dansende wijnpakket No.9: Invitation to Club Exquise',
    mailto:
      'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%203&body=Hi%2C%20Ik%20wil%20graag%20het%20dansende%20pakket%203%20bestellen%21',
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
  //   mailto:
  //     'mailto:dansendewijnen@gmail.com?subject=Bestelling%20pakket%203&body=Hi%2C%20Ik%20wil%20graag%20het%20dansende%20pakket%203%20bestellen%21',
  //   name: 'Dansende Bubbelbox',
  //   price: '76,43',
  //   productInfo:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam vel nobis officia blanditiis, possimus esse, officiis dignissimos neque voluptates est iure id. Necessitatibus et inventore doloremque quod itaque asperiores.',
  //   wines: [wines.Gotas_de_plata]
  // }
];

export const reviews = [
  {
    imgURL: jesse,
    customerName: 'Jesse Kuindersma',
    rating: 5,
    feedback:
      'Ik laat me het liefst verrassen wanneer ik een nieuwe wijn probeer, maar vaak val ik terug op oude patronen van dezelfde druiven, streken en wijnhuizen. Bij Dansende Wijnen krijg je gegarandeerd een verrassende combinatie van zorgvuldig samengestelde wijnen. Ik heb een kerstpakket besteld en elke wijn, stuk voor stuk, was een fantastische toevoeging aan onze feestdagen. Jullie hebben aan mij een terugkerende klant, bedankt Bob en Jurre!'
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
