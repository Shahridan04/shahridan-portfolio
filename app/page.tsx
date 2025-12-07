import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

