import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div
      className='
        bg-[#141414]
        text-white
        min-h-screen
        font-[Fira_Code]
      '
    >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route path='*' element={<NotFound />} />
                  
                  <Route index element={<Home />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/projects' element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
