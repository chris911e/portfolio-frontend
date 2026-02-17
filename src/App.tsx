import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import NotFound from './pages/NotFound'
import UnderConstruction from './pages/UnderConstruction'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={`${theme.app.backgroundColor} ${theme.app.textColor} min-h-screen font-[Fira_Code]`}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route path='*' element={<NotFound />} />
                  
                  <Route index element={<Home />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/projects' element={<UnderConstruction />} />
                  <Route path='/study' element={<UnderConstruction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
