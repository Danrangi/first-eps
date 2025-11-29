import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()

  const exams = [
    { id: 'jamb', name: 'JAMB', color: 'bg-primary-green' },
    { id: 'waec', name: 'WAEC', color: 'bg-primary-green' },
    { id: 'neco', name: 'NECO', color: 'bg-primary-green' },
  ]

  const handleExamSelect = () => {
    navigate('/exam')
  }

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, Student!</h1>
        <p className="text-gray-600 text-lg">
          Choose an exam to get started with your practice session
        </p>
      </div>

      {/* Exam Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exams.map((exam) => (
          <button
            key={exam.id}
            onClick={handleExamSelect}
            className={`p-8 rounded-lg border-2 border-primary-green hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className={`${exam.color} p-6 rounded-full text-white`}>
                <BookOpen size={40} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-green text-center">
              {exam.name}
            </h2>
            <p className="text-gray-600 text-center mt-4">
              Practice {exam.name} questions and improve your skills
            </p>
          </button>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm font-medium">Total Attempts</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm font-medium">Average Score</p>
          <p className="text-3xl font-bold text-primary-green mt-2">75%</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm font-medium">Best Score</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">92%</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
