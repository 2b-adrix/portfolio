import React from 'react'

export default function Header({ profile }){
  return (
    <header className="sticky top-0 z-50 backdrop-blur glass border-b border-white/3">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden" style={{background:'#0f1724'}}>
            <img src={profile.photo} alt={profile.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="text-sm font-semibold">{profile.name}</div>
            <div className="text-xs opacity-80">{profile.title}</div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#certifications" className="hover:underline">Certifications</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href={profile.resume} download className="ml-2 px-3 py-1 rounded-md border" style={{borderColor:profile.colors.primary,color:profile.colors.primary}}>Resume</a>
        </nav>
      </div>
    </header>
  )
}
