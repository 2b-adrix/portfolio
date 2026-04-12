import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const phases = [
  {
    order: "Phase 1",
    title: "Wireframe & Architecture",
    des: "Define user stories, map navigation graphs, pick architecture (MVVM / Clean), and set up the Jetpack Navigation component scaffold before a single line of Compose is written.",
    icon: "🎯",
    color: "#00DE8A",
    canvasColor: [[0, 222, 138]],
    bgClass: "bg-emerald-900",
  },
  {
    order: "Phase 2",
    title: "Compose UI Build",
    des: "Build every screen with Jetpack Compose. Implement ViewModel state flows, Hilt injection, Room DAOs, Retrofit services, and real-time Socket.IO connections in parallel.",
    icon: "⚙️",
    color: "#7F52FF",
    canvasColor: [[127, 82, 255], [0, 188, 212]],
    bgClass: "bg-violet-900",
  },
  {
    order: "Phase 3",
    title: "Testing & Deployment",
    des: "Unit-test ViewModels with Turbine + MockK, instrument UI tests with Compose Testing. Set up CI with GitHub Actions and publish the signed APK to the Play Store.",
    icon: "🚀",
    color: "#FF6F00",
    canvasColor: [[255, 111, 0]],
    bgClass: "bg-orange-900",
  },
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 status-pill mb-4">
          🏗 Dev Lifecycle
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
          How I{" "}
          <span className="text-gradient-violet">Build Android Apps</span>
        </h1>
        <p className="text-[#9999BB] max-w-xl mx-auto">
          From first wireframe to Play Store listing — a structured, quality-first process
        </p>
      </div>

      <div className="my-10 flex flex-col lg:flex-row items-stretch justify-center w-full gap-5 max-w-5xl mx-auto px-4">
        {phases.map((phase) => (
          <Card key={phase.order} phase={phase}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName={`${phase.bgClass} rounded-3xl overflow-hidden`}
              colors={phase.canvasColor}
              dotSize={2}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  phase,
  children,
}: {
  phase: (typeof phases)[0];
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-5 relative lg:h-[30rem] rounded-3xl flex-1"
      style={{
        background: "rgb(18,18,26)",
        backgroundImage: "linear-gradient(135deg, rgba(18,18,26,1) 0%, rgba(26,26,40,1) 100%)",
        borderColor: phase.color + "25",
      }}
    >
      <Icon className="absolute h-8 w-8 -bottom-2.5 -left-2.5 opacity-20" style={{ color: phase.color }} />
      <Icon className="absolute h-8 w-8 -top-2.5 -right-2.5 opacity-20" style={{ color: phase.color }} />
      <Icon className="absolute h-8 w-8 -bottom-2.5 -right-2.5 opacity-20" style={{ color: phase.color }} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-3xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4 text-center">
        {/* Icon bubble */}
        <div className="flex justify-center mb-4 group-hover/canvas-card:opacity-0 transition-opacity duration-300">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: phase.color + "15", border: `1px solid ${phase.color}30` }}
          >
            {phase.icon}
          </div>
        </div>

        {/* Phase badge */}
        <AceternityIcon order={phase.order} color={phase.color} />

        {/* Title */}
        <h2
          className="text-xl font-bold mt-3 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300 text-white"
        >
          {phase.title}
        </h2>

        {/* Description */}
        <p
          className="text-sm mt-3 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300 leading-relaxed"
          style={{ color: "#9999BB" }}
        >
          {phase.des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order, color }: { order: string; color: string }) => {
  return (
    <button
      suppressHydrationWarning
      className="relative inline-flex overflow-hidden rounded-full p-[1px]"
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${color}00 0%, ${color} 50%, ${color}00 100%)`,
        }}
      />
      <span
        className="inline-flex items-center justify-center rounded-full bg-[#12121A] px-5 py-2 font-bold text-sm"
        style={{ color }}
      >
        {order}
      </span>
    </button>
  );
};

export const Icon = ({
  className,
  style,
  ...rest
}: React.SVGProps<SVGSVGElement> & { style?: React.CSSProperties }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      style={style}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};