'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#0b0d0a', '--editable-footer-text': '#f7f8ef' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = slot4BrandConfig.siteName

  return (
    <footer style={footerVars} className="border-t border-white/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="border-b border-white/10 bg-[#9fbe24] py-8 text-[#11140f]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-5 px-4 text-sm font-black uppercase sm:px-6 lg:px-8">
          <Link href="/sbm" className="underline decoration-[#11140f] underline-offset-8">Social Bookmarking</Link>
          <Link href="/search?task=sbm" className="underline decoration-[#11140f] underline-offset-8">Search SBM</Link>
          <Link href="/create" className="underline decoration-[#11140f] underline-offset-8">Submit Link</Link>
          <Link href="/contact" className="underline decoration-[#11140f] underline-offset-8">Support</Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white">
              <img src="/favicon.png?v=20260413" alt={brandName} className="h-9 w-9 object-contain" />
            </span>
            <span className="text-lg font-black uppercase tracking-normal">{brandName}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#9fbe24]">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.key === 'sbm' ? 'SBM resources' : task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#9fbe24]">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold opacity-60">
        © {year} {brandName}. All rights reserved.
      </div>
    </footer>
  )
}
