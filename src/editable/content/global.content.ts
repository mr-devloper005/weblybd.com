import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Social bookmarking directory',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Social bookmarking directory',
    primaryLinks: [
      { label: 'SBM', href: '/sbm' },
      { label: 'Submit', href: '/create' },
      { label: 'Search', href: '/search' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Social bookmarking built for discovery',
    description: 'A focused SBM hub for submitting, organizing, and discovering useful web resources through clean bookmark pages.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Social Bookmarking', href: '/sbm' },
          { label: 'Search Bookmarks', href: '/search?task=sbm' },
          { label: 'Create Bookmark', href: '/create' },
          { label: 'Latest Resources', href: '/sbm' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Curated social bookmarks, useful categories, and faster resource discovery.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest bookmarks',
    related: 'Related',
    published: 'Published',
  },
} as const
