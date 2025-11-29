import { useNavigate } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const ResultSummaryPage = () => {
  const navigate = useNavigate()
  const score = 40
  const totalQuestions = 50
  const percentage = (score / totalQuestions) * 100

  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center">
            <CheckCircle size={60} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Exam Completed!
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Great job! Here are your results
        </p>

        {/* Score Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8 border border-gray-200">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Score Box */}
            <div className="text-center">
              <p className="text-gray-600 font-medium mb-2">Score</p>
              <p className="text-5xl font-bold text-primary-green">
                {score}/{totalQuestions}
              </p>
            </div>

            {/* Percentage Box */}
            <div className="text-center">
              <p className="text-gray-600 font-medium mb-2">Percentage</p>
              <p className="text-5xl font-bold text-primary-green">{percentage.toFixed(1)}%</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-700">Overall Performance</p>
              <p className="text-sm font-semibold text-gray-700">{percentage.toFixed(1)}%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="bg-primary-green h-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="text-gray-600 text-sm font-medium">Correct Answers</p>
            <p className="text-3xl font-bold text-primary-green mt-2">{score}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <p className="text-gray-600 text-sm font-medium">Wrong Answers</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{totalQuestions - score}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-600 text-sm font-medium">Unanswered</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
          </div>
        </div>

        {/* Performance Feedback */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-gray-800 font-semibold mb-2">Performance Feedback</p>
          <p className="text-gray-700">
            {percentage >= 80
              ? "Excellent! You've demonstrated strong knowledge. Keep practicing to maintain your performance."
              : percentage >= 60
                ? 'Good effort! Focus on the areas where you had difficulty and practice more to improve.'
                : 'You need more practice in this subject. Review the topics and try again.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/exam')}
            className="flex-1 bg-primary-green text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Try Again
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultSummaryPage
