export const PROFILE = {
  name: 'Aditya Kumar Mishra',
  title: 'Android Developer',
  tagline: "AI Enthusiast | Android developer | MU'28 | CSE | Aspiring Software Engineer",
  email: 'vadityamishra777@gmail.com',
  location: "Mewar University, India",
  photo: '/images/profile.jpg',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/2b-adrix',
    instagram: 'https://www.instagram.com/2b_adrix/',
    facebook: 'https://www.facebook.com/me/',
    x: 'https://x.com/AdityaMishraSu1',
  },
  skills: ['Java', 'Kotlin', 'Python', 'Firebase', 'LINUX'],
  projects: [
    {
      title: 'SmartNotes — Android AI Note Assistant',
      description: 'An Android app that uses on-device ML to summarize notes and generate task lists. Offline-first with Firebase sync and biometric security.',
      tech: ['Kotlin', 'Firebase', 'ML Kit', 'Room'],
      link: '#'
    },
    {
      title: 'FitTrack — Workout Logger with Realtime Sync',
      description: 'A responsive Android app to log workouts, visualize progress, and sync across devices using Firebase Realtime Database and Cloud Functions.',
      tech: ['Java', 'Firebase', 'Charts'],
      link: '#'
    },
    {
      title: 'ChatAssist — Customer Support Chatbot',
      description: 'A prototype integrating lightweight AI for in-app customer support; routes conversations, stores transcripts in Firebase, and provides analytics dashboard.',
      tech: ['Kotlin', 'Python (backend)', 'Firebase', 'Dialogflow'],
      link: '#'
    }
  ],
  experience: [
    {
      company: 'InnoTech Labs',
      role: 'Android Developer Intern',
      period: 'Jun 2024 - Sep 2024',
      description: 'Built core features for the company Android app, improved app startup time by 18%, and integrated Firebase Analytics and Crashlytics for better observability.'
    },
    {
      company: 'Campus Projects (Mewar University)',
      role: 'Lead Android Developer',
      period: 'Jan 2023 - Present',
      description: 'Led a 4-person team to build campus utilities apps, designed app architecture using MVVM and implemented CI/CD with GitHub Actions.'
    }
  ],
  certifications: [
    { title: 'Android Developer (Intermediate)', issuer: 'Udemy', year: '2023' },
    { title: 'Machine Learning Foundations', issuer: 'Coursera', year: '2024' }
  ],
  colors: {
    primary: '#6EE7B7',
    background: '#0b1220',
    surface: '#0f1724',
    text: '#e6eef8',
  }
}
