import Header from '../components/header'
import Hero from '../components/hero'
import Objective from '../components/objective'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Objective />
      </main>
    </div>
  )
}