'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#9fbe24', '--editable-nav-text': '#11140f', '--editable-nav-active': '#11140f', '--editable-nav-active-text': '#f7f8ef', '--editable-cta-bg': '#11140f', '--editable-cta-text': '#f7f8ef', '--editable-search-bg': '#f7f8ef', '--editable-border': 'rgba(17,20,15,0.22)', '--editable-container': '1180px' } as CSSProperties
  const navItems = useMemo(
    () => {
      const taskItems = SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.key === 'sbm' ? 'SBM' : task.label, href: task.route, key: task.key }))
      return taskItems.sort((a, b) => (a.key === 'sbm' ? -1 : b.key === 'sbm' ? 1 : 0))
    },
    []
  )
  const brandName = slot4BrandConfig.siteName

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] shadow-[0_8px_28px_rgba(0,0,0,0.18)]">
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-[var(--editable-border)] bg-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={brandName} className="h-9 w-9 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[190px] truncate text-lg font-black uppercase tracking-normal">{brandName}</span>
            <span className="block max-w-[190px] truncate text-[11px] font-black uppercase tracking-[0.14em] opacity-70">{globalContent.nav?.tagline || slot4BrandConfig.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-md items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search SBM resources" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
            <input type="hidden" name="task" value="sbm" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-4 py-2 text-sm font-black uppercase transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/8'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <span className="hidden max-w-[130px] truncate rounded-md border border-[var(--editable-border)] bg-white/35 px-3 py-2 text-sm font-black sm:inline-block">{session.name}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-black/8 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-black/8 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search SBM resources" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
            <input type="hidden" name="task" value="sbm" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
