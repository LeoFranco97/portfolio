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
  linkedin: 'https://www.linkedin.com/in/leonardo-franco-b7429b140/',
  behance: 'https://www.behance.net/leonardojt7169',
  instagram: 'https://instagram.com/leotfranco',
  location: 'Itapema, Brazil',
}

export const nav = [
  { label: 'Results', href: '#results' },
  { label: 'Branding', href: '#branding' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutText =
  'With over a decade in advertising, I build brands and campaigns that work across cultures. I have art directed from Brazil to Istanbul, Dubai and Cairo, combining brand strategy, hands-on design craft and AI-driven creative workflows. Available for remote work with international teams.'

/** Countries worked in, shown as a credential strip. */
export const territories = [
  { code: 'BR', country: 'Brazil', note: 'Base' },
  { code: 'TR', country: 'Türkiye', note: 'Istanbul, 1 yr' },
  { code: 'AE', country: 'UAE', note: 'Dubai, 6 mo' },
  { code: 'EG', country: 'Egypt', note: 'Cairo, 3 mo' },
  { code: 'US', country: 'USA', note: 'Colorado' },
] as const

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

/**
 * Brand identity showcase. Each brand is a case: a hero identity visual plus
 * two applications. `accent` is the brand's own colour, used for the card's
 * hover glow and palette chip.
 */
export type Brand = {
  name: string
  sector: string
  accent: string
  hero: string
  apps?: [string, string]
  /** Full presentation shown when the card is opened. */
  gallery: string[]
  /** Smaller, lower-emphasis card (logo + name only). */
  compact?: boolean
}

/** Page-image paths for a multi-page presentation under a folder. */
const pagesIn = (dir: string, slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${dir}/${slug}-p${String(i).padStart(2, '0')}.jpg`)
const brandPages = (slug: string, n: number) => pagesIn('work/brands', slug, n)

export const brands: Brand[] = [
  {
    name: 'Sulriso',
    sector: 'Business management',
    accent: '#2323E6',
    hero: 'work/brands/sulriso-hero.jpg',
    apps: ['work/brands/sulriso-cards.jpg', 'work/brands/sulriso-office.jpg'],
    gallery: ['work/brands/sulriso-full.jpg'],
  },
  {
    name: 'Stalotech',
    sector: 'Tech services',
    accent: '#F7A500',
    hero: 'work/brands/stalotech-hero.jpg',
    apps: ['work/brands/stalotech-flyer.jpg', 'work/brands/stalotech-cards.jpg'],
    gallery: ['work/brands/stalotech-full.jpg'],
  },
  {
    name: 'Cloud Park',
    sector: 'Smart parking',
    accent: '#2FA3E6',
    hero: 'work/brands/cloudpark-hero.jpg',
    apps: ['work/brands/cloudpark-colors.jpg', 'work/brands/cloudpark-apps.jpg'],
    gallery: brandPages('cloudpark', 20),
    compact: true,
  },
  {
    name: 'L17 Capital',
    sector: 'Real estate development',
    accent: '#1C6B5A',
    hero: 'work/brands/l17-hero.jpg',
    apps: ['work/brands/l17-app1.jpg', 'work/brands/l17-app2.jpg'],
    gallery: ['work/brands/l17-full.jpg'],
  },
  {
    name: 'Koch Engenharia',
    sector: 'Construction & development',
    accent: '#9A2436',
    hero: 'work/brands/koch-hero.jpg',
    apps: ['work/brands/koch-cards.jpg', 'work/brands/koch-fabric.jpg'],
    gallery: ['work/brands/koch-full.jpg'],
  },
  {
    name: 'GR Imobiliários',
    sector: 'Real estate',
    accent: '#C9A227',
    hero: 'work/brands/gr-hero.jpg',
    apps: ['work/brands/gr-app1.jpg', 'work/brands/gr-app2.jpg'],
    gallery: ['work/brands/gr-full.jpg'],
  },
  {
    name: 'Rafes',
    sector: 'Marketing agency',
    accent: '#1FA8E4',
    hero: 'work/brands/rafes-hero.jpg',
    apps: ['work/brands/rafes-app1.jpg', 'work/brands/rafes-app2.jpg'],
    gallery: ['work/brands/rafes-full.jpg'],
  },
  {
    name: 'Vico',
    sector: 'Rebranding',
    accent: '#6B7280',
    hero: 'work/brands/vico-hero.jpg',
    gallery: ['work/brands/vico-full.jpg'],
    compact: true,
  },
  {
    name: 'Total Prime',
    sector: 'Dental care',
    accent: '#7C3AED',
    hero: 'work/brands/prime-hero.jpg',
    gallery: ['work/brands/prime-full.jpg'],
    compact: true,
  },
  {
    name: 'RafaIN',
    sector: 'Personal brand',
    accent: '#3B39E0',
    hero: 'work/brands/rafain-hero.jpg',
    gallery: ['work/brands/rafain-full.jpg'],
    compact: true,
  },
]

export type Presentation = {
  name: string
  kind: string
  cover: string
  gallery: string[]
  accent: string
  /** Anchor the cover image to its top edge instead of centring it. */
  coverTop?: boolean
}

/** Full decks and proposals: the whole document opens on click. */
export const presentations: Presentation[] = [
  {
    name: 'ARQCIT',
    kind: 'Architecture · budget proposal',
    cover: 'work/arqcit-cover.jpg',
    gallery: ['work/arqcit-full.jpg'],
    accent: '#5B7B6A',
    coverTop: true,
  },
  {
    name: 'N1 Empreendimentos',
    kind: 'Real estate · company deck',
    cover: 'work/n1deck-p00.jpg',
    gallery: pagesIn('work', 'n1deck', 20),
    accent: '#B79A5B',
  },
  {
    name: 'Steelers',
    kind: 'Steel construction · proposal',
    cover: 'work/brands/steelers-hero.jpg',
    gallery: brandPages('steelers', 8),
    accent: '#E8621A',
  },
  {
    name: 'Green Decor',
    kind: 'Furniture & decor · portfolio',
    cover: 'work/brands/greendecor-hero.jpg',
    gallery: brandPages('greendecor', 25),
    accent: '#1F6B43',
  },
]

export type Project = {
  n: string
  category: string
  name: string
  blurb: string
  images: { col1a: string; col1b: string; col2: string }
  /** Images shown in the in-site gallery when the card is opened. */
  gallery: string[]
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
    gallery: [
      'work/dengue-web.jpg',
      'work/dengue-print.jpg',
      'work/dengue-outdoor.jpg',
      'work/dengue-social.jpg',
    ],
  },
  {
    n: '02',
    category: 'International / Confidential',
    name: 'Bond and Partners',
    blurb:
      'Two years as creative and marketing lead for an international citizenship and residency by investment firm operating across Türkiye, the UAE and Egypt. Under a compliance and confidentiality agreement, the work cannot be disclosed and is shown redacted.',
    images: {
      col1a: 'work/bond-01.jpg',
      col1b: 'work/bond-03.jpg',
      col2: 'work/bond-turkish.jpg',
    },
    gallery: [
      'work/bond-turkish.jpg',
      'work/bond-vanuatu-ad.jpg',
      'work/bond-01.jpg',
      'work/bond-03.jpg',
      'work/bond-vanuatu.jpg',
      'work/bond-02.jpg',
    ],
    nda: true,
  },
  {
    n: '03',
    category: 'Retail / Client',
    name: 'Berlanda',
    blurb:
      'Seasonal retail campaigns and promotional seal systems for one of the largest furniture and electronics chains in southern Brazil.',
    images: {
      col1a: 'work/berlanda-desconto.jpg',
      col1b: 'work/berlanda-aniversario.jpg',
      col2: 'work/berlanda-smart.jpg',
    },
    gallery: [
      'work/berlanda-smart.jpg',
      'work/berlanda-desconto.jpg',
      'work/berlanda-aniversario.jpg',
      'work/selo-kv-varejo.jpg',
    ],
  },
]

/**
 * Marquee rows. Row one scrolls right, row two scrolls left.
 * N1 unit sheets are deliberately excluded: they carry real listing prices,
 * which do not belong in a scrolling showcase.
 */
export const marqueeRowOne = [
  'work/dengue-print.jpg',
  'work/brands/l17-app1.jpg',
  'work/brands/koch-cards.jpg',
  'work/bosforo-logo.jpg',
  'work/brands/steelers-hero.jpg',
  'work/dengue-web.jpg',
  'work/cloud-park.jpg',
  'work/bosforo-wall.jpg',
  'work/brands/sulriso-cards.jpg',
  'work/oktober-2021.jpg',
  'work/stalotech.jpg',
  'work/brands/greendecor-app1.jpg',
  'work/koch-construtora.jpg',
  'work/valkyrias.jpg',
  'work/gn-gold.jpg',
  'work/palladry.jpg',
]

export const marqueeRowTwo = [
  'work/dengue-outdoor.jpg',
  'work/brands/stalotech-cards.jpg',
  'work/brands/koch-fabric.jpg',
  'work/brands/l17-app2.jpg',
  'work/brands/sulriso-office.jpg',
  'work/brands/cloudpark-apps.jpg',
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
