import Header from '../components/header'
import Hero from '../components/hero'
import Objective from '../components/objective'
import CoreValue from '../components/coreValue'
import Event from '../components/event'
import News from '../components/news'
import Footer from '../components/footer'
import { NavBar } from '../components/navbar'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Objective />
        <CoreValue />
        <Event />
        <News />
      </main>
      <Footer />
    </div>
  )
}