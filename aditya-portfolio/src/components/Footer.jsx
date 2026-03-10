import React from 'react'

export default function Footer({ profile }){
  return (
    <footer className="mt-12 py-8 text-center text-sm opacity-80">
      © {new Date().getFullYear()} {profile.name} — Built with ❤️
    </footer>
  )
}
