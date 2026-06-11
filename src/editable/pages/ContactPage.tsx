'use client'

import { Bookmark, CheckCircle2, Mail, Tags } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: Bookmark, title: 'Bookmark submissions', body: 'Ask about pending SBM links, source URL changes, rejected submissions, or resource quality guidelines.' },
  { icon: Tags, title: 'Category requests', body: 'Suggest new bookmark categories, improved tags, or better grouping for related social bookmarking resources.' },
  { icon: Mail, title: 'Partnership support', body: 'Reach out for bulk resource curation, collaboration requests, and publisher support.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#10120f] text-[#f7f8ef]">
        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#b7bea7]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-white/10 bg-[#171b14] p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#a8cf2a] text-[#11140f]"><lane.icon className="h-5 w-5" /></span>
                    <div>
                      <h2 className="text-xl font-black">{lane.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-[#b7bea7]">{lane.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-[#a8cf2a]/30 bg-[#a8cf2a]/10 p-5 text-sm font-bold leading-7 text-[#d7e7a1]">
              <CheckCircle2 className="mb-3 h-5 w-5 text-[#a8cf2a]" />
              Include the bookmark title, source URL, and category when you need help with an existing SBM submission.
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#11140f] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#b7bea7]">We read every message and route SBM support requests by submission, category, or partnership type.</p>
            <div className="mt-5">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
