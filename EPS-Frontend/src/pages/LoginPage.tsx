import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login')
  const [role, setRole] = useState<'student' | 'admin'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">EPS</h1>
          <p className="text-gray-600">Examination Practice System</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 font-semibold transition-colors ${
              activeTab === 'login'
                ? 'text-primary-green border-b-2 border-primary-green'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 font-semibold transition-colors ${
              activeTab === 'signup'
                ? 'text-primary-green border-b-2 border-primary-green'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sign Up - Full Name */}
          {activeTab === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              required
            />
          </div>

          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Role
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={(e) => setRole(e.target.value as 'student' | 'admin')}
                  className="w-4 h-4 text-primary-green"
                />
                <span className="text-gray-700">Student</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={(e) => setRole(e.target.value as 'student' | 'admin')}
                  className="w-4 h-4 text-primary-green"
                />
                <span className="text-gray-700">Admin</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-green text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          {activeTab === 'login'
            ? "Don't have an account? Click Sign Up"
            : 'Already have an account? Click Login'}
        </p>
      </div>
    </div>
  )
}

export default LoginPage
