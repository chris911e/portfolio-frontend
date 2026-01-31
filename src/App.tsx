import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

export default function App() {
  return (
    <div
      className='
        bg-[#101411]
        text-white
        min-h-screen
        font-[Fira_Code]
      '
    >
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
