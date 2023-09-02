import Layout from './containers/Layout'
import Login from './features/user/Login'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App () {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />
          <Route
            path="*"
            element={<Navigate to="/app/styling" replace />}
          />
        </Routes>
      </Router>
  )
}

export default App
