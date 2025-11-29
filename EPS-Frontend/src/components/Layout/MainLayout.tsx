import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, History, LogOut } from 'lucide-react'

const MainLayout = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Logo/Header Area */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">EPS</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/results"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive('/results')
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <History size={20} />
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive('/admin')
                    ? 'bg-primary-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <LayoutDashboard size={20} />
                <span>Admin</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <Link
            to="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-white">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
