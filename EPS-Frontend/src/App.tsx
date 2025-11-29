import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import QuestionInterface from './pages/QuestionInterface'
import ResultSummaryPage from './pages/ResultSummaryPage'
import AdminPanel from './pages/Admin/AdminPanel'
import MainLayout from './components/Layout/MainLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam" element={<QuestionInterface />} />
          <Route path="/results" element={<ResultSummaryPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
