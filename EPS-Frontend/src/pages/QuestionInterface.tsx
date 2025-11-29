import { useState } from 'react'
import { Clock, Flag, Trash2 } from 'lucide-react'

const QuestionInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set())
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [timeLeft] = useState('01:45:30')

  const questions = [
    {
      id: 0,
      text: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correct: 2,
    },
    {
      id: 1,
      text: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correct: 1,
    },
    {
      id: 2,
      text: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correct: 3,
    },
    {
      id: 3,
      text: 'Who was the first President of the USA?',
      options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
      correct: 1,
    },
    {
      id: 4,
      text: 'What is the chemical formula for water?',
      options: ['CO2', 'H2O', 'NaCl', 'O2'],
      correct: 1,
    },
    ...Array.from({ length: 45 }, (_, i) => ({
      id: i + 5,
      text: `Question ${i + 6}: This is a sample question about a specific topic.`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: Math.floor(Math.random() * 4),
    })),
  ]

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]
  const answeredCount = Object.keys(selectedAnswers).length
  const flaggedCount = flaggedQuestions.size

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex.toString(),
    })
  }

  const handleClearAnswer = () => {
    const newAnswers = { ...selectedAnswers }
    delete newAnswers[currentQuestion]
    setSelectedAnswers(newAnswers)
  }

  const handleToggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions)
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion)
    } else {
      newFlagged.add(currentQuestion)
    }
    setFlaggedQuestions(newFlagged)
  }

  const handleNavigateQuestion = (questionId: number) => {
    setCurrentQuestion(questionId)
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const isFlagged = flaggedQuestions.has(currentQuestion)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-gray-200 px-8 py-4 bg-gray-50 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">JAMB</span>
          <span className="text-gray-400">|</span>
          <span className="text-lg text-gray-700">Mathematics</span>
        </div>
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <Clock size={24} className="text-primary-green" />
          <span>{timeLeft}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-primary-green transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Question Area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl">
            {/* Question Header */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <p className="text-2xl font-bold text-gray-800">{question.text}</p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-12">
              {question.options.map((option, index) => {
                const isSelected = parseInt(selectedAnswer || '-1') === index
                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    className={`w-full p-4 rounded-lg border-2 text-left flex items-center gap-4 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 ${
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
                      {String.fromCharCode(65 + index)}. {option}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleToggleFlag}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    isFlagged
                      ? 'bg-yellow-100 border-2 border-yellow-500 text-yellow-700'
                      : 'bg-gray-100 border-2 border-gray-300 text-gray-700 hover:border-yellow-400'
                  }`}
                >
                  <Flag size={18} />
                  {isFlagged ? 'Unflag' : 'Flag'}
                </button>
                <button
                  onClick={handleClearAnswer}
                  disabled={selectedAnswer === undefined}
                  className="px-6 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  Clear
                </button>
              </div>

              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="px-6 py-3 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                Next →
              </button>
            </div>

            {/* Submit Button */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-8 py-3 bg-primary-green text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-gray-200 bg-white p-6 overflow-y-auto sticky top-14 h-[calc(100vh-56px)]">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Questions</h3>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-green rounded-sm"></div>
                  <span className="text-sm text-gray-700">Answered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                  <span className="text-sm text-gray-700">Flagged</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-3 border-blue-500 bg-white rounded-sm"></div>
                  <span className="text-sm text-gray-700">Current</span>
                </div>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="flex-1 overflow-y-auto mb-6">
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q) => {
                  const isAnswered = q.id in selectedAnswers
                  const isCurrent = q.id === currentQuestion
                  const isFlaggedQ = flaggedQuestions.has(q.id)

                  let classes =
                    'w-full aspect-square rounded-md font-semibold text-sm transition-all flex items-center justify-center cursor-pointer '

                  if (isCurrent) {
                    classes += 'border-3 border-blue-500 bg-white text-blue-500'
                  } else if (isAnswered && isFlaggedQ) {
                    classes += 'bg-yellow-400 text-gray-800 border-2 border-yellow-500'
                  } else if (isAnswered) {
                    classes += 'bg-primary-green text-white border-2 border-primary-green'
                  } else if (isFlaggedQ) {
                    classes += 'bg-yellow-100 text-yellow-700 border-2 border-yellow-400'
                  } else {
                    classes += 'bg-gray-100 text-gray-600 border-2 border-gray-300 hover:border-gray-400'
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleNavigateQuestion(q.id)}
                      className={classes}
                    >
                      {q.id + 1}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Answered:</span>
                <span className="font-semibold text-gray-800">{answeredCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Flagged:</span>
                <span className="font-semibold text-gray-800">{flaggedCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Remaining:</span>
                <span className="font-semibold text-gray-800">
                  {questions.length - answeredCount}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4">
            {/* Modal Header */}
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800">Submit Exam?</h3>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Questions:</span>
                  <span className="font-semibold text-gray-800">{questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Answered:</span>
                  <span className="font-semibold text-green-600">{answeredCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Unanswered:</span>
                  <span className="font-semibold text-red-600">
                    {questions.length - answeredCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Flagged:</span>
                  <span className="font-semibold text-yellow-600">{flaggedCount}</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                Are you sure you want to submit? You cannot change your answers after
                submission.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Review Answers
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false)
                  // Navigate to results
                  window.location.href = '/results'
                }}
                className="flex-1 px-4 py-2 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionInterface
