import React from 'react'

export default function Experience({ profile }){
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        {profile.experience.map((e, i) => (
          <div key={i} className="p-4 rounded-xl glass">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{e.role} — {e.company}</div>
                <div className="text-sm opacity-80">{e.period}</div>
              </div>
            </div>
            <p className="mt-2 text-sm opacity-90">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
