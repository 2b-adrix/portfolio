import React from 'react'
import { PROFILE } from './data/profile'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header profile={PROFILE} />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Hero profile={PROFILE} />
        <Projects profile={PROFILE} />
        <Experience profile={PROFILE} />
        <Certifications profile={PROFILE} />
        <Contact profile={PROFILE} />
      </main>
      <Footer profile={PROFILE} />
    </div>
  )
}
