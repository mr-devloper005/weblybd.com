import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#10120f] text-[#f7f8ef]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-lg border border-white/10 bg-[#171b14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#b7bea7]">Already have an account? <Link href="/login" className="font-black text-[#a8cf2a] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8cf2a]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#b7bea7]">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-lg border border-[#a8cf2a]/30 bg-[#a8cf2a]/10 p-5 text-sm font-bold leading-7 text-[#d7e7a1]">
              Your account unlocks the create page and lets the navbar show your name with a logout control.
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
