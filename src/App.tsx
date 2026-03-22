import './App.css'
import { Header } from '@/features/header/Header'
import { Hero } from '@/features/hero/Hero'
import { Advantages } from '@/features/advantages/Advantages'
import { Catalog } from '@/features/catalog/Catalog'
import { Process } from '@/features/process/Process'
import { Gallery } from '@/features/gallery/Gallery'
import { Pricing } from '@/features/pricing/Pricing'
import { Reviews } from '@/features/reviews/Reviews'
import { Faq } from '@/features/faq/Faq'
import { LeadForm } from '@/features/lead-form/LeadForm'
import { Footer } from '@/features/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <Process />
        <Gallery />
        <Pricing />
        <Reviews />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}

export default App
