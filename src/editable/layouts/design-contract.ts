import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#10120f',
  '--slot4-page-text': '#f7f8ef',
  '--slot4-panel-bg': '#151812',
  '--slot4-surface-bg': '#191d16',
  '--slot4-muted-text': '#b7bea7',
  '--slot4-soft-muted-text': '#899279',
  '--slot4-accent': '#a8cf2a',
  '--slot4-accent-fill': '#a8cf2a',
  '--slot4-accent-soft': '#263414',
  '--slot4-dark-bg': '#0b0d0a',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#22271c',
  '--slot4-cream': '#10120f',
  '--slot4-warm': '#12150f',
  '--slot4-lavender': '#18210f',
  '--slot4-gray': '#11140f',
  '--slot4-body-gradient': 'linear-gradient(180deg, #151a10 0%, #10120f 42%, #0b0d0a 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-white/10',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_16px_50px_rgba(0,0,0,0.24)]',
  shadowStrong: 'shadow-[0_24px_80px_rgba(0,0,0,0.34)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-xs font-extrabold uppercase tracking-[0.18em]',
    heroTitle: 'text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl lg:text-[3.5rem]',
    sectionTitle: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-lg ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center rounded-md ${editablePalette.accentBg} px-7 py-3.5 text-sm font-black text-[#10120f] transition hover:opacity-90`,
    secondary: `inline-flex items-center justify-center rounded-md border ${editablePalette.border} ${editablePalette.surfaceBg} px-7 py-3.5 text-sm font-black ${editablePalette.surfaceText} transition hover:bg-white/[0.05]`,
    accent: `inline-flex items-center justify-center rounded-md ${editablePalette.accentBg} px-7 py-3.5 text-sm font-black text-[#10120f] transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden rounded-xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
