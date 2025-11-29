import { useState } from 'react'
import { Clock } from 'lucide-react'

const QuestionInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({
    0: 'A',
  })
  const timeLeft = '01:45:30'

  const questions = [
    {
      id: 0,
      text: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
    },
    {
      id: 1,
      text: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    },
    {
      id: 2,
      text: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    },
    {
      id: 3,
      text: 'Who was the first President of the USA?',
      options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
    },
    {
      id: 4,
      text: 'What is the chemical formula for water?',
      options: ['CO2', 'H2O', 'NaCl', 'O2'],
    },
    // Add more questions for testing - total of 50
    ...Array.from({ length: 45 }, (_, i) => ({
      id: i + 5,
      text: `Question ${i + 6}: This is a sample question about a specific topic.`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    })),
  ]

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]
  const answeredCount = Object.keys(selectedAnswers).length

  return (
    <div className="flex h-screen bg-white">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">JAMB - English Language</h2>
          </div>
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
            <Clock size={24} className="text-primary-green" />
            <span>{timeLeft}</span>
          </div>
        </div>

        {/* Question Area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl">
            {/* Question Number and Text */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-8">{question.text}</p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index) // A, B, C, D
                const isSelected = selectedAnswer === optionLetter
                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(optionLetter)}
                    className={`w-full p-4 rounded-lg border-2 text-left flex items-center gap-4 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {optionLetter}. {option}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))
                }
                disabled={currentQuestion === questions.length - 1}
                className="px-6 py-3 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Question Navigation */}
      <aside className="w-72 border-l border-gray-200 p-6 overflow-auto bg-gray-50">
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Questions</h3>
          <p className="text-sm text-gray-600 mb-4">
            Answered: <span className="font-semibold">{answeredCount}</span> / {questions.length}
          </p>

          {/* Question Grid */}
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q) => {
              const isAnsweredQ = q.id in selectedAnswers
              const isCurrent = q.id === currentQuestion
              return (
                <button
                  key={q.id}
                  onClick={() => handleNavigateQuestion(q.id)}
                  className={`w-10 h-10 rounded-full font-semibold text-sm transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'border-4 border-blue-500 bg-white text-blue-500'
                      : isAnsweredQ
                        ? 'bg-primary-green text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {q.id + 1}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-300 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-4 border-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Current</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary-green rounded-full"></div>
              <span className="text-sm text-gray-700">Answered</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <span className="text-sm text-gray-700">Not Answered</span>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-8 bg-primary-green text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Submit Exam
          </button>
        </div>
      </aside>
    </div>
  )
}

export default QuestionInterface
