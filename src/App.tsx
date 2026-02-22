import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import UnderConstruction from './pages/UnderConstruction'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={`${theme.colors.primary} ${theme.text.primary} min-h-screen font-[Fira_Code]`}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                  <Route path='*' element={<NotFound />} />
                  
                  <Route index element={<Home />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/chat' element={<Chat />} />
                  <Route path='/study' element={<UnderConstruction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
