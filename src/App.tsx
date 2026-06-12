import { GraduationCap, MessageSquare, Trophy, BookOpen } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-clay-500 mb-2">
            🦆 Duckling Learning
          </h1>
          <p className="text-xl text-gray-700">
            Learn English & Chinese with Quackers!
          </p>
        </header>

        <div className="text-center mb-12">
          <div className="inline-block animate-wiggle">
            <div className="w-32 h-32 bg-duck-yellow rounded-full shadow-clay flex items-center justify-center text-6xl">
              🦆
            </div>
          </div>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="clay-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-duck-light rounded-full">
                <BookOpen className="w-8 h-8 text-clay-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Grade K-6</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Choose your grade level and start learning!
            </p>
            <div className="grid grid-cols-3 gap-2">
              {['K', '1', '2', '3', '4', '5', '6'].map((grade) => (
                <button
                  key={grade}
                  className="bg-duck-yellow hover:bg-duck-orange text-gray-800 font-bold py-3 px-4 rounded-clay shadow-clay-sm transition-colors"
                >
                  Grade {grade}
                </button>
              ))}
            </div>
          </div>

          <div className="clay-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-sky-light rounded-full">
                <MessageSquare className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Daily Talk</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Practice conversations every day to improve!
            </p>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-clay shadow-clay transition-colors">
              Start Today's Conversation
            </button>
          </div>

          <div className="clay-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">My Progress</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Track your learning journey!
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-4xl">⭐</div>
              ))}
            </div>
          </div>

          <div className="clay-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Lessons</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Rich visual content in English and Chinese!
            </p>
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-clay shadow-clay transition-colors">
              Browse Lessons
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
