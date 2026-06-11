import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Social bookmarking resources and SBM submissions',
      description: 'Discover, submit, and organize social bookmarking resources through a focused SBM directory.',
      openGraphTitle: 'Social bookmarking resources and SBM submissions',
      openGraphDescription: 'Browse curated SBM links, bookmark details, categories, and useful discovery pages.',
      keywords: ['social bookmarking', 'sbm', 'bookmark submissions', 'resource directory'],
    },
    hero: {
      badge: 'SBM resource discovery',
      title: ['Save better links.', 'Discover useful SBM resources.'],
      description: 'Browse social bookmarking submissions, compare resource notes, and open trusted web pages from one focused directory.',
      primaryCta: { label: 'Browse SBM links', href: '/sbm' },
      secondaryCta: { label: 'Submit bookmark', href: '/create' },
      searchPlaceholder: 'Search bookmarks, URLs, tags, and categories',
      focusLabel: 'SBM',
      featureCardBadge: 'curated bookmark flow',
      featureCardTitle: 'Every card is designed to make useful web resources easier to scan.',
      featureCardDescription: 'Titles, categories, source links, and summaries stay clear so visitors can decide quickly.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for social bookmarking, resource curation, and faster web discovery.',
      paragraphs: [
        'This site brings together submitted bookmarks, resource summaries, and clean category browsing for SBM-focused discovery.',
        'Instead of burying useful links in noisy pages, the platform keeps each bookmark easy to scan, open, and compare.',
        'Visitors can move from a saved resource to related SBM submissions without losing context.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Bookmark-first homepage with strong titles and visible source context.',
        'Focused sections for social bookmarking and resource discovery.',
        'Readable card rhythm designed for fast scanning.',
        'Lightweight UI that keeps submissions, search, and detail pages simple.',
      ],
      primaryLink: { label: 'Browse bookmarks', href: '/sbm' },
      secondaryLink: { label: 'Submit a link', href: '/create' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Find useful social bookmarking resources without the clutter.',
      description: 'Move from category browsing to bookmark details and source pages through one consistent SBM experience.',
      primaryCta: { label: 'Browse SBM', href: '/sbm' },
      secondaryCta: { label: 'Contact', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A cleaner way to publish and discover social bookmarks.',
    description: `${slot4BrandConfig.siteName} is built for SBM: focused bookmark submissions, useful categories, source links, and detail pages that help visitors evaluate resources quickly.`,
    paragraphs: [
      'The platform keeps every bookmark organized around the information that matters: title, URL, category, description, and next action.',
      'Whether someone starts from search, a category, or a shared detail page, they can keep discovering related SBM resources without friction.',
    ],
    values: [
      {
        title: 'Bookmark-first browsing',
        description: 'We prioritize short summaries, clear source links, and card layouts that make SBM resources easy to compare.',
      },
      {
        title: 'Submission-ready structure',
        description: 'Create pages guide users toward clean titles, categories, URLs, and notes for stronger bookmark quality.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'Navigation, search, and detail pages stay focused so visitors can open saved resources with confidence.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with SBM submissions, categories, or saved resources?',
    description: 'Send questions about bookmark approvals, resource corrections, category requests, or partnership submissions. We will route the message to the right lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find social bookmarks, URLs, and resource categories faster.',
      description: 'Use keywords, categories, and content type filters to discover SBM submissions across the site.',
      placeholder: 'Search by keyword, URL, category, or title',
    },
    resultsTitle: 'Latest searchable bookmarks',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to submit a social bookmark.',
      description: 'Use your account to open the SBM workspace and prepare clean bookmark submissions.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a clean SBM submission.',
      description: 'Add the resource title, category, source URL, helpful resource note, and tags so the bookmark is easy to approve and discover.',
    },
    formTitle: 'Bookmark details',
    submitLabel: 'Submit bookmark',
    successTitle: 'Bookmark submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your SBM workspace.',
      description: 'Login to submit social bookmarks, manage draft resources, and continue discovering useful links.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start saving resources.',
      description: 'Create an account to submit SBM links, prepare bookmark details, and keep your publishing flow ready.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
