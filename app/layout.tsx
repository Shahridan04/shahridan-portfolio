import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shahridan Noriman - Creative Professional | Video Editor, Photographer & Web Developer',
  description: 'Portfolio of Shahridan Noriman - Creative professional specializing in video editing, photography, and web development. Showcasing professional work in event coverage, video production, and modern web solutions.',
  keywords: ['Shahridan Noriman', 'Video Editor', 'Photographer', 'Web Developer', 'Portfolio', 'Video Editing', 'Photography', 'Web Development'],
  authors: [{ name: 'Shahridan Noriman' }],
  openGraph: {
    title: 'Shahridan Noriman - Creative Professional',
    description: 'Portfolio showcasing video editing, photography, and web development work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

