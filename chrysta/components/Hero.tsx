"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GradientText from "./ui/GradientText";
import ScrollVelocity from "./ui/ScrollVelocity";
import { motion } from "motion/react";

const Hero = () => {
  const router = useRouter();
  const [roomToJoin, setRoomToJoin] = useState("");

  const generateShortId = () => {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  };

  const handleCreate = () => {
    const id = generateShortId();
    router.push(`/doc/${id}`);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomToJoin.trim()) {
      router.push(`/doc/${roomToJoin.trim().toUpperCase()}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(82,39,255,0.08)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-[13px] font-semibold mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Chrysta v2.0 is now live
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Image
            src="/chrystalogobg.png"
            alt="Chrysta Logo"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
            animationSpeed={6}
            showBorder={false}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter block py-2"
          >
            Chrysta
          </GradientText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
        >
          The real-time collaborative workspace where teams <span className="text-slate-900 dark:text-slate-100 font-bold">write</span>, <span className="text-slate-900 dark:text-slate-100 font-bold">think</span>, and <span className="text-slate-900 dark:text-slate-100 font-bold">ship</span> together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto mb-20"
        >
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-6">
            <button
              onClick={handleCreate}
              className="flex-1 bg-primary text-white h-14 px-8 rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(46,91,96,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
              New Document
            </button>
            <div className="flex-1 relative flex">
              <form onSubmit={handleJoin} className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Room ID..."
                  value={roomToJoin}
                  onChange={(e) => setRoomToJoin(e.target.value)}
                  className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal"
                />
                <button
                  type="submit"
                  className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 px-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <p className="text-sm text-slate-500">Create a new workspace or join your team via room code</p>
        </motion.div>

        {/* Scroll Velocity as a dynamic separator */}
        <div className="py-12 opacity-30 dark:opacity-10 select-none pointer-events-none pb-20">
          <ScrollVelocity
            texts={["COLLABORATE", "WRITE", "INNOVATE"]}
            velocity={15}
            className="text-4xl md:text-6xl font-black !text-slate-900 dark:!text-slate-100"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto max-w-5xl mt-[-40px] group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-[32px] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000 pb-20"></div>

          {/* Mock Editor UI */}
          <div className="relative bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">
            {/* Toolbar mockup */}
            <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center px-4 gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/50" />
              </div>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
              <div className="flex gap-3">
                <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded-sm" />
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded-sm" />
                <div className="h-4 w-8 bg-slate-200 dark:bg-slate-700 rounded-sm" />
              </div>
              <div className="ml-auto flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div className="w-24 h-8 bg-primary rounded-lg" />
              </div>
            </div>

            {/* Editor Content mockup */}
            <div className="flex-1 p-8 md:p-12 text-left space-y-6 overflow-hidden">
              <div className="h-10 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-50 dark:bg-slate-900 rounded" />
                <div className="h-4 w-11/12 bg-slate-50 dark:bg-slate-900 rounded" />
                <div className="h-4 w-3/4 bg-slate-50 dark:bg-slate-900 rounded" />
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1 h-32 bg-primary/30 rounded-full" />
                <div className="flex-1 space-y-4">
                  <div className="h-6 w-1/4 bg-slate-100 dark:bg-slate-800 rounded-md" />
                  <div className="h-4 w-full bg-slate-50 dark:bg-slate-900 rounded" />
                  <div className="h-4 w-5/6 bg-slate-50 dark:bg-slate-900 rounded" />
                  <div className="h-4 w-4/5 bg-slate-50 dark:bg-slate-900 rounded" />
                </div>
              </div>

              {/* Floating cursor mockup */}
              <motion.div
                animate={{ x: [100, 300, 200], y: [0, 50, -20] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/2 left-1/4 flex flex-col items-start gap-1 pointer-events-none"
              >
                <div className="w-0.5 h-6 bg-primary" />
                <div className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded shadow-sm">
                  Alex is typing...
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
