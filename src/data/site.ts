/**
 * All site content lives here so copy and imagery can be updated
 * without touching component code.
 *
 * To swap an image: drop the new file into /public/work and point
 * the entry below at it. Nothing else needs to change.
 */

/** Prefixes a public asset so the build works on GitHub Pages subpaths. */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

export const profile = {
  firstName: 'Leonardo',
  fullName: 'Leonardo Franco',
  role: 'Art Director',
  heroLine: 'an art director building international brands and campaigns that perform',
  email: 'leonardojtfranco@gmail.com',
  whatsapp: '+55 47 99634 7904',
  whatsappUrl: 'https://wa.me/5547996347904',
  behance: 'https://www.behance.net/leonardojt7169',
  instagram: 'https://instagram.com/leotfranco',
  location: 'Itapema, Brazil',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutText =
  'With over a decade in advertising, I build brands and campaigns that work across cultures. I have art directed from Brazil to Istanbul, Dubai and Cairo, combining brand strategy, hands-on design craft and AI-driven creative workflows. Available for remote work with international teams.'

/** Countries worked in, shown as a credential strip. */
export const territories = [
  { flag: '🇧🇷', country: 'Brazil', note: 'Base' },
  { flag: '🇹🇷', country: 'Türkiye', note: 'Istanbul, 1 yr' },
  { flag: '🇦🇪', country: 'UAE', note: 'Dubai, 6 mo' },
  { flag: '🇪🇬', country: 'Egypt', note: 'Cairo, 3 mo' },
  { flag: '🇺🇸', country: 'USA', note: 'Colorado' },
]

/**
 * Performance-marketing proof. The polished dashboard is the centrepiece;
 * the raw platform exports below it authenticate the numbers, with client
 * names redacted.
 */
export const results = {
  period: 'Q2 2026',
  eyebrow: 'Q2 2026 · International campaigns · Google Ads + Meta Ads',
  channels: 'Google Ads + Meta Ads',
  lead:
    'In Q2 2026, R$267.6K in international paid media returned R$4.23M in tracked conversion value, a 15.82x ROAS across 103 managed campaigns. Scope: campaign management, optimization and performance monitoring.',
  dashboard: 'results/dashboard.png',
  kpis: [
    { label: 'Return on ad spend', value: '15.82x' },
    { label: 'Conversion value', value: 'R$4.23M' },
    { label: 'Campaigns managed', value: '103' },
  ],
  proof: [
    { src: 'results/proof-google.jpg', caption: 'Google Ads account overview, Q2 2026' },
    { src: 'results/proof-campaigns.jpg', caption: '103 active campaigns, names redacted' },
    { src: 'results/proof-meta.jpg', caption: 'Meta Ads Manager, purchase objective' },
  ],
}

export const services = [
  {
    n: '01',
    name: 'Brand Identity',
    desc: 'Complete visual identities, from logo and typography to full brand systems and guideline manuals that keep a brand consistent everywhere it shows up.',
  },
  {
    n: '02',
    name: 'Art Direction',
    desc: 'Creative concept and visual direction for campaigns, leading the look, tone and execution from first idea through to final artwork.',
  },
  {
    n: '03',
    name: 'Campaign Development',
    desc: 'Integrated advertising campaigns built for retail, real estate and service brands, adapted across print, digital, out of home and point of sale.',
  },
  {
    n: '04',
    name: 'Social & Performance Creative',
    desc: 'High volume social content and paid media creative, produced on schedule for multiple concurrent accounts without losing brand consistency.',
  },
  {
    n: '05',
    name: 'AI Creative Workflows',
    desc: 'Advanced use of generative AI inside production pipelines to accelerate concepting, retouching and asset variation, plus HTML based sites and prototypes.',
  },
]

export type Project = {
  n: string
  category: string
  name: string
  blurb: string
  images: { col1a: string; col1b: string; col2: string }
  href?: string
  /** Marks work shown under client confidentiality. */
  nda?: boolean
}

/**
 * Ordered strongest first for an international reader: public sector work
 * carries the most authority, retail sits at the end.
 */
export const projects: Project[] = [
  {
    n: '01',
    category: 'Public Sector / Municipal Government',
    name: 'Dengue Kills',
    blurb:
      'Public health campaign for the City of Balneário Camboriú and its Municipal Health Department, alerting residents to the Aedes aegypti mosquito. Delivered across print, outdoor, social and a responsive campaign site carrying a live case dashboard broken down by neighbourhood.',
    images: {
      col1a: 'work/dengue-social.jpg',
      col1b: 'work/dengue-print.jpg',
      col2: 'work/dengue-web.jpg',
    },
    href: 'https://www.behance.net/gallery/195360139/DENGUE-MATA-PROTEJA-A-SUA-FAMLIA-DESTE-MAL',
  },
  {
    n: '02',
    category: 'Brand & Editorial / Client',
    name: 'ARQCIT Architecture',
    blurb:
      'Proposal and brand document system for an architecture and interiors studio, turning a commercial quote into an editorial piece. My most viewed project, with more than 15,000 views on Behance.',
    images: {
      col1a: 'work/arqcit-detail.jpg',
      col1b: 'work/arqcit-services.jpg',
      col2: 'work/arqcit-cover.jpg',
    },
    href: 'https://www.behance.net/gallery/166844531/ARQCIT-Proposta-de-Oramento-Design-Arquitetura',
  },
  {
    n: '03',
    category: 'International / Türkiye, UAE, Egypt',
    name: 'Bond and Partners',
    blurb:
      'Marketing and creative direction for a citizenship and residency by investment firm operating across Türkiye, the UAE and Egypt. Brand positioning, campaign systems and a full programmatic advertising suite for global mobility programmes, produced in English for an international audience.',
    images: {
      col1a: 'work/bond-01.jpg',
      col1b: 'work/bond-03.jpg',
      col2: 'work/bond-turkish.jpg',
    },
  },
  {
    n: '04',
    category: 'Real Estate / Client',
    name: 'N1 Empreendimentos',
    blurb:
      'Launch and sales creative for a coastal high-rise developer in Santa Catarina, covering launch teasers and campaign systems across a portfolio of residential towers, plus a continuous social media programme.',
    images: {
      col1a: 'work/n1-tower-urbanbeach.jpg',
      col1b: 'work/n1-tower-skybridge.jpg',
      col2: 'work/n1-tower-numberone.jpg',
    },
  },
  {
    n: '05',
    category: 'Retail / Client',
    name: 'Berlanda',
    blurb:
      'Seasonal retail campaigns and promotional seal systems for one of the largest furniture and electronics chains in southern Brazil.',
    images: {
      col1a: 'work/berlanda-desconto.jpg',
      col1b: 'work/berlanda-aniversario.jpg',
      col2: 'work/berlanda-smart.jpg',
    },
    href: 'https://www.behance.net/leonardojt7169',
  },
]

/**
 * Marquee rows. Row one scrolls right, row two scrolls left.
 * N1 unit sheets are deliberately excluded: they carry real listing prices,
 * which do not belong in a scrolling showcase.
 */
export const marqueeRowOne = [
  'work/dengue-print.jpg',
  'work/arqcit-cover.jpg',
  'work/bond-turkish.jpg',
  'work/bosforo-logo.jpg',
  'work/packaging-01.jpg',
  'work/dengue-web.jpg',
  'work/cloud-park.jpg',
  'work/bosforo-wall.jpg',
  'work/bond-vanuatu-ad.jpg',
  'work/oktober-2021.jpg',
  'work/stalotech.jpg',
  'work/packaging-02.jpg',
  'work/koch-construtora.jpg',
  'work/valkyrias.jpg',
  'work/gn-gold.jpg',
  'work/palladry.jpg',
]

export const marqueeRowTwo = [
  'work/dengue-outdoor.jpg',
  'work/bosforo-shirt.jpg',
  'work/bond-03.jpg',
  'work/arqcit-services.jpg',
  'work/packaging-03.jpg',
  'work/n1-prelaunch.jpg',
  'work/vico.jpg',
  'work/total-prime.jpg',
  'work/bosforo-card.jpg',
  'work/destaque-imoveis.jpg',
  'work/valle-europeu.jpg',
  'work/mog.jpg',
  'work/heloisa-flores.jpg',
  'work/academia-1940.jpg',
  'work/oktober-id.jpg',
]

/** The block that answers an agency's objections about hiring remote. */
export const availability = [
  { label: 'Engagement', value: 'Remote contract or monthly retainer' },
  { label: 'Hours', value: 'Full time or part time, flexible' },
  { label: 'Time zone', value: 'GMT-3, full overlap with US hours, mornings with UK and UAE' },
  { label: 'Languages', value: 'Portuguese native, English fluent, Spanish advanced' },
  { label: 'Setup', value: 'Own licensed Adobe CC and AI toolset' },
  { label: 'Start date', value: 'Immediate' },
]

export const experience = [
  { years: '2024 to 2026', role: 'Marketing Director', company: 'Bond and Partners', place: 'Istanbul, Dubai, Cairo, Brazil' },
  { years: '2021 to 2024', role: 'Senior Art Director', company: 'Tempo Brasil Multiagência', place: 'Balneário Camboriú, Brazil' },
  { years: '2018 to 2020', role: 'Art Director', company: 'All Publicidade', place: 'Brazil' },
  { years: '2015 to 2017', role: 'Junior Creative', company: 'All Publicidade', place: 'Brazil' },
]
