import { scan } from 'react-scan' // must be imported before React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './css/index.css'
import HomePage from './pages/home/page.tsx'
import BadgePage from './pages/badge/page.tsx'
import ButtonPage from './pages/button/page.tsx'
import HeadingPage from './pages/heading/page.tsx'
import InputPage from './pages/input/page.tsx'
import InputExamplesPage from './pages/input/examples/page.tsx'
import SidebarPage from './pages/sidebar/page.tsx'
import NavPage from './pages/nav/page.tsx'
import TabsPage from './pages/tabs/page.tsx'
import TextareaPage from './pages/textarea/page.tsx'
import DocLayout from './layouts/AppLayout.tsx'
import SelectPage from './pages/select/page.tsx'

scan({ enabled: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DocLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/heading" element={<HeadingPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/input/select" element={<SelectPage />} />
          <Route path="/input/textarea" element={<TextareaPage />} />
          <Route path="/input/example" element={<InputExamplesPage />} />
          <Route path="/nav" element={<NavPage />} />
          <Route path="/sidebar" element={<SidebarPage />} />
          <Route path="/tabs" element={<TabsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
