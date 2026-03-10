import React from 'react'

export default function Projects({ profile }){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {profile.projects.length === 0 ? (
          <div className="p-6 rounded-xl glass">No projects added yet — add them in src/data/profile.js</div>
        ) : profile.projects.map((p, i) => (
          <article key={i} className="p-6 rounded-xl" style={{background:profile.colors.surface}}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm opacity-80 mt-2">{p.description}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  {p.tech?.map((t, idx) => <span key={idx} className="px-2 py-1 rounded-full text-[12px] border" style={{borderColor:'rgba(255,255,255,0.04)'}}>{t}</span>)}
                </div>
              </div>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="underline">View</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
