import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

export default function App() {
  return (
    <div style={{
      fontFamily: "Fira Code"
    }}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
