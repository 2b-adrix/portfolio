export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Clean Architecture · MVVM · Offline-First. Every app deserves solid foundations.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Remote-ready. Based in India, building for the world.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Android Tech Stack",
    description: "Kotlin · Compose · Room · Hilt · Coroutines · Retrofit",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "B.Tech CSE @ Mewar University · 4th Semester",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building SIKSHA — Elite School Management System powered by Gemini AI",
    description: "Latest Build",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to collaboration, freelance Android Projects & full-time roles",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AlphaChat Native",
    des: "Real-time chat app built with Jetpack Compose + Socket.IO. Features offline-first message cache via Room Persistence, custom Retrofit networking, and MVVM/Clean Architecture.",
    img: "/p1.svg",
    iconLists: ["/kotlin.svg", "/android.svg"],
    link: "https://github.com/2b-adrix",
  },
  {
    id: 2,
    title: "SIKSHA – Elite School Management System",
    des: "Multi-role ERP for schools: Admin, Teacher, Student & Parent dashboards. Google Gemini AI auto-generates performance summaries. Built with Hilt DI, Clean Architecture, Firebase & MongoDB.",
    img: "/p2.svg",
    iconLists: ["/kotlin.svg", "/firebase.svg", "/mongodb.svg"],
    link: "https://github.com/2b-adrix",
  },
  {
    id: 3,
    title: "The Oracle's Plate — Food Delivery",
    des: "Full-featured food delivery app in Kotlin. User browsing, cart management, order tracking, and Node.js/Express backend integration.",
    img: "/p3.svg",
    iconLists: ["/kotlin.svg", "/android.svg"],
    link: "https://github.com/2b-adrix/THE-ORACLES-PLATE",
  },
  {
    id: 4,
    title: "WeatherApp",
    des: "Real-time weather app in Kotlin with OpenWeather API integration, location-based forecasting, and clean Material You UI.",
    img: "/p4.svg",
    iconLists: ["/kotlin.svg", "/firebase.svg"],
    link: "https://github.com/2b-adrix/WeatherApp",
  },
];

export const testimonials: { quote: string; name: string; title: string }[] = [];

export const companies: { id: number; name: string; img: string; nameImg: string }[] = [];

export const workExperience = [
  {
    id: 1,
    title: "Founder & Lead Android Developer",
    company: "Alpha4Coders (GitHub Organization)",
    period: "2023 – Present",
    desc: "Founded Alpha4Coders to build production-grade Android apps. Led architectural decisions (MVVM → Clean Architecture), managed transition from Firebase to a custom Node.js/Express/MongoDB backend, and applied GitFlow across all projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    tags: ["Kotlin", "MVVM", "Socket.IO", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Associate Android Developer",
    company: "Tech Product Development Group",
    period: "2024 – Present",
    desc: "Developing technical modules for institutional ERP software. Implementing Jetpack Compose UI, Retrofit networking, Kotlin Coroutines for async task management, and Hilt for dependency injection.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    tags: ["Jetpack Compose", "Retrofit", "Coroutines", "Hilt"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/2b-adrix",
    label: "GitHub",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AdityaMishraSu1",
    label: "Twitter / X",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/2b-adrix",
    label: "LinkedIn",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/2b_adrix",
    label: "Instagram",
  },
];

export const androidSkills = [
  { name: "Kotlin", level: 92, color: "#7F52FF" },
  { name: "Jetpack Compose", level: 88, color: "#00BCD4" },
  { name: "MVVM / Clean Arch", level: 85, color: "#00DE8A" },
  { name: "Room Persistence", level: 83, color: "#FF6F00" },
  { name: "Hilt (DI)", level: 80, color: "#4285F4" },
  { name: "Kotlin Coroutines", level: 87, color: "#7F52FF" },
  { name: "Retrofit / OkHttp", level: 82, color: "#00DE8A" },
  { name: "Node.js / Express", level: 70, color: "#00DE8A" },
  { name: "MongoDB", level: 68, color: "#4CAF50" },
  { name: "Socket.IO", level: 75, color: "#FF6F00" },
];