import React from 'react'

export default function Certifications({ profile }){
  return (
    <section id="certifications" className="mt-12">
      <h2 className="text-2xl font-semibold">Certifications & Achievements</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {profile.certifications.length === 0 ? (
          <div className="p-6 rounded-xl glass">No certifications yet — add them in src/data/profile.js</div>
        ) : profile.certifications.map((c, i) => (
          <div key={i} className="p-4 rounded-xl" style={{background:profile.colors.surface}}>
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm opacity-80">{c.issuer} • {c.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
