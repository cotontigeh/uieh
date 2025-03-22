import { scan } from 'react-scan' // must be imported before React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import { ButtonsView } from './pages/ButtonsView.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import { BadgesView } from './pages/BadgesView.tsx'
import { TabsView } from './pages/TabsView.tsx'
import { NavView } from './pages/NavView.tsx'
import { HomeView } from './pages/HomeView.tsx'
import { SidebarView } from './pages/SidebarView.tsx'
import { InputsView } from './pages/InputsView.tsx'
import { TextareaView } from './pages/TextareaView.tsx'
import { TitlesView } from './pages/TitlesView.tsx'

scan({ enabled: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/badges" element={<BadgesView />} />
          <Route path="/buttons" element={<ButtonsView />} />
          <Route path="/inputs" element={<InputsView />} />
          <Route path="/sidebar" element={<SidebarView />} />
          <Route path="/tabs" element={<TabsView />} />
          <Route path="/textarea" element={<TextareaView />} />
          <Route path="/title" element={<TitlesView />} />
          <Route path="/nav" element={<NavView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
