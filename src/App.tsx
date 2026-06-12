import { GraduationCap, MessageSquare, Trophy, BookOpen, Star, Sparkles, Volume2, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const grades = ['K', '1', '2', '3', '4', '5', '6']

function GradeCard({ grade, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFD93D] to-[#FF9F1C] p-[3px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-full rounded-[22px] bg-white/90 px-4 py-6 text-center backdrop-blur-sm">
        <div className="text-4xl mb-2 drop-shadow-sm">🎒</div>
        <div className="text-lg font-extrabold text-[#ed7332]">Grade {grade}</div>
      </div>
    </button>
  )
}

export default function App() {
  const [activeGrade, setActiveGrade] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#fff7ed] to-[#fffbe6] font-sans selection:bg-[#FFD93D]">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFD93D]/30 blur-3xl" />
        <div className="absolute top-32 -right-24 h-72 w-72 rounded-full bg-[#4FC3F7]/30 blur-3xl" />
        <div className="absolute bottom-24 left-24 h-72 w-72 rounded-full bg-[#A8E6CF]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex animate-bounce items-center justify-center rounded-full bg-[#FFD93D] px-3 py-1 text-sm font-bold text-[#8a5a00] shadow-md">
              ✨ Learn & Play
            </span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[#3b2a1a]">
            🦆 <span className="bg-gradient-to-r from-[#FF9F1C] to-[#ed7332] bg-clip-text text-transparent">Duckling Learning</span>
          </h1>
          <p className="mt-3 max-w-xl text-lg text-[#5c4b3a]">
            Quackers helps you learn English and Chinese — one fun lesson at a time.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#ff7eb3] px-5 py-3 font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition">
              <Volume2 className="h-5 w-5" /> Start Learning
            </button>
            <button className="rounded-full bg-white/80 px-5 py-3 font-semibold text-[#3b2a1a] shadow-md backdrop-blur hover:shadow-lg transition">
              Parent Zone
            </button>
          </div>
        </header>

        {/* Mascot card */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] bg-white/70 p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.08),-16px_-16px_40px_rgba(255,255,255,0.9)] backdrop-blur">
            <div className="flex items-center gap-5">
              <div className="grid h-28 w-28 place-items-center rounded-[28px] bg-gradient-to-br from-[#FFD93D] to-[#FF9F1C] p-[3px] shadow-lg">
                <div className="grid h-full w-full place-items-center rounded-[24px] bg-white/90 text-5xl">
                  🦆
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#3b2a1a]">Meet Quackers!</h2>
                <p className="mt-1 text-[#5c4b3a]">Your feathered learning buddy. Tap the duck to practice words and sounds.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-white/70 p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.08),-16px_-16px_40px_rgba(255,255,255,0.9)] backdrop-blur">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#3b2a1a]">Daily Talk</h2>
                <p className="mt-1 text-[#5c4b3a]">Practice real conversations every day.</p>
              </div>
              <div className="rounded-2xl bg-[#E0F7FA] p-3 text-2xl">💬</div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#e3d7ce] bg-white/60 p-4">
              <div>
                <div className="text-sm font-semibold text-[#8a7a6a]">Today's topic</div>
                <div className="text-lg font-bold text-[#3b2a1a]">Greet a friend in English & Chinese</div>
              </div>
              <button className="grid h-11 w-11 place-items-center rounded-full bg-[#FFD93D] text-[#5c4b3a] shadow-md hover:-translate-y-0.5 transition">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Grade selector */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-[#3b2a1a]">Choose your level</h3>
            <span className="rounded-full bg-[#FFD93D] px-3 py-1 text-xs font-bold text-[#5c4b3a]">K - Grade 6</span>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
            {grades.map((grade) => (
              <GradeCard key={grade} grade={grade} onClick={() => setActiveGrade(grade)} />
            ))}
          </div>
          {activeGrade && (
            <div className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-center text-[#3b2a1a] shadow-sm backdrop-blur">
              Selected: <span className="font-bold">Grade {activeGrade}</span> — ready to open lessons.
            </div>
          )}
        </section>

        {/* Feature cards */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[32px] bg-white/70 p-7 shadow-[16px_16px_40px_rgba(0,0,0,0.07),-12px_-12px_32px_rgba(255,255,255,0.92)] backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff3b0] text-2xl shadow-sm">🏆</div>
              <h4 className="text-xl font-extrabold text-[#3b2a1a]">My Progress</h4>
            </div>
            <p className="mt-3 text-[#5c4b3a]">Earn stars and badges as you learn.</p>
            <div className="mt-4 flex gap-2 text-2xl">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="drop-shadow-sm">⭐</span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-white/70 p-7 shadow-[16px_16px_40px_rgba(0,0,0,0.07),-12px_-12px_32px_rgba(255,255,255,0.92)] backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e6f7ff] text-2xl shadow-sm">📚</div>
              <h4 className="text-xl font-extrabold text-[#3b2a1a]">Lessons</h4>
            </div>
            <p className="mt-3 text-[#5c4b3a]">Bilingual stories, pictures, and games.</p>
            <button className="mt-4 rounded-2xl bg-[#4FC3F7] px-4 py-3 font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
              Browse Lessons
            </button>
          </div>

          <div className="rounded-[32px] bg-white/70 p-7 shadow-[16px_16px_40px_rgba(0,0,0,0.07),-12px_-12px_32px_rgba(255,255,255,0.92)] backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ffe4e1] text-2xl shadow-sm">🔊</div>
              <h4 className="text-xl font-extrabold text-[#3b2a1a]">Listen & Repeat</h4>
            </div>
            <p className="mt-3 text-[#5c4b3a]">Practice sounds with Quackers.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#FF9F1C] px-4 py-3 font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
              <Sparkles className="h-4 w-4" /> Try now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-10 text-center text-sm text-[#8a7a6a]">
          Made for Cambodian kids learning English and Chinese 🇰🇭
        </footer>
      </div>
    </div>
  )
}
