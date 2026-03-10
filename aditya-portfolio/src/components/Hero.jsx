import React from 'react'

export default function Hero({ profile }){
  return (
    <section className="grid lg:grid-cols-3 gap-8 items-center">
      <div className="lg:col-span-2">
        <h1 className="text-4xl md:text-5xl font-extrabold">{profile.name}</h1>
        <div className="mt-3 inline-block py-1 px-3 rounded-full text-sm font-medium" style={{background:'rgba(255,255,255,0.02)', color:profile.colors.primary}}>{profile.title}</div>
        <p className="mt-6 max-w-2xl leading-relaxed opacity-90">{profile.tagline}</p>

        <div className="mt-6 flex gap-3">
          <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-md border" style={{borderColor:profile.colors.primary,color:profile.colors.primary}}>Email</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-lg" style={{background:profile.colors.surface}}>
          <img src={profile.photo} alt={profile.name} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}
