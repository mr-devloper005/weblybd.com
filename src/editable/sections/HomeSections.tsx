import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Bookmark, CheckCircle2, ExternalLink, Search, Tags } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return task === 'sbm' ? 'Social Bookmarking' : SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`bg-[#10120f] text-[#f7f8ef] ${className}`}>{children}</section>
}

function ResourceCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const category = getEditableCategory(post)
  const image = getEditablePostImage(post)
  return (
    <Link href={href} className="group block overflow-hidden rounded-lg border border-white/10 bg-[#171b14] shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#a8cf2a]/60">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#22271c]">
        <img src={image} alt={post.title} className="h-full w-full object-cover opacity-82 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#a8cf2a] text-[#11140f]"><Bookmark className="h-4 w-4" /></span>
        <span className="absolute bottom-3 left-3 rounded-md bg-[#a8cf2a] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#11140f]">{category}</span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#a8cf2a]">SBM {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-normal text-white">{post.title}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#b7bea7]">{getEditableExcerpt(post, 145)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#a8cf2a]">Open details <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

function RailCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group w-[260px] shrink-0 snap-start rounded-lg border border-white/10 bg-[#171b14] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a8cf2a]/70">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-[#a8cf2a] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#11140f]">Save {String(index + 1).padStart(2, '0')}</span>
        <ExternalLink className="h-4 w-4 text-[#a8cf2a]" />
      </div>
      <h3 className="mt-8 line-clamp-3 text-xl font-black leading-tight text-white">{post.title}</h3>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#b7bea7]">{getEditableExcerpt(post, 120)}</p>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const featured = posts[0]
  return (
    <SectionShell className="border-b border-white/10">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
        <div className="self-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7bea7]">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-md bg-[#a8cf2a] px-6 py-3 text-sm font-black text-[#11140f]">Browse {taskLabel(primaryTask)} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#171b14] px-6 py-3 text-sm font-black text-white">Submit bookmark</Link>
          </div>
          <form action="/search" className="mt-8 flex max-w-xl rounded-lg border border-white/10 bg-[#171b14] p-2">
            <input type="hidden" name="task" value="sbm" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-bold text-white outline-none placeholder:text-[#899279]" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#a8cf2a] px-5 py-3 text-sm font-black text-[#11140f]"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#171b14] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#a8cf2a]">Featured on {slot4BrandConfig.siteName}</p>
              <h2 className="mt-2 text-2xl font-black text-white">Bookmark of the moment</h2>
            </div>
            <Bookmark className="h-7 w-7 text-[#a8cf2a]" />
          </div>
          {featured ? (
            <Link href={postHref(primaryTask, featured, primaryRoute)} className="group mt-5 block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#22271c]">
                <img src={getEditablePostImage(featured)} alt={featured.title} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
              </div>
              <h3 className="mt-5 text-3xl font-black leading-tight text-white">{featured.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#b7bea7]">{getEditableExcerpt(featured, 170)}</p>
            </Link>
          ) : (
            <div className="mt-5 rounded-md bg-[#10120f] p-6 text-sm leading-7 text-[#b7bea7]">Publish SBM resources to populate this featured area automatically.</div>
          )}
        </div>
      </div>
    </SectionShell>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 12)
  if (!railPosts.length) return null
  return (
    <SectionShell>
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">Fresh bookmarks</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal">Recently saved resources</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-black text-[#a8cf2a] hover:underline sm:inline">See all</Link>
        </div>
        <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post, index) => <RailCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </SectionShell>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 6)
  if (!featured.length) return null
  return (
    <SectionShell className="border-y border-white/10 bg-[#0b0d0a]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">Curated SBM cards</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Scan resource titles, summaries, and categories faster.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((post, index) => <ResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </SectionShell>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  const picks = categoryPosts.slice(0, 8)
  return (
    <SectionShell>
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">Searchable SBM index</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">All the links. Cleaner categories. Less visual noise.</h2>
          <p className="mt-4 max-w-md text-base leading-8 text-[#b7bea7]">Use the search page to find bookmarks by title, URL, category, or notes. The layout stays compact so the site never feels stretched.</p>
          <div className="mt-7 grid gap-3">
            {['Source-first bookmark pages', 'Category filters for faster browsing', 'Functional create, search, login, and logout buttons'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-[#171b14] p-4 text-sm font-bold text-[#dfe8cf]">
                <CheckCircle2 className="h-5 w-5 text-[#a8cf2a]" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {picks.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="rounded-lg border border-white/10 bg-[#171b14] p-5 transition hover:-translate-y-1 hover:border-[#a8cf2a]/60">
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#a8cf2a]"><Tags className="h-4 w-4" /> {getEditableCategory(post)}</div>
              <h3 className="mt-4 line-clamp-3 text-xl font-black leading-tight text-white">{post.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#b7bea7]">{getEditableExcerpt(post, 115)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#a8cf2a]">View resource <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export function EditableHomeCta() {
  return (
    <SectionShell className="border-t border-white/10">
      <div className="mx-auto max-w-[1180px] px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">Submit smarter</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">Add useful social bookmarks with clear titles, categories, and source URLs.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#b7bea7]">The create page is ready for logged-in users, and every submitted bookmark keeps the same SBM-focused visual system.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/create" className="rounded-md bg-[#a8cf2a] px-7 py-3.5 text-sm font-black text-[#11140f]">Create bookmark</Link>
          <Link href="/contact" className="rounded-md border border-white/10 bg-[#171b14] px-7 py-3.5 text-sm font-black text-white">Contact support</Link>
        </div>
      </div>
    </SectionShell>
  )
}
