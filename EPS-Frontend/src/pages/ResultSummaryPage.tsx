import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const ResultSummaryPage = () => {
  const navigate = useNavigate()
  const [showAnswerReview, setShowAnswerReview] = useState(false)
  const score = 40
  const totalQuestions = 50
  const percentage = (score / totalQuestions) * 100

  // Mock exam data
  const examQuestions = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    number: i + 1,
    text: `Question ${i + 1}: Sample exam question about a specific topic that tests knowledge.`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: Math.floor(Math.random() * 4),
    userAnswer: i < 40 ? Math.floor(Math.random() * 4) : undefined,
  }))

  const getAnswerStatus = (question: typeof examQuestions[0]) => {
    if (question.userAnswer === undefined) return 'unanswered'
    return question.userAnswer === question.correct ? 'correct' : 'wrong'
  }

  return (
    <div className="min-h-screen bg-white">
      {!showAnswerReview ? (
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
                  <p className="text-5xl font-bold text-primary-green">
                    {percentage.toFixed(1)}%
                  </p>
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
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {totalQuestions - score - 10}
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-600 text-sm font-medium">Unanswered</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">10</p>
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
                onClick={() => setShowAnswerReview(true)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Review Answers
                <ArrowRight size={20} />
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
      ) : (
        <div className="p-8">
          <button
            onClick={() => setShowAnswerReview(false)}
            className="mb-6 px-6 py-2 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← Back to Results
          </button>

          <h2 className="text-3xl font-bold text-gray-800 mb-8">Answer Review</h2>

          <div className="space-y-6">
            {examQuestions.map((question) => {
              const status = getAnswerStatus(question)
              const isCorrect = status === 'correct'
              const isUnanswered = status === 'unanswered'

              return (
                <div
                  key={question.id}
                  className={`p-6 rounded-lg border-2 ${
                    isUnanswered
                      ? 'bg-gray-50 border-gray-300'
                      : isCorrect
                        ? 'bg-green-50 border-green-300'
                        : 'bg-red-50 border-red-300'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      Question {question.number}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        isUnanswered
                          ? 'bg-gray-200 text-gray-700'
                          : isCorrect
                            ? 'bg-green-200 text-green-800'
                            : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {isUnanswered ? '❌ Not Answered' : isCorrect ? '✓ Correct' : '✗ Wrong'}
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-gray-800 mb-4">{question.text}</p>

                  {/* Options */}
                  <div className="space-y-2">
                    {question.options.map((option, index) => {
                      const isUserAnswer = question.userAnswer === index
                      const isCorrectAnswer = question.correct === index

                      let optionClasses =
                        'p-3 rounded-lg border-2 text-left font-medium transition-all '

                      if (isCorrectAnswer && isUserAnswer) {
                        optionClasses += 'bg-green-100 border-green-500 text-green-900'
                      } else if (isCorrectAnswer) {
                        optionClasses += 'bg-green-100 border-green-500 text-green-900'
                      } else if (isUserAnswer) {
                        optionClasses += 'bg-red-100 border-red-500 text-red-900'
                      } else {
                        optionClasses += 'bg-white border-gray-300 text-gray-700'
                      }

                      return (
                        <div key={index} className={optionClasses}>
                          <div className="flex items-center justify-between">
                            <span>
                              {String.fromCharCode(65 + index)}. {option}
                            </span>
                            <span>
                              {isCorrectAnswer && '✓'}
                              {isUserAnswer && isCorrectAnswer ? '' : isUserAnswer ? '✗' : ''}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer Actions */}
          <div className="mt-12 flex gap-4">
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
              Try Another Exam
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultSummaryPage
