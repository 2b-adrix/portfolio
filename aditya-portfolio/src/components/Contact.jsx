import React from 'react'

export default function Contact({ profile }){
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 p-6 rounded-xl glass">
        <p className="text-sm">Email: <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></p>
        <p className="text-sm mt-2">Socials: <a href={profile.social.linkedin} className="underline">LinkedIn</a> • <a href={profile.social.x} className="underline">X</a></p>
      </div>
    </section>
  )
}
