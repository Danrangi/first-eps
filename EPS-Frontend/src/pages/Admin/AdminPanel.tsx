import { useState } from 'react'
import { Users, BookOpen, Trash2, Edit2, Plus } from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'questions'>('students')

  // Mock data
  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com', attempts: 5, avgScore: 78 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', attempts: 3, avgScore: 85 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', attempts: 8, avgScore: 72 },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', attempts: 4, avgScore: 92 },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', attempts: 2, avgScore: 68 },
  ]

  const exams = [
    { id: 1, name: 'JAMB English', questions: 50, created: '2025-01-15' },
    { id: 2, name: 'JAMB Mathematics', questions: 50, created: '2025-01-14' },
    { id: 3, name: 'WAEC English', questions: 40, created: '2025-01-10' },
    { id: 4, name: 'NECO Physics', questions: 45, created: '2025-01-08' },
  ]

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Panel</h1>
        <p className="text-gray-600">Manage students and exam questions</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('students')}
          className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
            activeTab === 'students'
              ? 'text-primary-green border-b-2 border-primary-green'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Users size={20} />
          Manage Students
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
            activeTab === 'questions'
              ? 'text-primary-green border-b-2 border-primary-green'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <BookOpen size={20} />
          Manage Questions/Exams
        </button>
      </div>

      {/* Students Tab */}
      {activeTab === 'students' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Students</h2>
            <button className="flex items-center gap-2 bg-primary-green text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Plus size={20} />
              Add Student
            </button>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Attempts
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Avg. Score
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.email}</td>
                    <td className="px-6 py-4 text-gray-600">{student.attempts}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-primary-green font-semibold text-sm">
                        {student.avgScore}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit2 size={18} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Questions/Exams Tab */}
      {activeTab === 'questions' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Exams & Questions</h2>
            <button className="flex items-center gap-2 bg-primary-green text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Plus size={20} />
              Create Exam
            </button>
          </div>

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exam.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {exam.questions} questions
                    </p>
                    <p className="text-gray-500 text-xs">Created: {exam.created}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit2 size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 border border-primary-green text-primary-green rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    View Questions
                  </button>
                  <button className="flex-1 px-4 py-2 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
